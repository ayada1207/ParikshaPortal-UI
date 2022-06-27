import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { LoginComponent } from "./pages/login/login.component";

@Injectable()
export class authInterceptor implements HttpInterceptor{

    public login:LoginComponent | undefined;
    authBody:any={};
    constructor(private loginService: LoginService){}

    getBody(){
    return this.login?.loginData;
    }

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> 
        {
          let authReq = req;
        
        // During 2nd call req body coming as empty   
         
       const token = this.loginService.getToken();
            console.log("interceptor",token)
       if( token ){
       
            authReq = authReq.clone({ headers: authReq.headers.set('Authorization', `Bearer ${token}`) });
            //body: {userName:user.}
        
       }
       return next.handle(authReq);

    }   
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }
  ];
