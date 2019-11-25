import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service'
import { Calculate } from '../../models/calculate.model'

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
  private calculateObj = new Calculate()

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.clearDisplay()
  }

  createObj(n1: string, n2: string, op: string) {
    this.calculateObj.value1 = parseFloat(n1)
    this.calculateObj.value2 = parseFloat(n2)
    this.calculateObj.operation = op 
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
    
      this.createObj(this.number1, this.number2, this.operation)
      // this.result = this.calculatorService.calculate(this.calculateObj)
      this.calculatorService.postCalculate(this.calculateObj).subscribe( (res: any) => {
        this.number1 = res.result
      })
      this.operation = op
      this.number1 = this.result
      this.number2 = null
      this.result = null
    }
  }

  calculate(): void {
    if(this.number2 === null)
      return
    
    this.createObj(this.number1, this.number2, this.operation)
    this.calculatorService.postCalculate(this.calculateObj).subscribe( (res: any) => {
      this.result = res.result
    })
    
  }

  get display(): string { 
    if(this.result !== null)
      return this.result
    if(this.number2 !== null)
      return this.number2

    return this.number1
  }
}
