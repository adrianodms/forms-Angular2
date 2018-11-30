import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'div[app-campo-control-error]',
  templateUrl: './campo-control-error.component.html',
  styleUrls: ['./campo-control-error.component.css'],
})
export class CampoControlErrorComponent implements OnInit {

  constructor() { }

  @Input() mostrarErro: boolean;
  @Input() msgErro: string;

  ngOnInit() {
  }

}
