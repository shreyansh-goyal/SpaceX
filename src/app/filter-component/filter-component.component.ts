import { Component, OnInit } from '@angular/core';
import { SpaceXData } from '../services/spacex-backend.service';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {

  public launchYear:number[]=[]
  constructor(private spaceX:SpaceXData) { 
  }
  	
  ngOnInit(): void {
    this.launchYear=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  }

  filterByYear(year:number){
    this.spaceX.getByLaunchYear(year);
    this.spaceX.setFetchingData(false);
  }

  filterByLaunchSuccess(isLaunched:boolean){
    this.spaceX.getByLaunchSuccess(isLaunched);
    this.spaceX.setFetchingData(false);
  }

  filterByLandSuccess(isLanded:boolean){
    this.spaceX.getByLandingSuccess(isLanded);
    this.spaceX.setFetchingData(false);
  }
}
