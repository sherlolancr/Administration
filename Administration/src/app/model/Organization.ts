export class Organization_list_element {
    constructor(
    private  id:number,
    private  name:string,
    private updated_at:string,
    private main_account:string,
    private number_of_user:number,
    )
    {

    }
  }

export interface Organization_detail {
  id:number;
  name:string;
  updated_at:string;
  Main_account:string;
  Next_Payment_amount:string;
  created_at:string;
  main_account:string;
  address:string;
}