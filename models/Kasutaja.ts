export class User {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string
    ) {}

    // Getterid
    get Id(): number {
        return this.id;
    }

    get Username(): string {
        return this.username;
    }

    get Password(): string {
        return this.password;
    }

    get FirstName(): string {
        return this.firstName;
    }

    get LastName(): string {
        return this.lastName;
    }

    // Setterid
    set Id(value: number) {
        this.id = value;
    }

    set Username(value: string) {
        this.username = value;
    }

    set Password(value: string) {
        this.password = value;
    }

    set FirstName(value: string) {
        this.firstName = value;
    }

    set LastName(value: string) {
        this.lastName = value;
    }
}
