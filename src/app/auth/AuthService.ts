import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public constructor(
    private http: HttpClient,
  ) { }

  public login(data : any): Observable<any>{
    // submitForm form data on server and get a peax redirect object with the urls to redirect to
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/text'
    });

    data = JSON.stringify(data);

    // set form data params
    return  this.http.post(
      'http://'+environment.restUrl + '/auth/login',
      data,
      { headers}
    )
  }

  public register(data : any): Observable<void>{
    // submitForm form data on server and get a peax redirect object with the urls to redirect to
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    data = JSON.stringify(data);

    // set form data params
    return  this.http.post<void>(
      'http://'+environment.restUrl + '/auth/register',
      data,
      { headers}
    )
  }
}

