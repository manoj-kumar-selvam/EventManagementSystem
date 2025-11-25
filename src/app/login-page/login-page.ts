import { Router, RouterLink } from "@angular/router";

import { Component } from '@angular/core';
import { EventService } from '../Service/event-service';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../Modles/login-model';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
  providers:[EventService]
})
export class LoginPage {

  constructor(public eveserv:EventService,public router:Router){}

  login = new LoginModel("","");

  save()
  {
    this.eveserv.login(this.login).subscribe({
      next:(msg:any)=>{
        alert(msg.message);
        this.router.navigateByUrl("/list")
      },
      error:(msg)=>{
        alert(msg.error.message)
      }
    })
  }
}
