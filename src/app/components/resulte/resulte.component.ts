import { Component, Input, OnInit } from '@angular/core';
import { material } from 'src/app/shared/models/material.model';
import { Strings } from '../scraping/scraping.component';

@Component({
  selector: 'app-resulte',
  templateUrl: './resulte.component.html',
  styleUrls: ['./resulte.component.css']
})
export class ResulteComponent implements OnInit {
@Input() listresultes:Strings[]=[]
  constructor() { }
listMaterials:material[]=[]
  ngOnInit(): void {
  }
  
  Selected(material:material,event:any){

  }
  

}
