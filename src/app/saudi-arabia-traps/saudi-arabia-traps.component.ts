import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-saudi-arabia-traps',
  templateUrl: './saudi-arabia-traps.component.html',
  styleUrls: ['./saudi-arabia-traps.component.scss']
})
export class SaudiArabiaTrapsComponent implements OnInit {
  // readingSmall= new BehaviorSubject([]);
  // readingMosuqitoes= new BehaviorSubject([]);
  // readingLarg= new BehaviorSubject([]);

  readingSmall:any[]=[]
  readingMosuqitoes:any[]=[]
  readingLarg:any[]=[]




  public lineChartData: ChartDataSets[] = [
    //readingsmall
    //readingMosuqitoes
    //readingLarg
    // { data: this.readingSmall.getValue(), label: 'readingsmall' },
    // { data: this.readingMosuqitoes.getValue(), label: 'readingMosuqitoes' },
    // { data: this.readingLarg.getValue(), label: 'readingLarg' },

    { data: [], label: 'readingsmall' },
    { data: [], label: 'readingMosuqitoes' },
    { data: [], label: 'readingLarg' },

    // { data: [21, 59, 80, 25, 45, 55, 40, 52, 72, 25, 77, 20], label: 'readingsmall' },
    // { data: [30, 40, 74, 87, 43, 46, 37, 48, 67, 46, 70, 40], label: 'readingMosuqitoes' },
    // { data: [12, 30, 23, 87, 43, 46, 37, 48, 67, 36, 70, 30], label: 'readingLarg' },

// {
//     datasets: [{
//         data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}]
//     }]
// },
  ];
// Time
  public lineChartLabels: Label[] = [];
  // public lineChartLabels: Label[] = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30','03:00', '03:30','04:00', '04:30','05:00', '05:30'];

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartType = <const> 'line';
  public lineChartPlugins = [];

  traps: any[]= [];


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

  constructor(private _HttpClient:HttpClient,private _AuthService:AuthService,private exportAsService: ExportAsService) {}


  displayAllTraps(){
    this._AuthService.getAllTraps().subscribe(
      (data)=>{
      this.traps=data.data;
      // console.log(this.traps);

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

  // sub(){
  //   this.readingSmall.subscribe(()=>{
  //     console.log("ay7aga0");
  //      });
  //   this.readingLarg.subscribe(()=>{
  //     console.log("ay7aga1");
  //      });
  //      this.readingMosuqitoes.subscribe(()=>{
  //       console.log("ay7aga2");
  //        });
  // }

  getTrapsReading():Observable<any>
  {
    return this._HttpClient.get(`https://apps.sa-counter.com/api/Admin/GetTrapReadings/EG-123-2020-12`)
  }
  display(){
    this.getTrapsReading().subscribe(
      (data)=>{
      // for(let i=0;i<data.length;i++){
      //   this.readingSmall.next(data[i].readingsmall);
      //   this.readingMosuqitoes.next(data[i].readingMosuqitoes);
      //   this.readingLarg.next(data[i].readingLarg);
      // }
      // readingTime
      for(let j=0;j<50;j++){
        this.lineChartLabels.push(data.data[j].readingTime)
      }
      for(let i=0;i<80;i++){
        for(let x=0;x<this.lineChartData.length;x++){
          if(this.lineChartData[x].label=='readingsmall'){
            this.lineChartData[x].data?.push(data.data[i].readingsmall)
          }
          else if(this.lineChartData[x].label=='readingMosuqitoes'){
            this.lineChartData[x].data?.push(data.data[i].readingMosuqitoes)
          }
          else if(this.lineChartData[x].label=='readingLarg'){
            this.lineChartData[x].data?.push(data.data[i].readingLarg)
          }
          else {console.log("msh sh3'al");
          }
        }

        // this.readingSmall=data.data[i].readingsmall;
        // this.readingMosuqitoes=data.data[i].readingMosuqitoes;
        // this.readingLarg=data.data[i].readingLarg;
        // console.log(data.data[i].readingsmall);

      }
      // for(let t=0;t<data.length;t++){
      // }
      console.log("sh3'al");
      // console.log(data.data);
      // console.log(this.readingSmall);

    },
    (_error)=>{
      console.log("bazet 5aleeees");
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


  ngOnInit(): void {
    this.displayAllTraps();
    this.display();
    // this.readingSmall.subscribe(()=>{
    //   console.log("ay7aga0");
    //    });
    // this.readingLarg.subscribe(()=>{
    //   console.log("ay7aga1");
    //    });
    //    this.readingMosuqitoes.subscribe(()=>{
    //     console.log("ay7aga2");
    //      });
  }
// https://apps.sa-counter.com/api/Admin/GetTrapReadings/EG-123-2020-12
}
