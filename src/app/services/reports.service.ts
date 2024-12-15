import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  user!: User;

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  public findById(): Observable<Blob> {
    this.userService.getUser().subscribe((user) => {
      this.user = user
    })

  
    return this.httpClient.get('http://localhost:3416/api/data/'+this.user._id, { responseType: 'blob'});
  }
}
