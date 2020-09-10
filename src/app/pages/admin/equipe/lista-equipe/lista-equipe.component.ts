import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'ngx-lista-equipe',
  templateUrl: './lista-equipe.component.html',
  styleUrls: ['./lista-equipe.component.scss'],
})
export class ListaEquipeComponent implements OnInit {
  equipes;
  constructor(private equipeService: EquipeService) { }
  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.equipeService.lista()
      .subscribe(res => this.equipes = res, err => err, () => this.loading = false);
  }

}
