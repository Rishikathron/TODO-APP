import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  Todo : string = ""
  todos:string[] = ["rishi","var"]
  public Add_todo(value : string){
    this.todos.push(value);
    console.log(this.todos);    
  }

  public removetodo(value:string){
    console.log(value);
    this.todos = this.todos.filter((element)=>{
        return element != value;
    })
    
  }
}
