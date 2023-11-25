import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(private vada:HttpClient) { }
  getRandomQuote(){
    return this.vada.get('http://localhost:8080/rs',{responseType: 'text'});
  }
}
