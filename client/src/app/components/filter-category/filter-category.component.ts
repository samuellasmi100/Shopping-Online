import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategorysService } from 'src/app/services/categorys.service';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})

export class FilterCategoryComponent implements OnInit {
  
   @Output() categoryId:any = new EventEmitter<any>()

  constructor( public categorysService: CategorysService,private router:Router) { }

  ngOnInit(): void {

    const categorysObservable = this.categorysService.getAllCategorys();
    
    categorysObservable.subscribe(res => {

      this.categorysService.categorys = res

    }, err => { console.log(err) })
  }
  reset(){
 
  const resetCategoryPipe = 0
    
    this.categoryId.emit(resetCategoryPipe)
  }
  getCategoryId(categoryId:any){
   
    this.categoryId.emit(categoryId)
  }

}
