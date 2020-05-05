import dotenv from "dotenv";

dotenv.config();

export class UserProfileProvider {

    private userData = [
        {
            name: 'Lazy Panda',
            role: 'Developer',
            website: 'https://lazypandatech.com'
        },
        {
            name: 'User 1',
            role: 'Student',
            website: 'https://google.com'
        },
        {
            name: 'User 2',
            role: 'Manager',
            website: 'https://youtube.com'
        }
    ]

    constructor() { }

    fetchUserProfile(query: string) {
        const searchTerm = query.replace(/\'/gi,'');
        const searchUser = this.userData.filter(user => user.name === searchTerm);
        return {
            data: searchUser
        }
    }
}