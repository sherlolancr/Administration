export class User {
  constructor(
    private id:number,
    private name:string,
    private email_address:string,
    private role:string,
    private status:number,
    private last_activity_date:string,
    private organisation:string,
    private related_environment:string,
  ){

  }


}