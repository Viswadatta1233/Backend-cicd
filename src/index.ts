import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

// CORS configuration
const corsOptions = {
  origin: [
    'http://3.108.63.13',
    'http://3.108.63.13:3000', // In case your frontend runs on port 3000
    'http://localhost:3000',   // For local development
    'http://localhost:3001'    // Alternative local port
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express + TypeScript API! using cicd test format agian test3" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} from CICD`);
}); 