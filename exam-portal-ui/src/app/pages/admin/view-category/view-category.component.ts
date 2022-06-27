import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  categories: any={};

  constructor(private categoryService: CategoryService,
              private route: Router  ) { }

  ngOnInit(): void {
     this.categoryService.getAllCategory().subscribe((response: any)=>{
      this.categories = response;
    },
    (error)=>console.log(error));  
  }

}
