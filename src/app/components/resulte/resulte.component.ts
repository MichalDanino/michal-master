import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterparmeter } from 'src/app/shared/models/FilterParmeter.model';
import { material } from 'src/app/shared/models/material.model';
import { MaterialService } from 'src/app/shared/services/material.service';
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
 
  constructor(private ScrapinService:ScrapingService, private router:Router, private MaterialSevice:MaterialService) {
   
   }
listMaterials:material[]=[]
ListScrapedMaterials:any[]=[]
filter:filterparmeter;
listfilter:filterparmeter[]=[]

  ngOnInit(): void {
  }
  listMaterial:material[]=[]
  Selected(event:any,material:material){
    debugger
    this.filter= new filterparmeter()
    if(event.target.checked)
    {
      if(!isNaN(Number(this.Height))){
        this.filter.Height=  Number(this.Height);
      } 
      if(!isNaN(Number(this.Length))){
        this.filter.Length=  Number(this.Length);
      } 
      if(!isNaN(Number(this.width))){
        this.filter.width=  Number(this.width);
      }
      debugger
    this.filter.CodRenovation=material.CodeRenovation
    this.listfilter.push(this.filter)
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
    debugger
this.stop=true;
    let listSort=this.listresultes.sort((a,b)=> a.Namemain.localeCompare(b.Namemain))
    this.ScrapinService.SendListStringsTOanalyzeTheText(listSort).subscribe(a=>{console.log(a)})
    debugger
    for (let index = 0; index < listSort.length; index++)
     {
       debugger
          let subName =  listSort[index].Sub_name
          console.log("שם המוצר:")
          console.log(subName)
          this.ScrapinService.ScrapingMatrial(subName+" "+listSort[index].description+" "+"שיפוץ").subscribe(a=> 
            {

              for (let i = 0; i < a.length; i++) 
                   {
                     console.log(listSort[index].Namemain)
                     try{
                     a[i].CodeRenovation=listSort[index].Sub_name
                    }
                    catch{
                      a[i].CodeRenovation=listSort[index].Sub_name
                    }
                    a[i].NameMatrial=listSort[index].material;
                   }
              this.ListScrapedMaterials.push(Array.from(Object.values(a)));
              console.log("jhvc")
               console.log(a);
              
               if(index==(this.listresultes.length-1))
               { console.log(  this.ListScrapedMaterials)
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
    console.log("okRetulte")
    debugger
    if(sessionStorage.getItem('WantWorker')=='yesWorker')  
      {
        this.router.navigate(['/app-worker'])
      }
    else
      {
          this.MaterialSevice.getproductCalculations(this.listfilter).subscribe(a=> {console.log(a)})     }
          this.MaterialSevice.getproductCalculations2(this.listMaterial).subscribe(a=> {console.log(a)})
  }

  

}
