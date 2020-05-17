import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Settings } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  url = Settings.wpurl;

  constructor(private http: HttpClient) { }


  
  getJob(id): Observable<any> {
    return this.http.get<Object[]>(this.url + '/job/'+id).pipe(
      map(jb => {
        console.log(jb);
        return jb;
      }),
    );
  }

  

  getJobs(): Observable<any> {

    return this.http.get<Object[]>(this.url + '/job').pipe(
      map(jbs => {
        console.log(jbs);

        return jbs;
      }),
    );
  }
}

