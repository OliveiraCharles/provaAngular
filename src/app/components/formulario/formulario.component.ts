import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  ngModelNome: string = '';

  nomeUsuario: string = '';
  sobrenomeUsuario: string = '';
  telefoneUsuario: string = '';
  emailUsuario: string = '';
  ruaUsuario: string = '';
  cepUsuario: string = '';

  numCasa: string = '';
  stringFinalEmail = '';

  destinoEmail: string = "mailto:charles.oliveira@facens.br;leonardo.souza@facens.br";

  constructor() { }

  ngOnInit(): void {
  }

  getVar(valor:any){
    console.log(valor.nome);
  }

  variavel = this.getVar

  concatEmail() {
    
    this.stringFinalEmail = `${this.destinoEmail} &subject=Mensagem de ${this.nomeUsuario} &body=Prezados%0D%0A Nome: ${this.nomeUsuario} ${this.sobrenomeUsuario}, %0D%0A 
    Email: ${this.emailUsuario}, %0D%0A
    telefone: ${this.telefoneUsuario}, %0D%0A
    Endereço: ${this.cepUsuario}, %0D%0A %0D%0A
    
    Atenciosamente,%0D%0A
    ${this.nomeUsuario} | ${this.telefoneUsuario}`

    return this.stringFinalEmail;
  };


}
