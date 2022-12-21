import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIMensagensService } from 'src/app/model/api-mensagens.service';
import { Categoria } from 'src/app/model/categoria';
import { Mensagem } from 'src/app/model/mensagem';

@Component({
  selector: 'app-editor-mensagem',
  templateUrl: './editor-mensagem.component.html',
  styleUrls: ['./editor-mensagem.component.css']
})
export class EditorMensagemComponent implements OnInit {
  categorias: Categoria[];
  categoriaForm: FormGroup;
  categoriaSelectForm: FormGroup;
  mensagemForm: FormGroup;
  excluirMsgForm: FormGroup;
  msgPorCategoria: Mensagem[];

  constructor(private api: APIMensagensService,
              private fb: FormBuilder)
  {
    this.categoriaForm = this.fb.group({
      nomeCat: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    });
    this.categoriaSelectForm = this.fb.group({idcat: ['', [Validators.required]]});
    this.mensagemForm = this.fb.group({
      cat: ['', [Validators.required]],
      msg: ['', [Validators.required, Validators.minLength(5)]],
      ref: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.excluirMsgForm = this.fb.group({
      idCat: ['', Validators.required],
      idMsg: ['', Validators.required]
    });
    this.categorias = [];
    this.msgPorCategoria = [];
  }

  ngOnInit(): void {
    this.obterTodasCategorias();
  }

  obterTodasCategorias(): void {
    this.api.obterCategorias().subscribe(res => {
      this.categorias = res;
    })
  }

  cadastrarCategoria(form: FormGroup): void {
    let formulario = form.value;
    let novaCateg = { "nomeCategoria": formulario.nomeCat };
    this.api.cadastrarCategoria(novaCateg).subscribe();
  }

  excluirCategoria(form: FormGroup): void {
    let formulario = form.value;
    let idCat = +formulario.idcat;
    this.api.excluirCategoria(idCat).subscribe();
  }

  cadastrarMensagem(form: FormGroup): void {
    let formulario = form.value;
    let novaMsg = {
      "idCat": formulario.cat,
      "msg": formulario.msg,
      "ref": formulario.ref
    };    
    this.api.cadastrarMensagem(novaMsg).subscribe();
  }

  obterMsgCategoria(form: FormGroup): void {
    let formulario = form.value;
    let idCat: number = +formulario.idCat;
    this.api.obterMensagensPorIdCategoria(idCat).subscribe(res => {
      this.msgPorCategoria = res;
    })
    console.log(this.msgPorCategoria)
  }
}
