export default class UserDto {

    private username: string;
    private password: string;
    private jwt_token: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.jwt_token = '';
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }

    getToken(): string {
        return this.jwt_token;
    }

}