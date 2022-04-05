import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() icone: string='';
  @Input() titulo: string='VS|LIBRARY';

  constructor() { }

  ngOnInit(): void {
  }

}
