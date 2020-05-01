import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-l-bar',
  templateUrl: './l-bar.component.html',
  styleUrls: ['./l-bar.component.scss'],
})
export class LBarComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit(): void {
  }


  getPerBar(porcentagem: number) {
    if (porcentagem < 0) {
      return 100 - ( -porcentagem);
    } else {
      return 100;
    }
  }
}
