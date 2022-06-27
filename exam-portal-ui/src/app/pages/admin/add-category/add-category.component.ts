import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  isReq = false;
  category = {
    title:'',
    description:''
  }

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addCategory(){
    if(this.category.title==='' || this.category.title===null){
      this.isReq = true;
      return
    }
    this.categoryService.addCategory(this.category).subscribe((data)=>{
      swal({
        title: `Congratulations`,
        text:`category added Successfully`,
        icon: "success",
      });
      this.router.navigate(['/admin/view-category']);
    },(error)=>{console.log("error",error);
    swal({
      title: `Error`,
      text:`Some error Occured`,
      icon: "error",
    });
  }
    )
  }

}
