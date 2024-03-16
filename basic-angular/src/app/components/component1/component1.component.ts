import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component implements OnInit {

  seconds: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.seconds = 10;
  }

}
