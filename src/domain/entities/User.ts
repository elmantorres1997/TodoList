export class User {
    username: string;
    password: string;

    constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    }
}

export class currentUser {
    current: string;

    constructor(current: string) {
        this.current = current;
    }
}