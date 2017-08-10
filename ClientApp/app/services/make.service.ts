import { Injectable, Inject } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MakeService {

  constructor(@Inject('ORIGIN_URL') private originUrl: string, private http: Http) { }

  getMakes() {
    return this.http.get(`${this.originUrl}/api/makes`)
      .map(res => res.json());
  }

}