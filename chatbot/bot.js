require('dotenv').config();
const { OpenAI } = require('openai');
const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const app = express();

// Load SSL certificates
const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem'),
};

// Initialize OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Add rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

app.use(express.json());
app.use('/api/chatbot', limiter);
app.use(cors());

const validateMessage = (message) => {
  if (typeof message !== 'string') return false;
  if (message.trim().length === 0) return false;
  if (message.length > 500) return false; // Max message length
  return true;
};

app.post('/api/chatbot', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Add a root route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start HTTPS server
const PORT = process.env.PORT || 5000;
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});