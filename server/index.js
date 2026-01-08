const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, interest, goals } = req.body || {};
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  const to = process.env.TO_EMAIL || process.env.SMTP_USER;
  const from = process.env.FROM_EMAIL || process.env.SMTP_USER;
  const subject = `Contact form submission from ${name}`;
  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Interest:</strong> ${interest || '-'} </p>
    <p><strong>Goals:</strong><br/>${(goals || '-').replace(/\n/g, '<br/>')}</p>
  `;

  try {
    await transporter.sendMail({ from, to, subject, html, replyTo: email });
    res.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Email server running on http://localhost:${PORT}`));
