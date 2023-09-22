export default class UserDto {

    private username: string;
    private password: string;
    private email: string;
    private jwt_token: string;

    constructor(username: string, password: string, email: string, token: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.jwt_token = token;
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }

    getEmail(): string {
        return this.email;
    }

    getToken(): string {
        return this.jwt_token;
    }

}