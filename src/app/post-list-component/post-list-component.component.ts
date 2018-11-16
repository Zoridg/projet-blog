import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() lesposts;

  constructor() {
  }

  ngOnInit() {
  }

}
