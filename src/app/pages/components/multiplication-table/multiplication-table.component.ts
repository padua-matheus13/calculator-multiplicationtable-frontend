import { Component, OnInit, Input } from '@angular/core';
import { MultiplicationTableService } from 'src/app/services/multiplication-table.service';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.css']
})
export class MultiplicationTableComponent implements OnInit {
  private value: string
  private result: any

  constructor(private multiplicationTable: MultiplicationTableService) { }

  ngOnInit() {
    this.clearTable()
  }

  clearTable(): void {
    this.value = null
    this.result = []
  }

  calculate(): void {
    this.clearTable()

    this.value = (<HTMLInputElement>document.getElementById("input")).value;

    if(!this.value) { 
      alert('Insira um valor numérico!')
      return
    }

    this.multiplicationTable.postCalculate(parseFloat(this.value)).subscribe( (res: any) => {
      this.result = res.result
      console.log(this.result)
    })
  }

  get table(): any { 
    if(this.result !== null)
      debugger 
      return this.result
    }

}
