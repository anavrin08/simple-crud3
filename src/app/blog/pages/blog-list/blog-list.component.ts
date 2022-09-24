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

  constructor(private blogService:BlogService) { 
    this.blogsArray = this.blogService.displayBlogs();
  }

  ngOnInit(): void {
  }

  editBlog(id:number){
    console.log("edit: "+ id);
  }

  deleteBlog(id:number){
    console.log("delete: "+ id);
  }


}
