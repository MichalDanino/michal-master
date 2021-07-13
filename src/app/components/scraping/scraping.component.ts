import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { material } from 'src/app/shared/models/material.model';
import { MaterialService } from 'src/app/shared/services/material.service';
import { ScrapingService } from 'src/app/shared/services/scraping.service';
export class m{
  Namemain: string;
  Sub_name:string;
  material:string[];
   
}
export class Strings{
  Namemain: string;
  Sub_name:string;
  material:string;
   description:string;
}
@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent implements OnInit {
  displayedColumns = ['ticketNum', "assetID", "severity", "riskIndex", "riskValue", "ticketOpened", "lastModifiedDate", "eventType"];
  index=1;
  list: m[]=[];
  temp1:string[];
  temp2:string;   
  material:m;
  listmaterial = new Array<material>();
  listOfNameMat:string[]=[];
   lissSubREnovation:string[]=["חלונות","אריחים לקירות","שרותים"," מקלחון","כיור ","ריצוף","צביעת קירות"]
   listToScrap:Strings[]=[]
   visible:boolean;
  constructor(private matrialService:MaterialService ,private router:Router,private ScrapingService:ScrapingService) {}
  

  ngOnInit(): void {
    this.visible=false;
    this.getMatrialByReno()
  }
 
getMatrialByReno(){
  let categories = sessionStorage.getItem('CategorySelected');
  return  this.matrialService.getMatrialByReno(categories).subscribe(m=>{
    (this.AddMaterialToList(m));
  }) 
}


Scraping(){
  
}
AddMaterialToList(reno:any)
{
  
  let categories = sessionStorage.getItem('CategorySelected');
  let listTemp=categories.split(",");
  for(this.index=1; this.index<listTemp.length;this.index++){ 
      let MainTitle=listTemp[this.index]
      let jjj=reno[MainTitle];
      this.lissSubREnovation.forEach(element => {

         this.material = new m();
       try{
       this.temp1= jjj[element];
       if(this.temp1!=null){
      this.material.Namemain=MainTitle;
       this.temp2 =element;
       this.material.material=this.temp1;
       this.material.Sub_name=this.temp2;
       this.list.push(this.material)
      console.log(this.list);

             }
            }
       catch{
          
           }
        });
}}
 nnnnn:any
 s:Strings=new Strings()
save(event,father,grendpa,name)
{
  this.s.Namemain=grendpa
  this.s.Sub_name=father
  this.s.description=event.target.value
  this.s.material=name
  this.listToScrap.push(this.s)
}
sreach()
{
  this.ScrapingService.ScrapingMAtrial(this.listToScrap).subscribe(a=>{
    if(a==0){
    this.sreach();}
    else if(a==1)
    {
      this.visible=true
    }

  })
  
}
}
