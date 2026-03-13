import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jubilant-palm-tree-xrvp7x4p5qw26q9g-8000.app.github.dev',
  timeout: 30000, // 30s — Whisper can take a moment
});

export default api;