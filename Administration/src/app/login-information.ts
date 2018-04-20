export class LoginInformation {
    constructor(
        private username: string,
        private password: string,
      ) {  }
    public getUsername():string{
        return this.username;
    }
    public getPassword():string{
        return this.password;
    }
}

