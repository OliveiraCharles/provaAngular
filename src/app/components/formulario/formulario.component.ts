import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service'
import { FormsModule } from '@angular/forms';

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
  bairroUsuario: string = '';
  stringFinalEmail = '';
  cidadeUsuario = '';
  ufUsuario = '';
  complementoUsuario = '';
  mensagemUsuario = '';
  destinoEmail: string = "mailto:charles.oliveira@facens.br;leonardo.souza@facens.br";




  getVar(valor: any) {
    console.log(valor.nome);
  }

  variavel = this.getVar

  concatEmail() {
this.stringFinalEmail = `${this.destinoEmail} 
&subject=
Novo cadastro [${this.nomeUsuario} ${this.sobrenomeUsuario}] 
    
&body=
Prezados, segue dados do novo cadastro: %0D%0A%0D%0A
DadosPessoais:%0D%0A
    Nome: ${this.nomeUsuario}${this.sobrenomeUsuario}, %0D%0A
    Email: ${this.emailUsuario}, %0D%0A
    Telefone: ${this.telefoneUsuario}, %0D%0A%0D%0A
Endereço: %0D%0A
    CEP: ${this.cepUsuario}, %0D%0A
    Logradouro: ${this.ruaUsuario}, %0D%0A
    N°: ${this.numCasa}, %0D%0A
    Bairro: ${this.bairroUsuario}, %0D%0A
    Complemento: ${this.complementoUsuario}, %0D%0A
    Cidade: ${this.cidadeUsuario}, %0D%0A
    Mensagem: ${this.mensagemUsuario}, %0D%0A %0D%0A
Atenciosamente,%0D%0A
    ${this.nomeUsuario} ${this.sobrenomeUsuario}|${this.telefoneUsuario}`
    
    return this.stringFinalEmail;
  };

  
//CEP
  constructor(private cepService: ConsultaCepService) { }

  chamaServicoCep(valoresEntrada: any, formulario: any) {
    this.cepService.consultaCep(valoresEntrada.cep).subscribe((valoresRespostaAPI) => { console.log('resposta', valoresRespostaAPI) });
    this.cepService.consultaCep(valoresEntrada.cep).subscribe((valoresRespostaAPI) => this.populaForm(valoresRespostaAPI, formulario));
  };

  populaForm(valoresRespostaAPI: any, formulario: any) {
    formulario.setValue({
      cep: valoresRespostaAPI.cep,
      logradouro: valoresRespostaAPI.logradouro,
      bairro: valoresRespostaAPI.bairro,
      cidade: valoresRespostaAPI.localidade,
      uf: valoresRespostaAPI.uf,
      complemento: valoresRespostaAPI.complemento,
      numCasa: '',
      mensagem: ''
    })
  };
//CEP


  ngOnInit(): void {
  };
}
