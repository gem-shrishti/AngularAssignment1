import { Component, OnInit } from '@angular/core';
import { SaveDetailsService } from 'src/app/save-details.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  
  constructor(private saveDetailsService : SaveDetailsService) { }
  userData=this.saveDetailsService.sendData();

  ngOnInit(): void {
  }

}
