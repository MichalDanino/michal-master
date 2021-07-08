import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  addVote(vote: number): Observable<string> {
    let userId = localStorage.getItem('currentUser');
    return this.http.post<string>(environment.url + 'votes/addVote' , vote);
  }
}
