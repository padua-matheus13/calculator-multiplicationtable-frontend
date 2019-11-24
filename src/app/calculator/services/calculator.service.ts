import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Calculate } from '../models/calculate.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService { 

  private readonly API_URL = 'https://us-east1-calculadora-vrsoftware.cloudfunctions.net/api/calculation'
  
  constructor(private http: HttpClient) { }
   
  calculate(value1: number, value2: number, operation: string): string {
    let calculate = new Calculate
    let result: string

    calculate.value1 = value1
    calculate.value2 = value2
    calculate.operation = operation

    this.http.post(this.API_URL, calculate, {headers:
      new HttpHeaders({'content-type':'application/json'}), responseType:'text'})
      .subscribe((response) => {
        result = JSON.stringify(response)
        console.log(response)
      })

      return result
  }
}


