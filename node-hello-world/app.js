const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Statik dosyalar için path'i mutlak olarak belirleyelim
app.use(express.static(path.join(__dirname, 'public')));

// Basit bir / route yanıtı ekleyelim
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Uygulama belirtilen portta dinlemeye başlasın
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});