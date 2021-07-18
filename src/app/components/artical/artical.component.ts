import { Component, OnInit } from '@angular/core';
import { artical } from 'src/app/shared/models/Artical.model';
import { MainService } from 'src/app/shared/services/main.service';
import { ScrapingService } from 'src/app/shared/services/scraping.service';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css']
})
export class ArticalComponent implements OnInit {
Artical:artical[]=[]
  constructor(private ScrapingServic:ScrapingService) { }

  ngOnInit(): void {

  }
GetArtical(){
    this.ScrapingServic.GetSpecificArtical(sessionStorage.getItem('Artical')).subscribe(a=> {console.log(a)});
}
}
