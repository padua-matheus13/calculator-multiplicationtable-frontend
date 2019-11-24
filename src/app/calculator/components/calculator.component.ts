import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { CalculatorService } from '../services/calculator.service'
import { Calculate } from '../models/calculate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1: string
  private number2: string
  private result: string
  private operation: string

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.clearDisplay()
  }

  clearDisplay(): void {
    this.number1 = '0'
    this.number2 = null
    this.result = null
    this.operation = null
  }

  addNumber(number: string): void {
    if(this.operation === null)
      this.number1 = this.concatenate(this.number1, number)
    else
      this.number2 = this.concatenate(this.number2, number)
  }

  concatenate(numCurrent: string, numConcat: string) : string {
    //caso contenha apenas 0 ou null, reiniciar valor
    if(numCurrent === '0' || !numCurrent)
      numCurrent = ''
    
    //caso primeiro digito for '.', adiciona 0
    if(numConcat === '.' && numCurrent === '')
      return '0.'

    //caso '.' ja exista, apenas retorna
    if(numConcat === '.' && numCurrent.indexOf('.') > -1)
      return numCurrent

    return numCurrent + numConcat
  }

  defineOperation(op: string) {
    //operacao === null
    if(this.operation === null)
      return this.operation = op
    
    //operacao ja definida apos segundo numero
    if(this.number2 !== null) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation
      )
      this.operation = op
      this.number1 = this.result.toString()
      this.number2 = null
      this.result = null
    }
  }

  calculate(): void {
    if(this.number2 === null)
      return
    
    this.result = this.calculatorService.calculate(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation
    )
  }

  get display(): string {
    if(this.result !== null)
      return this.result
    if(this.number2 !== null)
      return this.number2

    return this.number1
    }
}
