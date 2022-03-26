import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() data: string = '';
  config = {
    editable: true,
    spellcheck: true,
    minHeight: '100px',
  };

  constructor() { }

  ngOnInit(): void {
  }
}
