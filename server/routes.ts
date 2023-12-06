import { Router } from "express";
import type { Request, Response } from "express";
import urlModel from "./models/url";
import shortid from "shortid";

export const router = Router();

router.post("/shorten-url", async (req: Request, res: Response) => {
  const { url } = req.body;

  const urlExists = await urlModel.findOne({ originalUrl: url });

  if (urlExists) {
    res
      .status(200)
      .json({ shortenUrl: `http://localhost:5000/${urlExists?.urlShortId}` });
  } else {
    const shortUrl = await urlModel.create({
      originalUrl: url,
      urlShortId: shortid.generate(),
    });

    res
      .status(200)
      .json({ shortenUrl: `http://localhost:5000/${shortUrl?.urlShortId}` });
  }

  res.status(422);
});

router.get("/:urlShortId", async (req: Request, res: Response) => {
  const { urlShortId } = req.params;

  const url = await urlModel.findOne({ urlShortId });

  if (url) {
    res.status(200).json({ originalUrl: url.originalUrl });
  } else {
    res.status(404).json({ message: "URL not found" });
  }
});
