import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_todo_list';

  constructor (){
  //   setTimeout(() => {
  //     this.title="Vishal ";
  //   },2000 );
  }
}
