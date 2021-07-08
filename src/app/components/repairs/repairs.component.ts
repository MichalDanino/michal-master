import { Component, OnInit, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import { User} from '../../shared/models/user.model'
import { material } from 'src/app/shared/models/material.model';
import { MaterialService } from 'src/app/shared/services/material.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

export interface listOfNameMat {
  name: string;
 mateials:string[];
}
export class m{
  Namemain: string;
  Sub_name:string;
  material:string[];
   
}
@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.css']
})
export class RepairsComponent implements OnInit {
  displayedColumns = ['ticketNum', "assetID", "severity", "riskIndex", "riskValue", "ticketOpened", "lastModifiedDate", "eventType"];
  index=1;
  list: m[]=[];
  temp1:string[];
  temp2:string;   
  material:m;
  listmaterial = new Array<material>();
  listOfNameMat:string[]=[];
   lissSubREnovation:string[]=["חלונות","אריחים לקירות","שרותים"," מקלחון","כיור ","ריצוף","צביעת קירות"]
  constructor(private matrialService:MaterialService ,private router:Router) {}
  
    ngOnInit(): void {
      this.getMatrialByReno();
      
    
  //this.getUser();
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
        
  
               }
              }
         catch{
            
             }
          });
  }}
   

}
