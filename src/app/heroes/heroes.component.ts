import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  message = 'Heroes Page';

  constructor() {
    // This runs first
  }

  ngOnInit(): void {
    // This runs when the component HAS BEEN CREATED
  }

}
