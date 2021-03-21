import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quantity_user:number=1;
  i=0;
  plus_user(){
    if(this.i !=100){
    this.i++;
    this.quantity_user= this.i;
    }
  }
  minus_user(){
    if(this.i !=1){
    this.i--;
    this.quantity_user= this.i;
    }
  }
  quantity_sms:number=1;
  j=0;
  plus_sms(){
    if(this.j !=100){
    this.j++;
    this.quantity_sms= this.j;
    }
  }
  minus_sms(){
    if(this.j !=1){
    this.j--;
    this.quantity_sms= this.j;
    }
  }
  quantity_mail:number=1;
  k=0;
  plus_mail(){
    if(this.k !=100){
    this.k++;
    this.quantity_mail= this.k;
    }
  }
  minus_mail(){
    if(this.k !=1){
    this.k--;
    this.quantity_mail= this.k;
    }
  }
  quantity_call:number=1;
  l=0;
  plus_call(){
    if(this.l !=100){
    this.l++;
    this.quantity_call= this.l;
    }
  }
  minus_call(){
    if(this.l !=1){
    this.l--;
    this.quantity_call= this.l;
    }
  }
  }  