import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calculate } from '../pages/models/calculate.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class CalculatorService { 

  private readonly API_URL = 'https://us-east1-calculadora-vrsoftware.cloudfunctions.net/api/calculation'
  public result: string  
  
  constructor(private http: HttpClient) { }

  postCalculate(calculate: Calculate){
    return this.http.post(this.API_URL, calculate)
  }
}


