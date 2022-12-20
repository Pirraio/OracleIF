import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIMensagensService } from 'src/app/model/api-mensagens.service';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-editor-mensagem',
  templateUrl: './editor-mensagem.component.html',
  styleUrls: ['./editor-mensagem.component.css']
})
export class EditorMensagemComponent implements OnInit {
  categorias: Categoria[];
  //categoriaForm: FormGroup;

  constructor(private api: APIMensagensService/*,
              private fb: FormBuilder*/)
  {
    /*this.categoriaForm = this.fb.group({
      nomeCat: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    });*/
    this.categorias = [];
  }

  ngOnInit(): void {
    this.api.obterCategorias().subscribe(res => {
      this.categorias = res;
    });
  }

}
