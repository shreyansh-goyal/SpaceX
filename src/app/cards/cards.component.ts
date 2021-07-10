import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpaceXData } from '../services/spacex-backend.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CardsComponent implements OnInit {
  public isFetching:boolean=false;
  public spaceships:any=[];

  constructor(private spaceX:SpaceXData) { }

  ngOnInit(): void {
    this.spaceX.spaceData.subscribe(
      (data)=>{
        this.spaceships=data;
        this.spaceX.setFetchingData(true);
      }
    )
    this.spaceX.fetchingData.subscribe(
      (data)=>{
        this.isFetching=data;
      }
    )
  }

}
