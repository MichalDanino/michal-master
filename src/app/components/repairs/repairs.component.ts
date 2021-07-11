import { Component, OnInit, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import { User} from '../../shared/models/user.model'
import { material } from 'src/app/shared/models/material.model';
import { MaterialService } from 'src/app/shared/services/material.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ScrapingService } from 'src/app/shared/services/scraping.service';


@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.css']
})
export class RepairsComponent implements OnInit {

  constructor(private matrialService:MaterialService ,private router:Router, 
    private ScrapingService:ScrapingService) {}
  listMaterials:material[]=[];
    ngOnInit(): void {
      this.Scraping();
    
  //this.getUser();
    }
       y:string[]=[];
Scraping(){
this.y=["דבק ריצוף","fsdfghj"]
 
  //  ..push.this.ScrapingService.ScrapingMAtrial(this.y[0]).subscribe(a=>{console.log(a)});
   
    
 
}
    GetResulteScraping(){
      this.ScrapingService.GetMaterials().subscribe(mateiral=> {console.log(material)});
    }
   
  
   

}
