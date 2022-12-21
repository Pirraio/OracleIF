import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIMensagensService } from 'src/app/model/api-mensagens.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dadosUsuarioForm: FormGroup;

  constructor(private fb: FormBuilder,
              private api: APIMensagensService,
              private rt: Router)
  {
    this.dadosUsuarioForm = this.fb.group({
      nomeUsuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      senhaUsuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    const usuario: string | null = sessionStorage.getItem("nomeUsuario");
    if (usuario == "" || usuario == null) {
      
    }
  }

}
