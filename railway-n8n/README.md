# n8n Railway Deployment

Bu repository n8n'i Railway'de deploy etmek için kullanılır.

## Environment Variables

Railway'de şu environment variable'ları ayarla:

- `N8N_BASIC_AUTH_ACTIVE=true`
- `N8N_BASIC_AUTH_USER=admin`
- `N8N_BASIC_AUTH_PASSWORD=your_password`
- `N8N_HOST=0.0.0.0`
- `N8N_PORT=3000`
- `N8N_PROTOCOL=https`
- `WEBHOOK_URL=https://your-railway-app.railway.app/`
- `GENERIC_TIMEZONE=Europe/Zurich`

## Deployment

1. Bu repository'yi GitHub'a yükle
2. Railway'de "Deploy from GitHub repo" seç
3. Environment variable'ları ayarla
4. Deploy et

## Webhook URL

Deploy ettikten sonra webhook URL'i şöyle olacak:
`https://your-railway-app.railway.app/webhook/contact-form`
