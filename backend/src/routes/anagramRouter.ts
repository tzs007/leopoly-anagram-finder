import { Router } from "express";
import { find } from "../controllers/anagramController";

const router = Router();

router.post("/anagram", find);

export default router;
