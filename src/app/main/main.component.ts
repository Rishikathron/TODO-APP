import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  Todo : string = ""
  todos:string[] = []
  placeholder_value : string = "todo..."

  public Add_todo(value : string){
    if(value != ""){
      this.todos.push(value);      
    }else{
      this.placeholder_value = "Empty todo..."
    }
    console.log(this.todos);  
    this.Todo = ""  
  }

  public removetodo(value:string){
    console.log(value);
    this.todos = this.todos.filter((element)=>{
        return element != value;
    })
    
  }
}
