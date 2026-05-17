import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health Check Route
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    message: 'AI Invitation Card Generator API is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes (to be implemented)
app.get('/api/version', (req: Request, res: Response) => {
  res.json({ 
    version: '0.1.0',
    name: 'AI Invitation Card Generator API'
  });
});

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    error: 'Not Found',
    path: req.path,
    method: req.method
  });
});

// Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
});

export default app;
