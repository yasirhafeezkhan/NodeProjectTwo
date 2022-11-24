import multer from "multer";
import { Response, Request, NextFunction } from "express";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Media/userimages/");
  },

  filename: function (req: any, file: any, cb: any) {
    cb(
      null,
      "user" +
        "_" +
        Date.now() +
        Math.floor(Math.random() * 1000) +
        path.extname(file.originalname)
    );
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only jpg,jpeg and png are allowed!"), false);
  }
};
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
  fileFilter: fileFilter,
}).single("photo");

export default async function uploader(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("=====calling uploader====");
    upload(req, res, function (err) {
      console.log("=====req body in validator====", req.body);
      console.log("=====req files in validator====", req.file);

      if (err instanceof multer.MulterError) {
        res.status(403).json({ Error: err });
      } else if (err) {
        res.status(403).json({ Error: err });
      }
      next();
    });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
}
