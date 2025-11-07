import { BookingModel } from '../Modles/booking-model';
import { Component } from '@angular/core';
import { EventService } from '../Service/event-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-event',
  imports: [FormsModule],
  templateUrl: './book-event.html',
  styleUrl: './book-event.css',
  providers:[EventService]
})
export class BookEvent {

  constructor(public eveserv:EventService){}

  bookobj = new BookingModel("","",0,0,"")

  save()
  {
    this.eveserv.booking(this.bookobj).subscribe({
      next:(res:any)=>{
        alert(res.message)
      },
      error:(error:any)=>{
        alert(error)
      }
    })
  }
}
