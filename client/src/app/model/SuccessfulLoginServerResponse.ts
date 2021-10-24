export class SuccessfulLoginServerResponse {
    public constructor(
        public token?:string,
        public admin?:number,
        public userInfo?:user
        
    ) {
        
    }
}

export class user {
    public constructor(
        public firstName?:string,
        public lastName?:string,
        public city?:string,
        public street?:string,
    ) {
        
    }
}