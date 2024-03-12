import { CategoryApiService } from 'src/app/shared/service/ctegory-api.service';
import { Component, OnInit } from '@angular/core';
import { CProdact } from 'src/app/shared/interfaces/c-prodact';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private _CategoryApiService: CategoryApiService) {}
  // globalVirabol
  categoryData: CProdact[] = [{} as CProdact] ;
  // bealtInFunction
  ngOnInit(): void {
    this._CategoryApiService.getAllCategory().subscribe({
      next: (respons) => {
        // console.log(respons.data);
        this.categoryData = respons.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // my method
}
