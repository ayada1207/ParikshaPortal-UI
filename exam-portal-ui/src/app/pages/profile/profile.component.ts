import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData:any;
  data={
    userName:'arpit112'
  }
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.login.getUserDetails(this.data).subscribe((user:any)=>{
      this.userData = user;
      console.log("this.user",this.userData)
    });
    
    console.log("userData",this.userData)
    
  }

}
