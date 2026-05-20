# AI Invitation Card Generator - Setup & Run Guide

## 🚀 Quick Start (5 minutes)

### Prerequisites
- Node.js 18+ and npm installed
- MongoDB (local or Atlas)
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/abdulwahidq39-blip/ai-invitation-card-generator.git
cd ai-invitation-card-generator
```

### Step 2: Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your credentials:
# - MONGODB_URI
# - STABILITY_AI_KEY or HUGGING_FACE_KEY
# - CLOUDINARY credentials
```

**Backend .env template:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/invitation-generator
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/invitation-generator

CORS_ORIGIN=http://localhost:3000

# Choose one AI provider:
STABILITY_AI_KEY=sk_...  # from https://api.stability.ai
HUGGING_FACE_KEY=hf_...  # from https://huggingface.co/settings/tokens

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Security
JWT_SECRET=your_secret_key_here
RATE_LIMIT_MAX_REQUESTS=100
```

### Step 3: Setup Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local:
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 4: Start MongoDB

**Option A: Local MongoDB**
```bash
mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Create account at https://www.mongodb.com/cloud/atlas
- Copy connection string
- Add to backend/.env as MONGODB_URI

### Step 5: Start the Project

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Runs on http://localhost:3000
```

### Step 6: Verify Installation

- Backend health check: http://localhost:5000/health
- Frontend: http://localhost:3000
- API: http://localhost:5000/api/version

---

## 📦 NPM Scripts

### Backend
```bash
npm run dev      # Start development server
npm run build    # Compile TypeScript
npm start        # Run compiled version
npm run lint     # Check code style
```

### Frontend
```bash
npm run dev      # Start Next.js dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code style
```

---

## 🔑 Get API Keys (Free Tier)

### 1. Stability AI (Recommended)
- Go to https://api.stability.ai
- Sign up (free tier available)
- Generate API key
- Copy to `backend/.env` as `STABILITY_AI_KEY`

### 2. Hugging Face (Free Alternative)
- Go to https://huggingface.co/settings/tokens
- Create new token
- Copy to `backend/.env` as `HUGGING_FACE_KEY`

### 3. Cloudinary (Image Storage)
- Go to https://cloudinary.com/console
- Sign up (free tier: 25 GB storage)
- Copy Cloud Name, API Key, API Secret
- Add to `backend/.env`

### 4. MongoDB (Database)
**Local:**
- Install MongoDB Community Edition: https://docs.mongodb.com/manual/installation/

**Cloud (Recommended):**
- Create free account: https://www.mongodb.com/cloud/atlas
- Create cluster
- Get connection string
- Add to `backend/.env` as `MONGODB_URI`

---

## 🧪 Testing the APIs

### Using curl or Postman:

**Create Invitation:**
```bash
curl -X POST http://localhost:5000/api/invitations/create \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "wedding",
    "theme": "traditional",
    "color": "gold",
    "eventName": "John & Jane Wedding",
    "eventDate": "2024-12-15",
    "venue": "Grand Ballroom",
    "address": "123 Main St, New York, NY",
    "hostName": "Mr. & Mrs. Smith",
    "contactNumber": "+1-555-1234"
  }'
```

**Check Health:**
```bash
curl http://localhost:5000/health
```

---

## 🐛 Troubleshooting

### Backend won't start
- Check MongoDB is running: `mongod`
- Check port 5000 is free: `lsof -i :5000`
- Check `.env` file exists and is properly formatted
- Check Node version: `node --version` (should be 18+)

### Frontend won't start
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Next.js cache: `rm -rf .next`
- Check port 3000 is free: `lsof -i :3000`

### MongoDB connection fails
- Verify connection string in `.env`
- Check MongoDB is running: `ps aux | grep mongod`
- For Atlas, whitelist your IP: MongoDB Atlas → Network Access

### API calls failing
- Check backend is running: `curl http://localhost:5000/health`
- Check CORS_ORIGIN in backend/.env matches frontend URL
- Check browser console for errors

---

## 📁 Project Structure

```
ai-invitation-card-generator/
├── backend/
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── types/
│   │   └── utils/
│   ├── .env.example
│   ├── .env (git ignored)
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── config/
│   │   ├── store/
│   │   ├── utils/
│   │   └── styles/
│   ├── .env.example
│   ├── .env.local (git ignored)
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
│
└── README.md
```

---

## 🎯 First Steps After Running

1. **Create an invitation** via the form at http://localhost:3000
2. **Fill in event details** - all fields are pre-populated
3. **Submit the form** - creates invitation in database
4. **View in preview** - see AI-generated backgrounds
5. **Download or share** - export and share the invitation

---

## 📚 Next Features to Build

- [ ] Home page with event type selection
- [ ] Canvas component for preview
- [ ] Template gallery
- [ ] Download/export functionality
- [ ] Social sharing
- [ ] User authentication (optional)
- [ ] Saved invitations
- [ ] Payment/Pricing page

---

## 🆘 Need Help?

- Check logs: `npm run dev` shows all errors
- Read PRD: `PROJECT_STRUCTURE.md`
- API docs: Each service file has JSDoc comments
- GitHub Issues: Report bugs and request features

---

## 📝 Development Tips

1. **Use TypeScript**: Enjoy type safety and autocomplete
2. **Follow the structure**: Keep components, services, and types organized
3. **Test APIs first**: Use Postman or curl before building UI
4. **Use environment variables**: Never hardcode secrets
5. **Check console**: Browser and terminal logs show errors

---

**Happy coding! 🚀**
