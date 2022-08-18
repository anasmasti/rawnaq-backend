import { Request, Response } from "express";

const home = (req: Request, res: Response) => {
  res.send("Rawnaq backend");
};

export default home;
