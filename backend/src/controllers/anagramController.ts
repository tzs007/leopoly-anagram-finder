import { Request, Response } from "express";
import { getAnagrams } from "../services/anagramService";

interface AnagramRequestBody {
  word: string;
}

export const find = async (
  req: Request<{}, {}, AnagramRequestBody>,
  res: Response
) => {
  try {
    const { word } = req.body;

    // guard
    if (!word || word.length !== 5) {
      return res
        .status(400)
        .json({ success: false, error: "Only 5 letter words allowed!" });
    }

    const anagrams = getAnagrams(word);

    return res.status(200).json({
      success: true,
      anagrams,
    });
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: false, error: "Unexpected server error!" });
  }
};
