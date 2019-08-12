import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CommentsFacade, DocuUiFacade } from '@bmo/shared-store';

@Component({
  selector: 'bmo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nn2';

  comments$: Observable<any>;
  statusComplete$: Observable<boolean>;

  constructor(
    private comments: CommentsFacade,
    private docuUi: DocuUiFacade
  ) {}

  ngOnInit() {
    this.comments$ = this.comments.allComments$;
    this.statusComplete$ = this.docuUi.statusComplete$;
  }
}
