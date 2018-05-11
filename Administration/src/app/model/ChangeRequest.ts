import { Optional } from "@angular/core";

export class ChangeRequest_list_element {

    constructor(
      private id:number, 
      private request_by:string, 
      private request_at:string,
      private environment_name:string,
      private status:string,
      private read_status:string,
    
    ){
    }

  
  }
export class ChangeRequest{

  constructor(
    private product_number:number, 
    private environment_name:string, 
    private user_email:string,
    private total_cost:number,
    @Optional() private vm_list:VmBreakDown[],
    private status:number

  
  ){
  }


}

export class VmBreakDown{
  constructor(
    public before:number,
    public after:number,
    public cost:number,
    public name:string,
    

  
  ){
  }
}

export class VmInformation{
  CPU_breakdown:VmBreakDown
  RAM_breakdown:VmBreakDown
  HDD_breakdown:VmBreakDown
  cost:number
  constructor(

    private vm_name:string,
  ){

  }

  setVmBreakdown(data){
    let id = data.item_id
    if(id == 1){
      this.RAM_breakdown = new VmBreakDown(data.before_value,data.after_value,data.cost,'CPU');
    }
    else if (id == 2){
      this.CPU_breakdown = new VmBreakDown(data.before_value,data.after_value,data.cost,'CPU');

    }
    else{
      let hdd_type;
      if(id == 3){
        hdd_type = 'SATA'
        
      }
      else if (id == 4){
        hdd_type = 'SAS10'
      }
      else if (id == 5){
        hdd_type = 'SAS15'
      }
      else if (id == 6){
        hdd_type = 'SSD'
      }
      else{
        alert("some thing went wrong")
      }
      this.HDD_breakdown = new VmBreakDown(data.before_value,data.after_value,data.cost,hdd_type);
    }
  }

  calculateCost(){
    this.cost = this.CPU_breakdown.cost+this.RAM_breakdown.cost+this.HDD_breakdown.cost
    return this.cost;
  }
}