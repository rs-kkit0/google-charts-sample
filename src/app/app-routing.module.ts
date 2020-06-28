import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DiagnosisComponent } from './component/diagnosis/diagnosis.component';
import { ResultComponent } from './component/result/result.component';

const routes: Routes = [
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'result', component: ResultComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
