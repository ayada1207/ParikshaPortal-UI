import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData ={
    userName:'',
    password:''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
  console.log("click")
  let userNameValid = false;
  if(this.loginData.userName===''){
    userNameValid = true;
  }
  if(userNameValid){
    return;
  }
  this.loginService.generateToken(this.loginData).subscribe(
    (data:any)=>{
      console.log("success",data)
      this.loginService.loginUser(data.token);
     
    },
    (error)=>console.log(error)
  )
  this.loginService.getCurrentUser().subscribe(
    (user:any)=>{
      this.loginService.setUser(user);
      console.log("userr",user)

      /// Redirect to Admin or User acccordinly 
    }
  )
  }
}
