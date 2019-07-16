import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CommentsFacade } from '@bmo/shared-store';

@Component({
  selector: 'bmo-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  form: FormGroup;

  constructor(private comments: CommentsFacade) { }

  ngOnInit() {
    this.form = new FormGroup({
      comment: new FormControl('')
    });
  }

  onSubmit() {
    const { comment } = this.form.value;
    if (!comment)
      return;
    this.comments.addComment(comment);
  }

}
