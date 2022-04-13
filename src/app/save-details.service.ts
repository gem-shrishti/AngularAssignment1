import { Injectable } from '@angular/core';
import { userDetails } from './user/userDetails';

@Injectable({
  providedIn: 'root'
})
export class SaveDetailsService {
  data:userDetails[]=[];
   constructor() { }
   
   addData(details:userDetails){
     this.data.push(details);
   }
   sendData(){
     return this.data;
   }
}
