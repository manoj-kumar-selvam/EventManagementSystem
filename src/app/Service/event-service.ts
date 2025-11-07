import { BookingModel } from '../Modles/booking-model';
import { CreatAccModel } from '../Modles/creat-acc-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../Modles/login-model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http:HttpClient){}
 


private logiapi:string ="https://localhost:7276/api/Login";
private creactapi:string ="https://localhost:7276/api/createuser";
private bookapi:string ="https://localhost:7276/api/Booking_";

obj = new Promise((resolve, reject)=>{
resolve('Sucess')
})

//Login page
  public login(log:LoginModel)
  {
    return this.http.post(this.logiapi,log) 
  }
  
 //creataccount page 
 public creatacc(creact:CreatAccModel)
 {
  return this.http.post(this.creactapi,creact)
 }

 // booking page
 public booking(book:BookingModel)
 {
  return this.http.post(this.bookapi,book)
 }

 
 

}
