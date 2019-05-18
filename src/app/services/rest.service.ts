import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {TrimmedUser, User} from '../models/user';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {text} from '@angular/core/src/render3';
import {Certificate} from '../models/certificate';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private endpoint;
  private httpOptions;
  private authToken ;
  constructor(private http: HttpClient) {
    this.authToken = sessionStorage.getItem('jwt');
    this.endpoint = 'http://192.168.6.155:5090/api/';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      }),
      observe: 'response',
      responseType: 'text'
    };
  }

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint + 'Auth/Register', user);
  }

  public login(user: TrimmedUser): Observable<HttpEvent<TrimmedUser>> {
    return this.http.post<TrimmedUser>(this.endpoint + 'Auth/Login', user, this.httpOptions);
  }

  public addCertificate(certificate: Certificate): Observable<HttpEvent<Certificate>> {
    return this.http.post<Certificate>(this.endpoint + 'Certificates/AddCertificate', certificate, this.httpOptions);
  }
}
