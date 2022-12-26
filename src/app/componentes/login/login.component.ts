import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIMensagensService } from 'src/app/model/api-mensagens.service';
import { LoginService } from 'src/app/model/login.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  infosUser: FormGroup

  constructor(private fb: FormBuilder,
              private api: APIMensagensService,
              private rt: Router,
              private login: LoginService)
  {
    this.infosUser = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      senha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    })
  }

  ngOnInit(): void {
    console.log(this.login.retornarPermissao());
    this.fazerLogin();
  }

  consultarDados(form: FormGroup): void {
    let formulario = form.value;
    let user = formulario.usuario;
    let senha = formulario.senha;
    let usuario = new Usuario(user, senha);
    this.api.fazerLogin(usuario).subscribe(res => {
      if (res.status) {
        this.login.alterarValor(res.status);
        this.rt.navigate(['/edicao']);
      }
    });
  }

  fazerLogin(): void {
    if (this.login.retornarPermissao()) {
      this.rt.navigate(['/edicao']);
    }
  }
}
