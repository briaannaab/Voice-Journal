# 🎙️ VoiceJournal

> Record your thoughts. AI handles the rest.

VoiceJournal is a cross-platform mobile app (iOS & Android) that turns voice recordings into structured, searchable journal entries — powered by OpenAI Whisper, GPT-4, and a sentiment analysis pipeline.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎤 **Voice Recording** | One-tap recording with waveform visualization |
| 📝 **AI Transcription** | Whisper API converts speech to text instantly |
| 🧠 **Smart Summaries** | GPT-4 distills each entry into a clean summary |
| 😊 **Mood Detection** | Sentiment analysis tags each entry with emotional tone |
| 🔍 **Smart Search** | Natural language search across all your entries |

---

## 🏗️ Architecture

```
voicejournal/
├── mobile/               # React Native app (iOS + Android)
│   ├── src/
│   │   ├── screens/      # Home, Record, Entry, Search
│   │   ├── components/   # Waveform, MoodBadge, EntryCard
│   │   ├── hooks/        # useRecorder, useEntries, useSearch
│   │   └── api/          # Backend client
├── backend/              # Python / FastAPI
│   ├── routers/          # /transcribe, /summarize, /search, /entries
│   ├── services/         # whisper.py, gpt.py, sentiment.py, search.py
│   ├── models/           # Entry, User, Mood
│   └── db/               # PostgreSQL via SQLAlchemy
└── infra/                # Docker Compose, env config
```

---

## 🛠️ Tech Stack

**Mobile**
- React Native + Expo
- React Navigation
- Zustand (state management)
- expo-av (audio recording)

**Backend**
- Python 3.11 + FastAPI
- OpenAI Whisper API (transcription)
- OpenAI GPT-4 (summarization)
- HuggingFace `distilbert-base-uncased-finetuned-sst-2-english` (sentiment)
- pgvector + PostgreSQL (semantic search)

**Infrastructure**
- Docker Compose (local dev)
- Railway or Render (deployment)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- Expo CLI
- OpenAI API key
- PostgreSQL with pgvector extension

### Backend

```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # add your OPENAI_API_KEY
uvicorn main:app --reload
```

### Mobile

```bash
cd mobile
npm install
npx expo start
```

Scan the QR code with Expo Go on your device.

---

## 🔑 Environment Variables

```env
OPENAI_API_KEY=sk-...
DATABASE_URL=postgresql://localhost/voicejournal
JWT_SECRET=your-secret-here
```

---

## 📍 Roadmap

- [x] Voice recording + Whisper transcription
- [x] GPT-4 summarization
- [x] Sentiment/mood detection
- [x] Semantic search with pgvector
- [ ] Weekly/monthly mood trend charts
- [ ] Apple Watch / Wear OS companion
- [ ] Offline mode with on-device Whisper

---

## 🤝 Contributing

PRs welcome! Check out [open issues](../../issues) for good first contributions.

---

## 📄 License

MIT