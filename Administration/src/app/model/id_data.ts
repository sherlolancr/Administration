export class Id_data{

    organization_id:number;
    environment_id:number;
    user_id:number;
    requests_id:number;
    bill_id:number;
    contract_id:number; 
    request_type:string;
    constructor(){}
    getOrganizationId(){
       return this.organization_id;
    }
    getEnvironmentId(){
    return this.environment_id;
    }
    getUserId(){
        return this.user_id;
    
    }
    getRequestId(){
        return this.requests_id;
    }
    getBillId(){
        return this.bill_id;
    }
    getContractId(){
        return this.contract_id;
    }


    setOrganizationId(id:number){
        this.organization_id = id;
    }
    setEnvironmentId(id:number){
        this.environment_id = id;
    }
    setUserId(id:number){
        this.user_id = id;
    }
    setRequestId(id:number){
        this.requests_id = id;
    }
    setBillId(id:number){
        this.bill_id = id;
    }
    setContractId(id:number){
        this.contract_id = id;
    }
    setReqeustType(type:string){
        this.request_type = type;
    }
}