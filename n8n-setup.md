# n8n Kurulum ve Kullanım Kılavuzu

## 🚀 n8n Nedir?

n8n, iş akışı otomasyonu için kullanılan güçlü bir platform. Kontakt formundan gelen mesajları otomatik olarak işlemek için kullanıyoruz.

## 📋 Kurulum Durumu

✅ **Docker Desktop** - Kuruldu ve çalışıyor  
✅ **n8n Container** - Çalışıyor (Port 5678)  
✅ **Docker Compose** - Yapılandırıldı  

## 🔗 Erişim Bilgileri

- **URL:** http://localhost:5678
- **Kullanıcı Adı:** admin
- **Şifre:** admin123

## 🛠️ Komutlar

### n8n'i Başlatma
```bash
docker-compose up -d
```

### n8n'i Durdurma
```bash
docker-compose down
```

### Logları Görüntüleme
```bash
docker logs n8n-local
```

### Container Durumu
```bash
docker ps
```

## 📧 Kontakt Form Entegrasyonu

### Mevcut Durum
- Formspree kullanılıyor (Kontakt.tsx)
- Basit email gönderimi

### n8n ile Yapılacaklar
1. **Webhook Endpoint Oluşturma**
   - n8n'de webhook node'u oluştur
   - URL: `http://localhost:5678/webhook/contact-form`

2. **İş Akışı Adımları**
   - Webhook'tan gelen veriyi al
   - Veritabanına kaydet (SQLite/PostgreSQL)
   - Email bildirimi gönder
   - Slack/Discord'a bildirim gönder
   - Otomatik teşekkür mesajı

3. **Kontakt.tsx Güncellemesi**
   - Formspree yerine n8n webhook'u kullan
   - Hata yönetimi ekle

## 🔄 Sonraki Adımlar

1. **n8n Dashboard'a Giriş**
   - http://localhost:5678 adresine git
   - admin/admin123 ile giriş yap

2. **İlk İş Akışını Oluştur**
   - "New Workflow" butonuna tıkla
   - Webhook node'u ekle
   - Test et

3. **Kontakt Formunu Güncelle**
   - Formspree yerine n8n webhook'u kullan
   - Hata yönetimi ekle

## 🐛 Sorun Giderme

### Port Çakışması
```bash
# Eski container'ı durdur
docker stop n8n-local-n8n-1
docker rm n8n-local-n8n-1

# Yeni container'ı başlat
docker-compose up -d
```

### Container Çalışmıyor
```bash
# Logları kontrol et
docker logs n8n-local

# Yeniden başlat
docker-compose restart
```

## 📚 Faydalı Linkler

- [n8n Dokümantasyonu](https://docs.n8n.io/)
- [n8n Webhook Node](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.webhook/)
- [n8n Email Node](https://docs.n8n.io/integrations/builtin/action-nodes/n8n-nodes-base.emailSend/)
