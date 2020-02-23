import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Observable<any> ; 
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('test').valueChanges()
    this.items.subscribe(console.log);
   }


  ngOnInit(): void {
  }

}
