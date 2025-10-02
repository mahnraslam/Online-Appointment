const express = require('express');
const { sendSMS } = require('./smsServices'); // no .js needed
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-sms', async (req, res) => {
  const { phone, message } = req.body;
  try {
    const result = await sendSMS(phone, message);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send SMS' });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));
