export class SalesPerson {
    constructor(
        public firstName:string,
        public lastName:string,
        public email:string,
        public salesVolume:number,
        private quota:boolean,
        public currency:string
    )
    {
        
    }
    public HasQuota(quotaQuantidy:number):boolean{
        if(this.salesVolume>=quotaQuantidy) this.quota=true;
        else this.quota=false;
        return this.quota
    }
}
