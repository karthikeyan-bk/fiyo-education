import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Simple request logger to diagnose static asset requests
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.originalUrl);
  next();
});

// Development Content Security Policy header to allow local connections (adjust for production)
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self' data: blob: 'unsafe-inline' https:; connect-src 'self' http://localhost:5000 http://127.0.0.1:5000 ws://localhost:5000 ws://127.0.0.1:5000; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; frame-src https:"
  );
  next();
});

// Health-check route
app.get('/api/health', (req, res) => {
  res.send('Fiyo Academy backend is running');
});

// Serve frontend build if present (supports running server from backend/ or project root)
(() => {
  const possiblePaths = [
    path.resolve(process.cwd(), 'build'), // when running from project root
    path.resolve(process.cwd(), '..', 'build'), // when running from backend folder
  ];

  const buildPath = possiblePaths.find((p) => fs.existsSync(p));
  if (buildPath) {
    // Serve static assets and the general build folder
    app.use('/assets', express.static(path.join(buildPath, 'assets')));
    app.use(express.static(buildPath));
    // Fallback for client-side routing: only serve index.html for
    // GET requests that are not API calls and do not look like file requests.
    app.use((req, res, next) => {
      if (req.method !== 'GET') return next();
      if (req.path.startsWith('/api')) return next();
      if (req.path.startsWith('/assets')) return next();
      if (path.extname(req.path)) return next(); // has file extension, let static handle
      return res.sendFile(path.join(buildPath, 'index.html'));
    });
    console.log('Serving frontend from:', buildPath);
  } else {
    console.warn('No frontend build directory found. Run `npm run build` in the project root.');
  }
})();

app.post("/api/contact", async (req, res) => {
  const { name, email, interest, goals } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify SMTP connection before attempting to send
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('SMTP verification failed:', verifyErr);
      return res.status(502).json({ success: false, error: 'SMTP verification failed' });
    }

    // Recipient can be overridden with CONTACT_RECIPIENT env var for testing
    const recipient = process.env.CONTACT_RECIPIENT || 'info@fiyoacademy.com';

    await transporter.sendMail({
      from: `"Fiyo Academy" <${process.env.SMTP_EMAIL}>`,
      to: recipient,
      subject: "New Financial Assessment Request",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Interest:</b> ${interest}</p>
        <p><b>Goals:</b> ${goals}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    // Return error message for easier debugging in development
    const message = err && err.message ? err.message : 'Unknown error';
    res.status(500).json({ success: false, error: message });
  }
});

app.listen(5000, () =>
  console.log("✅ SMTP server running on http://localhost:5000")
);
