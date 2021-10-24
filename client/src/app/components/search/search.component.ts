import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchInput:string = "".toLowerCase();
 
  
  @Output() searchInputText = new EventEmitter<any>()
  constructor(public userService:UserService) { }
  
  ngOnInit(): void {
  }
  
  emitSearchInputText(event:any){
    this.searchInputText.emit(event.target.value)
  }
}
