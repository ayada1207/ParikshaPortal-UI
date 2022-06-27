import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user = {
    'firstName':'',
    'lastName' :'',
    'email':'',
    'userName':'',
    'password':'',
    'phone':''
  }
  errors:any ={}


  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { 
    
  }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log("SUbmit",this.user);
    this.validateUser(this.user);
    console.log(this.errors)
    if(Object.keys(this.errors).length > 0){
      return;
    }
   this.userService.addUser(this.user).subscribe((response)=>{
    swal({
      title: `Congratulations ${this.user.firstName}`,
      text:`Registration Successfull for ${this.user.userName}`,
      icon: "success",
    });
    this.router.navigate(['/home'])
    console.log(response);
   },
   (errors)=>{
    console.log(errors);
    swal({
      title: `Some error Occured`,
      icon: "error",
    });
   })
  }

  validateUser(data:any){
    let errorList:any = [];
    if(data.firstName ==='' || data.firstName === undefined){
      errorList['firstName']=['first Name is required'];
    }
      this.errors=errorList;
  }

  onValueChanged(){

  }
}
