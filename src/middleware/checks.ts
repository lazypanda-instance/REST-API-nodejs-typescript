import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkProfileParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.name) {
    throw new HTTP400Error("Missing name parameter");
  } else {
    next();
  }
};

