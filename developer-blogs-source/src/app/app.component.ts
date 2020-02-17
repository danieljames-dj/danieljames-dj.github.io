import { Component } from '@angular/core';
import * as data from '../data/blogs.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Developer Blogs | Daniel James';
  blogs

  ngOnInit() {
    this.blogs = data
    console.log(this.blogs)
    console.log(this.blogs.default[1].id)
  }
}
