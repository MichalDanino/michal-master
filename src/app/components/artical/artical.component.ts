import { Component, OnInit } from '@angular/core';
import { artical } from 'src/app/shared/models/Artical.model';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css']
})
export class ArticalComponent implements OnInit {
Artical:artical[]=[]
  constructor(private MainService:MainService) { }

  ngOnInit(): void {

  }
GetArtical(){
    this.MainService.GetArtical(sessionStorage.getItem('Artical')).subscribe(a=> {console.log(a)});
}
}
