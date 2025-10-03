import cors, { CorsOptions } from "cors";
import express from "express";
import anagramRouter from "./routes/anagramRouter";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);

const configuredOrigins = process.env.FRONTEND_ORIGIN
  ?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions: CorsOptions = {
  origin: configuredOrigins?.includes("*")
    ? true
    : configuredOrigins && configuredOrigins.length > 0
      ? configuredOrigins
      : true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(anagramRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend listening on http://0.0.0.0:${PORT}`);
});
