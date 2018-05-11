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

export interface Environment_detail{
  id:number;
  name:string;
  ended_at:string;
  created_at:string;
  vm_count:number,
  tier_count:number,
  user_count:number,
  total_cost:string,
}