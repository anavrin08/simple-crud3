import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  @Output() AddEmitter = new EventEmitter();
  @Output() DeleteAllEmitter = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  emitAdd() {
    this.AddEmitter.emit(this.route.snapshot.params)
    
    if (this.router.url.includes('book')) {
      this.router.navigate(['book/form'])
    } else if (this.router.url.includes('blog')) {
      this.router.navigate(['blog/form'])
    }

  }

  emitDeleteAll() {
    this.DeleteAllEmitter.emit(this.route.snapshot.params)
    console.log("DeleteAll")
  }

}
