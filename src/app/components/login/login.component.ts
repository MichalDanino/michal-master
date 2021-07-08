import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  loginForm: any
  currenttype: string;
  currentStatus: string;
  loginAlert:boolean;
  // field-icon
  eye: string = "fa fa-fw fa-eye field-icon toggle-password";
  slash: string = "fa fa-fw fa-eye-slash field-icon toggle-password";
  // eyes: boolean;
  // icon: string;

  constructor(private userService: UserService, private formBuilder: FormBuilder,
     private loginService: LoginService, private router: Router) { }
 IDUser : number;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'ID': ['', Validators.required],
      'password': ['', [Validators.required]]
    });
    this.currenttype = "fa fa-fw fa-eye field-icon toggle-password";
    this.currentStatus = "password";
  }
//להשיג משתמש קיים

    
  

getUserExist(){
  this.IDUser = this.loginForm.controls.ID.value
  console.log(this.IDUser);
    this.userService.SignIn(this.IDUser).subscribe(
      
      res =>{this.loginUser(res)}) ;
   
  }

  loginUser(user) {
    if(user==0)
      {
    this.router.navigate(['/register'])
      }
    else{
      sessionStorage.setItem('IDUser',user.toString());
      this.router.navigate(['/home'])
    }

  }

  toggle() {
    if (this.currentStatus == "text") {
      this.currenttype = this.eye;
      this.currentStatus = "password"
    }
    else {
      this.currenttype = this.slash;
      this.currentStatus = "text"
    }

  }



}
