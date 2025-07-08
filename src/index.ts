import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express + TypeScript API! using cicd test format agian test" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} from CICD`);
}); 