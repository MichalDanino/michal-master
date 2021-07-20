import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {
CostMatrials:string
CostWorker:string
GeneralCost:number
constructor() { }

  ngOnInit(): void {
    this.ShowRetult()
  }
  ShowRetult(): void
  {
   this.CostMatrials= sessionStorage.getItem('CostMaterial')
   if(sessionStorage.getItem('CostWorker')==null)
   {
     this.CostWorker="----"
   }
   this.CostWorker=sessionStorage.getItem('CostWorker')
   this.GeneralCost=!isNaN(Number(this.CostWorker))?Number(this.CostWorker)+Number(this.CostMatrials):Number(this.CostMatrials)
  }

}
