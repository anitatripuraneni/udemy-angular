import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ServerService {

  constructor(private http: Http) { }
  storeServers(servers: any[]) {
    const headers = new Headers({ 'content-type': 'application/json' });
    //return this.http.post('https://ng-http-7a1d0.firebaseio.com/data.json',servers,{headers:headers});
    return this.http.put('https://ng-http-7a1d0.firebaseio.com/data.json', servers, { headers: headers });
  }

  getServers() {
    return this.http.get('https://ng-http-7a1d0.firebaseio.com/data.json')
      .map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'Fetched_' + server.name;
        }
        return data;
      }
      )
      .catch(
      (error: Response) => {
        return Observable.throw('Some thing is wrong in URI');
      }
      );
  }

  getAppName() {
    return this.http.get('https://ng-http-7a1d0.firebaseio.com/appName.json').
    map(
      (response: Response)=>{
        return response.json;
      }
    );
  }
}
