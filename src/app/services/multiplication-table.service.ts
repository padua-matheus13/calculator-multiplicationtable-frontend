import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Multiplier } from '../pages/models/multiplier.model'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class MultiplicationTableService { 

  private readonly API_URL = 'https://us-east1-calculadora-vrsoftware.cloudfunctions.net/api/multiplicationTable'
  public result = []
  public multiplier = new Multiplier()

  constructor(private http: HttpClient) { }

  postCalculate(value: number){
    this.multiplier.value = value
    return this.http.post(this.API_URL, this.multiplier)
  }
}


