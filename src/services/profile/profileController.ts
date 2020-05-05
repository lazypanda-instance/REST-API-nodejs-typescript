import { Request } from "express";
import { UserProfileProvider } from "./provider/userProfileProvider";

export class ProfileController {
    private request: Request;
    private userProfileProvider: UserProfileProvider;

    constructor(req: Request) {
        this.request = req;
        this.userProfileProvider = new UserProfileProvider();
    }

    getUserProfile() {
        const queryParam = this.request.query.name as string;
        return this.userProfileProvider.fetchUserProfile(queryParam);
    }
}