import { Component, OnInit } from '@angular/core';
import { SpaceXData } from './services/spacex-backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private spaceX:SpaceXData) {
    this.spaceX.getAll();
  }
  
  ngOnInit(): void {
    
  }
  title = 'final-assignment';

}
