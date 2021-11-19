import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:any;

  loginForm =new FormGroup ({
    Email: new FormControl,
    password: new FormControl
  })

  constructor(private _AuthService:AuthService,private _Router:Router) { }


  submitLoginForm(loginForm:FormGroup){
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if(response.msg=='success')
      {
        localStorage.setItem('userToken',response.token)
        this._AuthService.saveCurrentUser()
        this._Router.navigate(['home'])
      }
      else
      {
        this.error = response.msg;
        console.log(this.error);
      }
    })
    }

  ngOnInit(): void {
  }

}
