Hostinger Deployment Guide

This guide explains two common Hostinger deployment options: Shared (static) hosting and Node.js (VPS/Hostinger Node App). Follow the section that matches your hosting plan.

1) Prepare the frontend build (required)
- From project root run:
  ```bash
  npm run build
  ```
- Confirm `build/` contains `index.html` and `assets/`.

Option A — Hostinger Shared Hosting (static site only)
- Use this if your Hostinger plan does not support Node.js or you only need the frontend.

Steps:
1. Compress the build folder or upload files directly.
   - Recommended: create a zip of `build/` and extract to `public_html/`.
2. Upload files to `public_html/` via Hostinger File Manager or SFTP/FTP.
3. Add SPA fallback `.htaccess` in `public_html/` with this content:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^ index.html [L]
   ```
4. Remove or adjust the dev CSP meta tag in `build/index.html` if it blocks resources (search for `Content-Security-Policy` and remove or tighten for production).
5. Point your domain to Hostinger (A record to Hostinger IP), enable SSL (Hostinger handles AutoSSL).

Notes:
- Your site will be fully static. The contact form will not function unless you provide a backend API (see Node option or use third-party form services).

Option B — Hostinger Node.js App / VPS (frontend + backend)
- Use this if your plan supports Node.js or you have a VPS/Cloud server where you can run Node.

Two sub-options:
B1) Hostinger Node App (panel-managed)
- Upload your project files (via Git, SFTP, or File Manager).
- In Hostinger control panel > Node.js apps:
  - Set app root to `/backend` (or project root) and entry point to `server.js` (or `backend/server.js`).
  - Set `NODE_ENV=production` and your SMTP env vars (`SMTP_EMAIL`, `SMTP_PASSWORD`, `CONTACT_RECIPIENT`).
  - Install dependencies (`npm install`) via the panel or SSH in the app folder.
  - Start the app from the panel.

B2) VPS / Cloud (SSH + PM2)
- SSH into the server and install Node.js and npm.
- Upload the project (git clone or SFTP).
- From project root:
  ```bash
  npm install            # installs frontend dev deps (if needed)
  npm run build          # generates build/
  npm --prefix backend install
  NODE_ENV=production node backend/server.js # or use PM2
  ```
- Recommended (PM2):
  ```bash
  npm install -g pm2
  pm2 start backend/ecosystem.config.js --env production
  pm2 save
  pm2 startup
  ```
- Set up Nginx reverse proxy to route traffic:
  - Serve static files by pointing to project `build/` (or let Express serve them).
  - Proxy /api/* requests to your Node app (e.g., upstream localhost:5000).
- Enable HTTPS (Certbot / Hostinger auto-SSL).

Backend notes (SMTP and env vars)
- Create `backend/.env` with:
  ```ini
  SMTP_EMAIL=your_smtp_user@example.com
  SMTP_PASSWORD=your_smtp_password
  CONTACT_RECIPIENT=your.test.email@example.com
  NODE_ENV=production
  PORT=5000
  ```
- Ensure the SMTP account and recipient are valid; configure SPF/DKIM records for production sending.

Troubleshooting
- If the site shows a blank page: verify `build/index.html` references `./assets/...` (we already set `base: './'`).
- Test static build locally:
  ```bash
  cd build
  npx serve -l 5000 .
  # or
  python -m http.server 5000
  ```
- If assets 404 when served via backend: ensure Express static serves `build/` and the Node process is running and listening on the expected port.

I can:
- Package `build/` into a zip ready to upload.
- Configure `backend` with a PM2 config and `.env.example` (I added these files).
- Walk you through Hostinger panel steps or prepare commands to run on the server.

Tell me which hosting option you have and whether you want me to create the upload zip now.
