import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  uid: string;
  pwd: string;
  getLoggedIn(){
    if(this.uid=="admin"){
      this.router.navigateByUrl("/adminHome");
      console.log("admin working")
    }
    if(this.uid=="user"){
      this.router.navigateByUrl("/userHome");
      console.log("user working");
    }

  }

}
