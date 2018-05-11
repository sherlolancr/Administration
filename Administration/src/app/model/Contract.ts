import { Optional } from "@angular/core";

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

export class Contract_information{
  constructor(
    private id:number, 
    private organisation_name:string, 
    private cost:number,
    private note:string,
    private created_at:string,
    private environment_name:string,
    private environment_id:number,
    private vm_cost
  ){
  }

}


export class Contract_request{
  constructor(
    private product_number:number, 
    private environment_name:string, 
    private user_email:string,
    private total_cost:number,
    @Optional() private vm_list:VmInformation_contract[],
    private status:number

  
  ){
  }
}

export class VmBreakDown{
  constructor(

    public cost:number,
    public name:string,
    public size:number,

  
  ){
  }
}

export class VmInformation_contract{
  private  CPU_breakdown:VmBreakDown
  private RAM_breakdown:VmBreakDown
  private HDD_breakdown:VmBreakDown

  constructor(
    private vm_name:string,
    private cost:number
  ){
  }

  setVmBreakDown(data){

    let id = data.id
    this.RAM_breakdown = new VmBreakDown(data.ram_cost,"ram",data.ram);

    this.CPU_breakdown = new VmBreakDown(data.cpu_cost,"cpu",data.cpu);

    let hdd_type;
    let disk_id = data.disk_item_id
    if(disk_id == 3){
      hdd_type = 'SATA'
    }
    else if (disk_id == 4){
      hdd_type = 'SAS10'
    }
    else if (disk_id == 5){
      hdd_type = 'SAS15'
    }
    else if (disk_id == 6){
      hdd_type = 'SSD'
    }
    else{
      alert("some thing went wrong")
    }
    this.HDD_breakdown = new VmBreakDown(data.disk_cost,hdd_type,data.disk);
    
  }
}