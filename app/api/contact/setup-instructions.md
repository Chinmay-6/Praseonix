# Custom SMTP Email System Setup Instructions

## Required Environment Variables

Add these to your Vercel project settings or `.env.local`:

\`\`\`bash
# SMTP Configuration (Gmail, Outlook, or custom SMTP server)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Contact recipient email
CONTACT_EMAIL=your-contact@yourdomain.com
\`\`\`

## Setup Steps

### For Gmail SMTP:
1. **Enable 2FA**: Enable two-factor authentication on your Gmail account
2. **Generate App Password**: Go to Google Account settings > Security > App passwords
3. **Create App Password**: Generate a new app password for "Mail"
4. **Use App Password**: Use this 16-character password as `SMTP_PASS`

### For Outlook/Hotmail SMTP:
\`\`\`bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
\`\`\`

### For Custom SMTP Server:
- Contact your hosting provider for SMTP settings
- Ensure your server supports TLS/STARTTLS

## Environment Variable Setup

Add these variables to your Vercel project:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each variable with its corresponding value

## Features Included

- ✅ Custom SMTP email sending (no third-party dependencies)
- ✅ Production-ready IP detection for all hosting environments
- ✅ Enhanced rate limiting with sliding window algorithm
- ✅ Advanced spam detection with multiple pattern checks
- ✅ Connection pooling for optimal performance
- ✅ Professional HTML email templates with responsive design
- ✅ Comprehensive error handling and logging
- ✅ CORS support for production environments
- ✅ Email delivery verification and retry logic

## Production Optimizations

- **Rate Limiting**: 5 requests per 15 minutes per IP address
- **Connection Pooling**: Reuses SMTP connections for better performance
- **IP Detection**: Works with Cloudflare, Vercel, and other proxy services
- **Spam Protection**: Multiple layers of content analysis
- **Error Recovery**: Graceful fallbacks and detailed error logging
- **Security**: Input validation, sanitization, and secure headers

## Troubleshooting

### Common Issues:
1. **"Authentication failed"**: Check SMTP credentials and app password
2. **"Connection timeout"**: Verify SMTP host and port settings
3. **"Rate limited"**: Wait 15 minutes or check IP-based restrictions
4. **"Spam detected"**: Review message content for suspicious patterns

### Testing:
- Use the contact form to send a test message
- Check server logs for detailed error information
- Verify environment variables are properly set in Vercel

## Security Notes

- Never commit SMTP credentials to version control
- Use app passwords instead of account passwords
- Monitor rate limiting logs for suspicious activity
- Regularly rotate SMTP credentials
