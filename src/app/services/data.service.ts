import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
      .map(response => response.json())
  }

  create(resource){
    console.log("data service", resource);
    return this.http.post(this.url, resource)
      .subscribe(response => {
        console.log(response.json())
      })
  }

  update(resource){
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
      .map(response => response.json())
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
  }
}
