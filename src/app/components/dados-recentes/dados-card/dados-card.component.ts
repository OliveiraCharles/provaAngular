import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-card',
  templateUrl: './dados-card.component.html',
  styleUrls: ['./dados-card.component.scss']
})
export class DadosCardComponent implements OnInit {
  @Input() texto!: {
    textoa: string;
    textob: string;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
