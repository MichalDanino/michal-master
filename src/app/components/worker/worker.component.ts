import { Component, OnInit } from '@angular/core';
import { Worker1 } from 'src/app/shared/models/Worker.model';
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor() { }
ListWorkers:Worker1[]=[]
  ngOnInit(): void {
  }

}
