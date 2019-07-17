import { Component, OnInit } from '@angular/core';
import { CommentsFacade } from '@bmo/shared-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bmo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nn2';

  comments$: Observable<any>;

  constructor(private comments: CommentsFacade) {}

  ngOnInit() {
    this.comments$ = this.comments.allComments$;
  }
}
