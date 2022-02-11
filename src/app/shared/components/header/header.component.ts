import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AngularFireAuth,
    public router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.signOut().then(()=>{
      this.router.navigate(['login'])
    })
  }
}
