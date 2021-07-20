import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Worker1 } from 'src/app/shared/models/Worker.model';
import { WorkerService } from 'src/app/shared/services/worker.service';
@Component({
  selector: 'c',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private WorkerService:WorkerService,private router:Router) { }
ListWorkers:Worker1[]=[]
costWorker:number=0
// [{IdWorker:22223333,AVGStare:233,Email_Worker:"aaa@ffg.com",Name_Worker:"moshe"},
// {IdWorker:2345,AVGStare:25,Email_Worker:"zdfkvbl@ffg.com",Name_Worker:"yosef"},
// {IdWorker:234564,AVGStare:675,Email_Worker:"xzvxcx@ffg.com",Name_Worker:"chya"}]
 listfeed:string[]=["dfgfdfghnbvcf","ffghfdghnhgbfvdcfh","fgfdgfhgjnfbfvdffg","sdgfgfhgnbfvdcfgfg"] 
ngOnInit(): void {
  let i = sessionStorage.getItem('IDUser')
  while(sessionStorage.getItem('CostMaterial')==null||sessionStorage.getItem('CostMaterial')=="0"){}
  this.WorkerService.GetEmbedWorker(i).subscribe(a=>
    {
        this.ListWorkers=a;
    })
  }
  SaveWorker(event:any, worker:Worker1)
  {
    if(event.target.checked)
    {
      this.ListWorkers.push(worker)
    }
    else{
      let y= this.ListWorkers.findIndex(a=> a.IdWorker==worker.IdWorker)
      this.ListWorkers.splice(y,1)
       
    }

  }
  CostWorkers(){
    this.ListWorkers.forEach(a=>
      {
        this.costWorker+= a.AVGStare;
      })
      sessionStorage.setItem("CostWorker",this.costWorker.toString())
      this.router.navigate(['/conclusion'])

  }
}
