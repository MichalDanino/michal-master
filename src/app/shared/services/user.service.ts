import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Url ="https://localhost:44339/api/user"
  constructor(private https: HttpClient) { }

  

  SignIn(id:number):Observable<number>
  {
   return this.https.get<number>(`${this.Url}/singinuser/${id}`)
  }
  signUpUser(newUser: User):Observable<number>{
    console.log(newUser)
    console.log("service")
    
     return this.https.post<number>(`${this.Url}/singupuser`, newUser)
   }


  
}
