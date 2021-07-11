import { Component, Input, OnInit } from '@angular/core';
import { Strings } from '../scraping/scraping.component';

@Component({
  selector: 'app-resulte',
  templateUrl: './resulte.component.html',
  styleUrls: ['./resulte.component.css']
})
export class ResulteComponent implements OnInit {
@Input() listresultes:Strings[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  

}
