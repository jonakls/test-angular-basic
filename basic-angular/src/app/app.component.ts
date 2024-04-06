import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    const values = this.categoryService.getCategories();

    values.forEach(function (value) {
      console.log("Arranca")
      console.log(value);
    });

    
  }
  title = 'basic-angular';
}
