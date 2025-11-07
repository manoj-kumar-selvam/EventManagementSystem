import { Component } from '@angular/core';
import { CreatAccModel } from '../Modles/creat-acc-model';
import { EventService } from '../Service/event-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-creatacc',
  imports: [FormsModule, RouterLink],
  templateUrl: './creatacc.html',
  styleUrl: './creatacc.css',
  providers: [EventService]
})
export class Creatacc {

  creact = new CreatAccModel("","","");

  constructor(public eveserv: EventService) { }
  save() {
    debugger
    console.log(this.creact);
    this.eveserv.creatacc(this.creact).subscribe({
      next: (res: any) => {
        console.log(res)
        alert(res.message)
      },
      error: (error: any) => {
        alert(error.error)
      }
    })
  }
}
