const express = require('express');
const app = express();
const path = require('path');

// Стандартний маршрут
app.get('/', (req, res) => {
  res.send('Hello, World! Unix socket');
});

// Вказуємо шлях до сокета
const SOCKET_PATH = '/tmp/node-app.sock';

// Видаляємо старий сокет, якщо він існує
const fs = require('fs');
if (fs.existsSync(SOCKET_PATH)) {
  fs.unlinkSync(SOCKET_PATH);
}

// Запускаємо сервер на Unix-сокеті
app.listen(SOCKET_PATH, () => {
  console.log(`Server is running on Unix socket ${SOCKET_PATH}`);
});

// Встановлюємо правильні права доступу до сокета
fs.chmodSync(SOCKET_PATH, '777');

