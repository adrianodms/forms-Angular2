import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor() {

  }

  ngOnInit() {
  }

  verificaValidTouched(campo):boolean{
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }

  consultaCEP(cep){
    cep = cep.replace(/\D/g, '').trim();
    var validaCEP = /^[0-9]{8}$/;

    if(cep != '' && validaCEP.test(cep){

      //this.http. `//viacep.com.br/ws/${cep}/json/?callback=?`


    }

  }

}
