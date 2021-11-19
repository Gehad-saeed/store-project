import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  toggleStyle:boolean=true;

  constructor() { }
  toggle(){
    this.toggleStyle=!this.toggleStyle;
  }

  ngOnInit(): void {
  }

}
