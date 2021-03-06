import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DiagnosisComponent } from './component/diagnosis/diagnosis.component';
import { ResultComponent } from './component/result/result.component';
import { ComfirmationComponent } from './component/comfirmation/comfirmation.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { NutritionComponent } from './component/nutrition/nutrition.component';

const routes: Routes = [
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'comfirmation', component: ComfirmationComponent },
  { path: 'result', component: ResultComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'nutorition', component: NutritionComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
