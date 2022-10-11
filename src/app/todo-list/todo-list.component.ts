import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.fetchData( )
  }

  fetchData = ()=>{
    this.myApi.todoList().subscribe(
      (data)=>{
        this.todoData=data
      }
    )
  }

  todoData:any = []
  ngOnInit(): void {
  }

}
