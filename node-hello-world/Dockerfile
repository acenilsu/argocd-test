# Base image olarak Node.js'in resmi imajını kullanıyoruz
FROM node:18-alpine

# Çalışma dizinini oluşturuyoruz
WORKDIR /app

# Projeyi konteynıra kopyalıyoruz
COPY package*.json ./

# Bağımlılıkları yükliyoruz
RUN npm install

# Uygulamanın tüm dosyalarını konteynıra kopyalıyoruz
COPY . .

# Uygulamanın dinleyeceği portu belirtelim
EXPOSE 3001

# Uygulamayı başlatıyoruz
CMD ["node", "app.js"]