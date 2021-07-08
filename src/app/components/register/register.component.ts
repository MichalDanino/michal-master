import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { MainService } from 'src/app/shared/services/main.service';
import { UserService } from 'src/app/shared/services/user.service';
import { WorkerService } from 'src/app/shared/services/worker.service';
import { CheckPassword } from 'src/app/shared/validators/valid';
import { Specialty } from 'src/app/shared/models/Specialty.model';
import { Worker1 } from 'src/app/shared/models/Worker.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  userForm: any;
  currenttype1: string;
  currentStatus1: string;
  currenttype2: string;
  currentStatus2: string;
  eye: string = "fa fa-fw fa-eye field-icon toggle-password";
  slash: string = "fa fa-fw fa-eye-slash field-icon toggle-password";

  constructor(private workerService:WorkerService , private mainService:MainService,private userService: UserService, private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  

    this.currenttype1 = "fa fa-fw fa-eye field-icon toggle-password";
    this.currentStatus1 = "password";
    this.currenttype2 = "fa fa-fw fa-eye field-icon toggle-password";
    this.currentStatus2 = "password";
  }

  Show:boolean=false;
  worker:Worker1= new Worker1()
  specialty :Specialty= new Specialty()
  NamesArea:string[]=[]

  SignUpWorker()
{
  console.log(this.worker)
    this.workerService.SignUpWorker(this.worker).subscribe(a=> (console.log(a)));
    this.Show = true;
}
AddSpecialty()
{
  this.workerService.AddSpacialty(this.specialty).subscribe(a=> (console.log(a)))
}
GetNameArea(){
this.mainService.GetNameArea().subscribe(a=>{(this.NamesArea)=a});
}
Continue(){
  
    this.AddSpecialty();
    this.specialty=new Specialty();
 
}
GoHome()
{
  this.AddSpecialty();
  this.router.navigate(['/app-root']);
}

  toggle1() {
    if (this.currentStatus1 == "text") {
      this.currenttype1 = this.eye;
      this.currentStatus1 = "password"
    }
    else {
      this.currenttype1 = this.slash;
      this.currentStatus1 = "text"
    }
  }


  toggle2() {
    if (this.currentStatus2 == "text") {
      this.currenttype2 = this.eye;
      this.currentStatus2 = "password"
    }
    else {
      this.currenttype2 = this.slash;
      this.currentStatus2 = "text"
    }
  }


}
