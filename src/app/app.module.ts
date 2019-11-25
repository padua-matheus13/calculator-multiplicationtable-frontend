import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorModule } from './pages/components/calculator/calculator.module'
import { HttpClientModule } from '@angular/common/http';
import { MultiplicationTableComponent } from './pages/components/multiplication-table/multiplication-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicationTableComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
