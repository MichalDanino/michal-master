import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialty } from '../models/Specialty.model';
import { Worker1 } from '../models/Worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  Url ="https://localhost:44339/api/worker"
  constructor(private https: HttpClient) { }
  SignUpWorker(worker:Worker1):Observable<number>{
    console.log(worker);
    return this.https.post<number>(`${this.Url}/singupworker`, worker)
  }
  AddSpacialty(sp: Specialty):Observable<number>
  {
    return this.https.post<number>(`${this.Url}/SingupLS`,sp)
  }
  GetEmbedWorker(Area:string):Observable<Worker1[]>
  {
    return this.https.get<Worker1[]>(`${this.Url}/singinuser/${Area}`)
  }
}
