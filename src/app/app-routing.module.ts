import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyPieChartComponent} from './my-pie-chart/my-pie-chart.component';
import {MyLineChartComponent} from './my-line-chart/my-line-chart.component';
import {LineAMZNComponent} from './line-amzn/line-amzn.component';
import {LineFBComponent} from './line-fb/line-fb.component';
import {LineGOOGLComponent} from './line-googl/line-googl.component';
import {LineAMDComponent} from './line-amd/line-amd.component';


const routes: Routes = [
  {path:'pie-chart',component:MyPieChartComponent},
  {path:'line-chart',component:MyLineChartComponent},
  {path:'lineAMZN-chart',component:LineAMZNComponent},
  {path:'lineFB-chart',component:LineFBComponent},
  {path:'lineGOOGL-chart',component:LineGOOGLComponent},
  {path:'lineAMD-chart',component:LineAMDComponent},
  {path:'**',component:MyPieChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
