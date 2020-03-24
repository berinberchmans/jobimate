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


  
  getJobs(): Observable<any> {

    // let hparams = new HttpParams({ fromObject: params ? <any>params : { x: 'y' } });
    // let hparams2 =  new HttpParams({  fromObject: "response" });

    // let newparams = { params: hparams };
    return this.http.get<Object[]>(this.url + '/job').pipe(
      map(jbs => {
        console.log(jbs);
        
        // let retVal = new Array();
        // for (let o of orders)
        //   retVal.push(new WooOrder(o));
        return jbs;
      }),
      // catchError(this.handleError)
    );
  }
}

