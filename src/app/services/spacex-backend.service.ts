import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class SpaceXData{

    
    public spaceData=new Subject();
    public fetchingData=new BehaviorSubject(true);
    
    constructor(private http:HttpClient){
    }

    setFetchingData(value:boolean){
        this.fetchingData.next(value);
    }

    getAll():void{
        this.fetchingData.next(true);
        this.http.get('https://api.spaceXdata.com/v3/launches?limit=100').subscribe(
            (data)=>{
                this.spaceData.next(data);
            }
        )
    }

    getByLaunchYear(year:number):void{
        this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`).subscribe(
            (data)=>{
                this.spaceData.next(data);
            }
        )
    }

    getByLaunchSuccess(launchSuccess:boolean){
        this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchSuccess}`).subscribe(
            (data)=>{
                this.spaceData.next(data);
            }
        )       
    }

    getByLandingSuccess(landingSuccess:boolean){
        this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${landingSuccess}`).subscribe(
            (data)=>{
                this.spaceData.next(data);
            }
        )   
    }
}
