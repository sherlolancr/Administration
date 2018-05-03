export class Contract_list_element {

    constructor(
      private id:number, 
      private environment_name:string, 
      private signed_by:string,
      private created_at:string,
      private ended_at:string,
    
    ){
    }
  }