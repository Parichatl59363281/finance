import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { LineAMZNComponent } from './line-amzn/line-amzn.component';
import { LineFBComponent } from './line-fb/line-fb.component';
import { LineGOOGLComponent } from './line-googl/line-googl.component';
import { LineAMDComponent } from './line-amd/line-amd.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPieChartComponent,
    MyLineChartComponent,
    LineAMZNComponent,
    LineFBComponent,
    LineGOOGLComponent,
    LineAMDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
