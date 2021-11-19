import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-egypt-traps',
  templateUrl: './egypt-traps.component.html',
  styleUrls: ['./egypt-traps.component.scss']
})
export class EgyptTrapsComponent implements OnInit {

  traps: any[]= [];


  public lineChartData: ChartDataSets[] = [
    { data: [21, 59, 80, 25, 45, 55, 40, 52, 76, 65, 77, 20,21, 59, 80, 35, 45, 55, 40, 53, 73, 35, 77, 30], label: 'Apple' },
    { data: [57, 50, 75, 87, 42, 42, 27, 48, 27, 52, 70, 50,57, 50, 75, 87, 42, 42, 27, 48, 27, 52, 70, 50], label: 'Mi' },
  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartType = <const> 'line';
  public lineChartPlugins = [];



  exportAsPng: ExportAsConfig = {
    type: 'png',
    elementIdOrContent: 'items',
  }
  exportAsPdf: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'items',
  }
  exportAsXlsx: ExportAsConfig = {
    type: 'xlsx',
    elementIdOrContent: 'items',
  }
  exportAsTxt: ExportAsConfig = {
    type: 'txt',
    elementIdOrContent: 'items',
  }


  constructor(private _AuthService:AuthService,private exportAsService: ExportAsService) {}

  displayAllTraps(){
    this._AuthService.getAllTraps().subscribe(
      (data)=>{
      this.traps=data.data;
      console.log(this.traps);

    },
    (_error)=>{
      console.log(Error);
      console.log("bazet");
      },
    ()=>{
      console.log('Done');
      }
    )
  }


  exportItemPdf()
  {
    this.exportAsService.save(this.exportAsPdf, 'My File Name').subscribe(() => {});
  }

  exportItemXlsx()
  {
    this.exportAsService.save(this.exportAsXlsx, 'My File Name').subscribe(() => {});
  }

  exportItemTxt()
  {
    this.exportAsService.save(this.exportAsTxt, 'My File Name').subscribe(() => {});
  }

  exportItemPng()
  {
    this.exportAsService.save(this.exportAsPng, 'My File Name').subscribe(() => {});
  }

  ngOnInit(){
    this.displayAllTraps();
  }

}

