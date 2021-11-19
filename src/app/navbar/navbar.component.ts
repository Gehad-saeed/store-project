import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged:boolean = false;

  constructor(private _AuthService:AuthService) {

    _AuthService.currentUser.subscribe(()=>{
      if (this._AuthService.currentUser.getValue() !=null){
      this.isLogged=true;
      }

      else{
        this.isLogged=false;
      }

    })
  }


  ngOnInit(): void {
  }

}
