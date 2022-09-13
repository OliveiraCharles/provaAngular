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
  destinoEmail: string = "mailto:charles.oliveira@facens.br;leonardo.souza@facens.br";

  
  constructor(private cepService: ConsultaCepService) { }



  getVar(valor: any) {
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

  chamaServicoCep(valoresEntrada: any, formulario: any) {
    this.cepService.consultaCep(valoresEntrada.cep).subscribe((valoresRespostaAPI)=>{console.log('resposta',valoresRespostaAPI)});
    
    this.cepService.consultaCep(valoresEntrada.cep).subscribe((valoresRespostaAPI)=>this.populaForm(valoresRespostaAPI,formulario));
  };
  populaForm(valoresRespostaAPI:any,formulario:any){
    formulario.setValue({
      cep:valoresRespostaAPI.cep,
      logradouro: valoresRespostaAPI.logradouro,
      bairro: valoresRespostaAPI.bairro,
      cidade: valoresRespostaAPI.localidade,
      uf: valoresRespostaAPI.uf,
      complemento: valoresRespostaAPI.complemento,
      numCasa:''
    })
  };

  ngOnInit(): void {
  };
}
