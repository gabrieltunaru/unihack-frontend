import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {TrimmedUser, User} from '../models/user';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {text} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private endpoint;
  private httpOptions;

  constructor(private http: HttpClient) {
    this.endpoint = 'http://192.168.6.155:5090/api/Auth/';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'text'
    };
  }

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint + 'Register', user);
  }

  public login(user: TrimmedUser): Observable<HttpEvent<TrimmedUser>> {
    return this.http.post<TrimmedUser>(this.endpoint + 'Login', user, this.httpOptions);
  }
}
