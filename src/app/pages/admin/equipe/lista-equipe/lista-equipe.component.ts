import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'ngx-lista-equipe',
  templateUrl: './lista-equipe.component.html',
  styleUrls: ['./lista-equipe.component.scss']
})
export class ListaEquipeComponent implements OnInit {
  equipes;
  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipeService.lista()
      .subscribe(res => this.equipes = res);
  }

}
