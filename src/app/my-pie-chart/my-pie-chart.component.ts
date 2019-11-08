import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {
  public pieChartLabels = ['Apple:SVR=', 'AMZN:LR=', 'FB:SVR=',  'GOOGL:SVR=', 'AMD:SVR='];
  public pieChartData = [0.8882706712311567,	0.9570499104823704,	0.9165007254900527,	0.9157568968969678,	0.952290932003912 ];
  public pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
