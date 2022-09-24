import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blogsArray: Blog | undefined;
  @Output() BlogIDEditEmitter = new EventEmitter();
  @Output() BlogIDDeleteEmitter = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {
  }

  sendBlogIDandEdit(){
    this.BlogIDEditEmitter.emit(this.blogsArray?.id)
  }

  sendBlogIDandDelete(){
    this.BlogIDDeleteEmitter.emit(this.blogsArray?.id)
  }

}
