import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-codespace-name-8000.app.github.dev', // paste your URL here
  timeout: 30000, // 30s — Whisper can take a moment
});

export default api;