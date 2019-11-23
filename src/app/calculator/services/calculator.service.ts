import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService{

  static readonly SUM: string = '+'
  static readonly SUB: string = '-'
  static readonly MULT: string = '*'
  static readonly DIV: string = '/'

  private url: 'https://us-east1-calculadora-vrsoftware.cloudfunctions.net/api/calculation'
  
  constructor(private http: HttpClient) { 
  }

  calculate(value1: number, value2: number, operation: string): number{
   
  }

 
}
