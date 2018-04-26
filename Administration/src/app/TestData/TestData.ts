export class Element {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}
export const ELEMENT_DATA: Element[] = [
  {id:1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {id: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {id: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {id: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {id: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {id: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {id: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {id: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {id: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {id: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {id: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
export class Organization {
  id:number;
  company_name: string;
  lastActivity: string;
  users_number: number;
  main_account: string;

  
}

export const organizationData: Organization[] = [
  {id:1, company_name : 'Microsoft', main_account : 'Bruce.L @ Microsoft.com', users_number :3 , lastActivity : '27/04/2018'},
  {id:2, company_name : 'NHS', main_account : 'Terry.Z @ NHS.com', users_number :5 , lastActivity : '15/04/2018'},
  {id:3, company_name : 'JP', main_account : 'Felton.H @ JP.com', users_number :6 , lastActivity : '27/02/2014'},
  {id:4, company_name : 'Ali', main_account : 'Hamish.B @ Ali.com', users_number :2 , lastActivity : '12/01/2018'},
  {id:5, company_name : 'Imperial', main_account : 'Andrew.F @ Imperial.com', users_number :13 , lastActivity : '27/03/2018'},
  {id:6, company_name : 'Google', main_account : 'Ray.L @ Google.com', users_number :5 , lastActivity : '30/02/2018'},
  {id:7, company_name : 'Amazon', main_account : 'West.L @ Amazon.com', users_number :5 , lastActivity : '06/07/2018'}
  
];

export interface User {
  id:number;
  user_name:string;
  email_address:string;
  company_name: string;
  lastActivity: string;
  role: string;
  related_environment: number;
}

export const userData: User[] = [
  {id:1, user_name:'Bruce Lee', company_name : 'Microsoft', email_address : 'Bruce.L @ Microsoft.com',role:'Super Admin', related_environment :13 , lastActivity : '27/04/2018'},
  {id:2, user_name:'James Smith', company_name : 'Microsoft', email_address : 'James.S @ Microsoft.com',role:'Admin', related_environment :12 , lastActivity : '23/04/2018'},
  {id:3, user_name:'Michael Smith', company_name : 'Microsoft', email_address : 'Michael.S @ Microsoft.com',role:'Admin', related_environment :4 , lastActivity : '23/04/2018'},
  {id:4, user_name:'Robert Smith', company_name : 'Microsoft', email_address : 'Robert.S @ Microsoft.com',role:'Admin', related_environment :10 , lastActivity : '27/02/2018'},
  {id:5, user_name:'Maria Garcia', company_name : 'Microsoft', email_address : 'Maria.G @ Microsoft.com',role:'Finance', related_environment :13 , lastActivity : '27/04/2018'},
  {id:6, user_name:'Terry.Zuck', company_name : 'NHS', email_address : 'Terry.Z @ NHS.com',role:'Super Admin', related_environment :17 , lastActivity : '27/04/2018'},
  {id:7, user_name:'William.Zuck', company_name : 'NHS', email_address : 'William.Z @ NHS.com',role:'Admin', related_environment :13 , lastActivity : '22/04/2018'},
  {id:8, user_name:'Henry.Zuck', company_name : 'NHS', email_address : 'Henry.Z @ NHS.com',role:'Admin', related_environment :12 , lastActivity : '17/03/2018'},
  {id:9, user_name:'Mary.Smith', company_name : 'NHS', email_address : 'Mary.S @ NHS.com',role:'Admin', related_environment :13 , lastActivity : '27/04/2018'},
  {id:10, user_name:'Felton.Harry', company_name : 'JP', email_address : 'Felton.H @ JP.com',role:'Super Admin', related_environment :37 , lastActivity : '20/04/2018'},
  {id:11, user_name:'Terry.Zuck', company_name : 'NHS', email_address : 'Terry.Z @ NHS.com',role:'Super Admin', related_environment :17 , lastActivity : '27/04/2018'},
  {id:12, user_name:'Terry.Zuck', company_name : 'NHS', email_address : 'Terry.Z @ NHS.com',role:'Super Admin', related_environment :17 , lastActivity : '27/04/2018'},
  {id:13, user_name:'Terry.Zuck', company_name : 'NHS', email_address : 'Terry.Z @ NHS.com',role:'Super Admin', related_environment :17 , lastActivity : '27/04/2018'},
  {id:14, user_name:'Terry.Zuck', company_name : 'NHS', email_address : 'Terry.Z @ NHS.com',role:'Super Admin', related_environment :17 , lastActivity : '27/04/2018'},
  {id:15, user_name:'Terry.Zuck', company_name : 'NHS', email_address : 'Terry.Z @ NHS.com',role:'Super Admin', related_environment :17 , lastActivity : '27/04/2018'},

];

export const userDataTest: User[] = [
  {id:1, user_name:'Bruce Lee', company_name : 'Microsoft', email_address : 'Bruce.L @ Microsoft.com',role:'Super Admin', related_environment :13 , lastActivity : '27/04/2018'},
 
];

export interface Environment {
  id:number;
  environment_name:string;
  number_of_vm:number;
  number_of_tier:number;
  total_cost:string;
  contract_started:string;
  contract_ended:string;}

export const environmentData: Environment[] = [
  {id:1, environment_name : 'Front_end_test', number_of_vm : 13, number_of_tier :3 ,total_cost:'£400', contract_started : '27/04/2014',contract_ended:'27/04/2018'},
  {id:2, environment_name : 'Front_end_v1', number_of_vm : 12, number_of_tier :3 ,total_cost:'£120', contract_started : '27/03/2015',contract_ended:'27/04/2018'},
  {id:3, environment_name : 'Front_end_v2', number_of_vm : 13, number_of_tier :2 ,total_cost:'£350', contract_started : '27/03/2016',contract_ended:'27/04/2018'},
  {id:4, environment_name : 'Front_end_v3', number_of_vm : 15, number_of_tier :2 ,total_cost:'£230', contract_started : '27/02/2017',contract_ended:'27/04/2018'},
  {id:5, environment_name : 'Back_end_v1', number_of_vm : 16, number_of_tier :2 ,total_cost:'£400', contract_started : '25/02/2014',contract_ended:'27/04/2018'},
  {id:6, environment_name : 'Back_end_test', number_of_vm : 16, number_of_tier :3 ,total_cost:'£440', contract_started : '27/01/2014',contract_ended:'27/04/2018'},
  {id:7, environment_name : 'Back_end_v2', number_of_vm : 17, number_of_tier :4 ,total_cost:'£420', contract_started : '22/02/2014',contract_ended:'27/04/2018'},
  {id:8, environment_name : 'Back_end_v3', number_of_vm : 12, number_of_tier :4 ,total_cost:'£410', contract_started : '26/04/2014',contract_ended:'27/04/2018'},
  {id:9, environment_name : 'Integration_test', number_of_vm : 1, number_of_tier :1 ,total_cost:'£450', contract_started : '27/04/2014',contract_ended:'27/04/2018'},
  {id:10, environment_name : 'Integration_v2', number_of_vm : 1, number_of_tier :1 ,total_cost:'£460', contract_started : '27/04/2014',contract_ended:'27/04/2018'},


];

export interface Contract {
  id:number;
  environment_name:string;
  signed_by:string;
  contract_started:string;
  contract_ended:string;}

export const contractData: Contract[] = [
  {id:1, environment_name : 'Front_end_test', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/04/2014',contract_ended:'27/04/2018'},
  {id:2, environment_name : 'Front_end_v1', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/03/2014',contract_ended:'27/04/2018'},
  {id:3, environment_name : 'Front_end_v2', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/03/2014',contract_ended:'27/04/2018'},
  {id:4, environment_name : 'Front_end_v3', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/02/2014',contract_ended:'27/04/2018'},
  {id:5, environment_name : 'Back_end_v1', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/01/2014',contract_ended:'27/04/2018'},
  {id:6, environment_name : 'Back_end_v2', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/01/2014',contract_ended:'27/04/2018'},
  {id:7, environment_name : 'Back_end_v2', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/02/2014',contract_ended:'27/04/2018'},
  {id:8, environment_name : 'Back_end_v3', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/03/2014',contract_ended:'27/04/2018'},
  {id:9, environment_name : 'Integration_test', signed_by : "Bruce Lee@microsoft.com", contract_started : '27/04/2014',contract_ended:'27/04/2018'},
  
];

export class Bill{
  id:number;
  environment_name:string;
  paid_by:string;
  payment_date:string;
}

export const billData: Bill[] = [
  {id:1, environment_name : 'Front_end_test', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/04/2014'},
  {id:2, environment_name : 'Front_end_v1', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/03/2015'},
  {id:3, environment_name : 'Front_end_v2', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/03/2016'},
  {id:4, environment_name : 'Front_end_v3', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/02/2017'},
  {id:5, environment_name : 'Back_end_v1', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/01/2016'},
  {id:6, environment_name : 'Back_end_v2', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/01/2017'},
  {id:7, environment_name : 'Back_end_v2', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/02/2017'},
  {id:8, environment_name : 'Back_end_v3', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/03/2016'},
  {id:9, environment_name : 'Integration_test', paid_by : "Bruce Lee@microsoft.com", payment_date : '27/04/2017'},
  
];

export class Request{
  id:number;
  request_by:string;
  request_at:string;
  status:string;
  read_status:boolean
}

export const requestData: Request[] = [
  {id:1231, request_by : "Bruce Lee@microsoft.com", request_at : '27/04/2014',status:"pending",read_status:false},
  {id:5322, request_by : "Bruce Lee@microsoft.com", request_at : '27/03/2015',status:"approved",read_status:true},
  {id:3131, request_by : "Bruce Lee@microsoft.com", request_at : '27/03/2016',status:"approved",read_status:true},
  {id:4433, request_by : "Bruce Lee@microsoft.com", request_at : '27/02/2017',status:"approved",read_status:true},
  {id:5234, request_by : "Bruce Lee@microsoft.com", request_at : '27/01/2016',status:"approved",read_status:true},
  {id:4321, request_by : "Bruce Lee@microsoft.com", request_at : '27/01/2017',status:"approved",read_status:true},
  {id:3451, request_by : "Bruce Lee@microsoft.com", request_at : '27/02/2017',status:"approved",read_status:true},
  {id:3153, request_by : "Bruce Lee@microsoft.com", request_at : '27/03/2016',status:"declined",read_status:true},
];

export const contractRequestData: Request[] = [
  {id:1111, request_by : "Bruce Lee@microsoft.com", request_at : '27/04/2014',status:"approved",read_status:true},
  {id:4444, request_by : "Bruce Lee@microsoft.com", request_at : '27/03/2015',status:"approved",read_status:true},
];

