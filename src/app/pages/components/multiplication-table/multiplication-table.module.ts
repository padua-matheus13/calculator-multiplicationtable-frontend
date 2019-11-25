import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiplicationTableComponent } from './multiplication-table.component';
import { MultiplicationTableService } from '../../../services/multiplication-table.service'

@NgModule({
  declarations: [MultiplicationTableComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MultiplicationTableComponent
  ],
  providers:[
    MultiplicationTableService
  ]
})
export class CalculatorModule { }
