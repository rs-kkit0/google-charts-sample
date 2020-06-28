import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { DiagnosisComponent } from './component/diagnosis/diagnosis.component';
import { ResultComponent } from './component/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    LineChartComponent,
    DiagnosisComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
