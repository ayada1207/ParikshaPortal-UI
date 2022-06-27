export class UserDetails {

     public firstName: string;
     public lastName: string;
     public email: string;
     public userName: string;
     public password: string;
     public phone: string;
     
     constructor(firstName: string, lastName: string, 
        email: string, userName: string, password: string, phone: string){
        this.firstName= firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.phone = phone;
     }
     
}
