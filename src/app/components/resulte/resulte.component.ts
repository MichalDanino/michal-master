import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterparmeter } from 'src/app/shared/models/FilterParmeter.model';
import { material } from 'src/app/shared/models/material.model';
import { ScrapingService } from 'src/app/shared/services/scraping.service';
import { ScrapingComponent, Strings } from '../scraping/scraping.component';

@Component({
  selector: 'app-resulte',
  templateUrl: './resulte.component.html',
  styleUrls: ['./resulte.component.css']
})
export class ResulteComponent implements OnInit {
@Input() listresultes:Strings[]=[]
stop: boolean = false;
Show:boolean=false;
 Height:string;
 width :string
 Length:string
 
  constructor(private ScrapinService:ScrapingService, private router:Router) {
   
   }
listMaterials:material[]=[]
ListScrapedMaterials:any[]=[]
filter:filterparmeter;

  ngOnInit(): void {
  }
  listMaterial:material[]=[]
  Selected(material:material,event:any){
    if(event.target.checked)
    {
    this.filter.Height=+this.Height
    this.filter.Length= +this.Length
    this.filter.width=+ this.width
    this.filter.CodRenovation=material.CodeRenovation
    let m=material
    this.listMaterial.push(m)
  }
  else{
    let y= this.listMaterial.findIndex(a=> a.BMSrcImg=material.BMSrcImg)
    this.listMaterial.splice(y,1)
  }

  }
  SendToScrap()
  {
    
this.stop=true;
    let listSort=this.listresultes.sort((a,b)=> a.Namemain.localeCompare(b.Namemain))
    for (let index = 0; index < this.listresultes.length; index++)
     {
          let subName = listSort[index].Sub_name; 
          this.ScrapinService.ScrapingMatrial(subName+" "+listSort[index].description+" "+"שיפוץ").subscribe(a=> 
            {
              for (let i = 0; i < a.length; i++) 
                   {
                     debugger
                     try{
                     a[i].CodeRenovation=listSort[index].Namemain
                    }
                    catch{}
                   }
              this.ListScrapedMaterials.push(Array.from(Object.values(a)));
              console.log("jhvc")
               console.log(a);
               if(index==(this.listresultes.length-1))
               {
                 this.stop = false;
               }
             })
             

    }
    
    console.log(this.ListScrapedMaterials);
    
    this.Show=true;
    sessionStorage.setItem('ChildeWorks', 'true');
  }

  GO()
  {
  if(sessionStorage.getItem('WantWorker')=='yesWorker')  {
    this.router.navigate(['/app-worker'])
  }
  }

  

}
