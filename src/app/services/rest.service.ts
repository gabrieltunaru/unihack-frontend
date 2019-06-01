import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Profile, TrimmedUser, User} from '../models/user';
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
  private httpOptionsLogIn;
  private httpOptionsBizdoc;
  private authToken;


  // public resetHttpOption(){
  //   this.setHttpOptions() =
  // }
  public setHttpOptions() {

    this.authToken = localStorage.getItem('jwt');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      }),
      observe: 'response',
      responseType: 'text'
    };
    this.httpOptionsBizdoc = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.authToken
      }),
      observe: 'response',
      responseType: 'text'
    };
    this.httpOptionsLogIn = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'text'
    };
  }

  constructor(private http: HttpClient) {
    this.endpoint = 'https://adeverinte.bizdoc.ro/api/';
    this.setHttpOptions();
  }

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint + 'Auth/Register', user);
  }

  public login(user: TrimmedUser): Observable<HttpEvent<TrimmedUser>> {
    return this.http.post<TrimmedUser>(this.endpoint + 'Auth/LogIn', user, this.httpOptionsLogIn);
  }

  public addCertificate(certificate: Certificate): Observable<HttpEvent<Certificate>> {
    return this.http.post<Certificate>(this.endpoint + 'Certificates/AddCertificate', certificate, this.httpOptionsBizdoc);
  }

  public getAllCertificates(): Observable<HttpEvent<Certificate>> {
    return this.http.get<Certificate>(this.endpoint + 'Certificates/GetCertificates', this.httpOptionsBizdoc);
  }

  public getCertificatesByStatus(status: string): Observable<HttpEvent<Certificate>> {
    return this.http.get<Certificate>(this.endpoint + 'Certificates/GetCertificates?status=' + status, this.httpOptionsBizdoc);
  }

  public modifyCertificatesStatus(wut: any) {
    return this.http.patch(
      this.endpoint + 'Certificates/PatchStatus', wut, this.httpOptionsBizdoc
    );
  }

  public modifyProfile(profile: Profile): Observable<HttpEvent<Profile>> {
    return this.http.post<Profile>(this.endpoint + 'UserProfile/AddUserProfile', profile, this.httpOptionsBizdoc);
  }


  public getProfile(): Observable<HttpEvent<Profile>> {
    return this.http.get<Profile>(this.endpoint + 'UserProfile/GetProfile' + status, this.httpOptionsBizdoc);
  }
}
