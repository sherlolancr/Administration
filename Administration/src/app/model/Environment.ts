export class Environment_list_element {
    
  constructor(
      private id:number,
      private name:string,
      private vm_count:number,
      private tier_count:number,
      private total_cost:string,
      private created_at:string,
    ){

    }
  }