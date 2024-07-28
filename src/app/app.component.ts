import { Component } from '@angular/core';
import { CepServiceService } from './cep-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LandingPageDias';

  constructor(private cepService: CepServiceService){}

  consultaCep(valor: any, form: NgForm){
    this.cepService.buscar(valor).subscribe((dados) => this.populaform(dados, form));
  }
  populaform(dados: any, form: NgForm){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      UF: dados.uf
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }

}
