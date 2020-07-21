import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { DiagnosisComponent } from './component/diagnosis/diagnosis.component';
import { ResultComponent } from './component/result/result.component';
import { ComfirmationComponent } from './component/comfirmation/comfirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    LineChartComponent,
    DiagnosisComponent,
    ResultComponent,
    ComfirmationComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
