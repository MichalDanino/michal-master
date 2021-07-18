import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/shared/services/main.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Area } from 'src/app/shared/models/Area.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private UserService:UserService, private MainService:MainService) { }
  @ViewChild ('myArea',{static:false}) area:ElementRef;

  NewUser:User= new User();
NamesArea:Area[]=[];

  ngOnInit(): void {
    this.GetNameArea()

  }
  GetNameArea()
  {
    this.MainService.GetNameArea().subscribe(a=>{(this.NamesArea)=a
    console.log(a)});
  }
  SignUpUser()
  {
    let temp=this.area.nativeElement.value;
    this.NewUser.areaUser=this.NamesArea.find(a=> a.AreaNAme==temp).CodeArea;
    this.UserService.signUpUser(this.NewUser).subscribe(a=>{console.log(a)});
  }
}
