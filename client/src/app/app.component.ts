import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'client';
  users:any;
  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.http.get("http://localhost:5298/api/users").subscribe({
      next:reponse => this.users =reponse,
      error:error => console.log(error),
      complete:()=>{console.log("request has been comleted")}
      
    })
    
  }
}
