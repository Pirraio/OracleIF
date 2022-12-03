import { Component, OnInit } from '@angular/core';
import { APIMensagensService } from '../../model/api-mensagens.service';

@Component({
  selector: 'app-escolher-categoria',
  templateUrl: './escolher-categoria.component.html',
  styleUrls: ['./escolher-categoria.component.css']
})
export class EscolherCategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  piada():void {
    console.log('Hello World')
    
  }
}
