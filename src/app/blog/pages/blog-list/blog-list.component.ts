import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {

  blogsArray?: Blog[] = [];

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogsArray = this.blogService.displayBlogs();
  }

  editBlog(id:number){
    alert(`Edit: ${id}`);
  }

  deleteBlog(id:number){
    alert(`Delete: ${id}`);
  }


}
