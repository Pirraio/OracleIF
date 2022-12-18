import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { APIMensagensService } from '../../model/api-mensagens.service';
import { RegistroDadosBotoesService } from 'src/app/model/registro-dados-botoes.service';

@Component({
  selector: 'app-escolher-categoria',
  templateUrl: './escolher-categoria.component.html',
  styleUrls: ['./escolher-categoria.component.css']
})
export class EscolherCategoriaComponent implements OnInit {
  categorias: Categoria[];

  constructor(private api: APIMensagensService,
              private reg: RegistroDadosBotoesService) {
    this.categorias = [];
  }

  ngOnInit(): void {
    this.api.obterCategorias().subscribe(res => {
      this.categorias = res;
    });
  }

  salvarCategoriaEscolhida(idCat: number): void {
    this.reg.inserirValorCategoria(idCat);
  }
}
