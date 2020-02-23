import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ontwerp-tuin',
  templateUrl: './ontwerp-tuin.component.html',
  styleUrls: ['./ontwerp-tuin.component.scss']
})
export class OntwerpTuinComponent implements OnInit {
  user$ : Observable<any>
  constructor(private auth : AngularFireAuth) {
    this.user$ = this.auth.user;
   }

  ngOnInit(): void {
  }

}
