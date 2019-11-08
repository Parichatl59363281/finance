import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-googl',
  templateUrl: './line-googl.component.html',
  styleUrls: ['./line-googl.component.css']
})
export class LineGOOGLComponent implements OnInit {
  public lineGOOGLChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineGOOGLChartLegend = true;
  public lineGOOGLChartLabels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
  ];
  public lineGOOGLChartData = [
    {data: [1245.49393952, 1229.78629032, 1225.16252163, 1210.60849692, 1183.61536821,
        1194.67988631, 1215.37648393, 1212.77141126, 1195.35274589, 1207.14785704,
        1213.9441636,  1219.94263644, 1221.92296139, 1245.44582766, 1246.17642167,
        1255.59716236, 1247.53188068, 1247.40690749, 1244.44604309, 1260.24017618,
        1261.66287395, 1266.65205789, 1290.37675867, 1263.15292871, 1263.19130073,
        1261.36493394, 1274.29430813, 1290.98237949, 1292.74150752, 1292.32821689
      ], label: 'LR'},
    {data: [1058.05829055, 1136.7084749,  1181.9198663,  1190.39308631, 1165.2457002,
        1210.10141396, 1192.80946093, 1155.27331044, 1215.13171134, 1176.86462237,
        1137.40509688, 1167.75564595, 1224.06528893, 1062.01135737, 1025.99383352,
        1174.91832671, 1107.59455789, 1093.51913762, 1170.40360795, 1200.93443361,
        1157.74006793, 1129.51534329,  990.93307561, 1155.76139384, 1157.48911823,
        1170.276632,   1085.57947373,  960.82602576,  919.52712644,  924.49177954
      ], label: 'SVR'}];
  public lineGOOGLChartType = 'line';
  constructor() { }
  ngOnInit() {
  }

}
