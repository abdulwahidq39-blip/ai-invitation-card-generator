# AI Invitation Card Generator - Project Structure Guide

## 📁 Directory Organization

### Frontend (`/frontend`)
```
frontend/
├── public/                    # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── create/            # Create invitation
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── preview/           # Preview page
│   │   ├── gallery/           # Template gallery
│   │   ├── my-invitations/    # Saved invitations
│   │   ├── pricing/           # Pricing page
│   │   ├── about/             # About page
│   │   └── api/               # API routes
│   │
│   ├── components/            # Reusable components
│   │   ├── layouts/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── forms/
│   │   │   ├── InvitationForm.tsx
│   │   │   ├── ImageUpload.tsx
│   │   │   └── EventDetailsForm.tsx
│   │   ├── cards/
│   │   │   ├── InvitationCard.tsx
│   │   │   ├── TemplateCard.tsx
│   │   │   └── PreviewCard.tsx
│   │   ├── buttons/
│   │   │   ├── Button.tsx
│   │   │   └── ActionButton.tsx
│   │   ├── modals/
│   │   │   ├── PreviewModal.tsx
│   │   │   ├── ShareModal.tsx
│   │   │   └── DownloadModal.tsx
│   │   ├── canvas/
│   │   │   ├── CanvasEditor.tsx
│   │   │   ├── TextOverlay.tsx
│   │   │   └── CanvasToolbar.tsx
│   │   └── ui/
│   │       └── (shadcn-ui components)
│   │
│   ├── services/              # API & external services
│   │   ├── api.ts             # Axios instance
│   │   ├── invitationService.ts
│   │   ├── aiService.ts       # AI API calls
│   │   ├── storageService.ts  # Cloudinary/S3 upload
│   │   ├── qrCodeService.ts
│   │   ├── downloadService.ts
│   │   └── shareService.ts
│   │
│   ├── types/                 # TypeScript types
│   │   ├── index.ts
│   │   ├── invitation.ts
│   │   ├── event.ts
│   │   ├── template.ts
│   │   └── api.ts
│   │
│   ├── utils/                 # Utility functions
│   │   ├── helpers.ts
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   ├── constants.ts
│   │   └── hooks.ts           # Custom hooks
│   │
│   ├── store/                 # Zustand state
│   │   ├── useInvitationStore.ts
│   │   ├── useUIStore.ts
│   │   └── useAuthStore.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── templates.css
│   │   └── animations.css
│   │
│   └── config/
│       ├── constants.ts
│       ├── eventTypes.ts
│       └── themes.ts
│
├── .env.example               # Environment template
├── .env.local                 # Local env (git ignored)
├── next.config.js             # Next.js config
├── tailwind.config.ts         # Tailwind config
├── postcss.config.js          # PostCSS config
├── tsconfig.json              # TypeScript config
└── package.json
```

### Backend (`/backend`)
```
backend/
├── src/
│   ├── routes/                # Express routes
│   │   ├── index.ts
│   │   ├── invitation.ts      # POST /api/invitations
│   │   ├── ai.ts              # POST /api/ai/generate
│   │   ├── qrcode.ts          # POST /api/qrcode
│   │   ├── upload.ts          # POST /api/upload
│   │   ├── download.ts        # GET /api/download/:id
│   │   └── user.ts            # User routes (optional)
│   │
│   ├── controllers/           # Route handlers
│   │   ├── invitationController.ts
│   │   ├── aiController.ts
│   │   ├── qrcodeController.ts
│   │   ├── uploadController.ts
│   │   ├── downloadController.ts
│   │   └── userController.ts
│   │
│   ├── models/                # MongoDB schemas
│   │   ├── Invitation.ts
│   │   ├── Template.ts
│   │   ├── User.ts
│   │   ├── DesignTheme.ts
│   │   └── SavedCard.ts
│   │
│   ├── services/              # Business logic
│   │   ├── aiService.ts       # Stability AI / HF API
│   │   ├── imageService.ts    # Sharp processing
│   │   ├── qrcodeService.ts   # QR generation
│   │   ├── storageService.ts  # Cloudinary / S3
│   │   ├── emailService.ts    # Email sending
│   │   ├── canvasService.ts   # Canvas rendering
│   │   └── validationService.ts
│   │
│   ├── middleware/            # Custom middleware
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   ├── rateLimit.ts
│   │   ├── validation.ts
│   │   └── fileUpload.ts
│   │
│   ├── types/                 # TypeScript types
│   │   ├── index.ts
│   │   ├── invitation.ts
│   │   ├── request.ts
│   │   ├── response.ts
│   │   └── ai.ts
│   │
│   ├── utils/                 # Utilities
│   │   ├── logger.ts
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   ├── errorHandler.ts
│   │   └── constants.ts
│   │
│   ├── config/                # Configuration
│   │   ├── database.ts
│   │   ├── env.ts
│   │   ├── ai.ts
│   │   ├── storage.ts
│   │   └── cors.ts
│   │
│   ├── app.ts                 # Express app setup
│   └── server.ts              # Entry point
│
├── dist/                      # Compiled output (git ignored)
├── .env.example               # Environment template
├── .env                       # Local env (git ignored)
├── tsconfig.json              # TypeScript config
└── package.json
```

## 🔧 Environment Variables Setup

### Backend (.env)
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/invitation-generator

# CORS
CORS_ORIGIN=http://localhost:3000

# AI Services (Choose one or multiple)
STABILITY_AI_KEY=sk_...
HUGGING_FACE_KEY=hf_...

# Storage
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Security
JWT_SECRET=your_secret_key
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_APP_NAME=AI Invitation Card Generator
```

## 📦 Key Dependencies

### Frontend
- **Next.js**: React framework with SSR
- **Tailwind CSS**: Utility-first CSS
- **React Hook Form**: Form handling
- **Fabric.js**: Canvas manipulation
- **Framer Motion**: Animations
- **Zustand**: State management

### Backend
- **Express.js**: Web framework
- **Mongoose**: MongoDB ORM
- **Sharp**: Image processing
- **qrcode**: QR code generation
- **Multer**: File upload
- **Axios**: HTTP client

## 🚀 Development Workflow

### 1. Install Dependencies
```bash
cd frontend && npm install
cd ../backend && npm install
```

### 2. Setup Environment
```bash
# Backend
cp backend/.env.example backend/.env
# Add your API keys

# Frontend
cp frontend/.env.example frontend/.env.local
```

### 3. Start MongoDB
```bash
mongod
# or use MongoDB Atlas connection string
```

### 4. Run Development Servers
```bash
# Terminal 1: Frontend
cd frontend && npm run dev

# Terminal 2: Backend
cd backend && npm run dev
```

### 5. Access Application
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health Check: http://localhost:5000/health

## 📋 API Endpoints (To Be Implemented)

### Invitations
- `POST /api/invitations/create` - Create new invitation
- `GET /api/invitations/:id` - Get invitation details
- `PUT /api/invitations/:id` - Update invitation
- `DELETE /api/invitations/:id` - Delete invitation

### AI Generation
- `POST /api/ai/generate-background` - Generate AI background
- `POST /api/ai/generate-templates` - Generate multiple templates

### QR Codes
- `POST /api/qrcode/generate` - Generate QR code

### Upload
- `POST /api/upload` - Upload images

### Download
- `GET /api/download/:id` - Download invitation

## 🎯 Component Communication Flow

1. **User fills form** → Form component
2. **Submits data** → Services/API call
3. **Backend processes** → AI generation + Template engine
4. **Returns designs** → Frontend receives & displays
5. **User selects** → State updated
6. **Download/Share** → Canvas render + Download/Share services

## 🔐 Security Notes

- Validate all file uploads
- Rate limit API endpoints
- Sanitize user inputs
- Secure API keys in environment
- Use HTTPS in production
- Implement CORS properly

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Design System

- Color palette: Primary, Secondary, Accent, Neutral
- Typography: Heading, Body, Caption, Label
- Spacing: 4px, 8px, 12px, 16px, 24px, 32px
- Border radius: 2px, 4px, 8px, 12px

---

**Next Steps**: Start building components and routes!
