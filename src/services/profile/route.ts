import { Request, Response } from "express";
import { checkProfileParams } from "../../middleware/checks";
import { ProfileController } from "./profileController";


export default [
    {
        path: "/api/v1/profile",
        method: "get",
        handler: [
            checkProfileParams,
            (req: Request, res: Response) => {
                const userProfile = new ProfileController(req);
                const result = userProfile.getUserProfile();
                res.status(200).send(result);
            }
        ]
    }
]