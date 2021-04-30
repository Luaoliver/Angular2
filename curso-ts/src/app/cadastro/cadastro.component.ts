import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {DiasDaSemana} from './../dias-da-semana.enum';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any
  texto: string = 'Teste' //variavel string
  valor: number = 0 //variável number
  endereco: [string, number] = ['Rua teste numero: ', 4] //tuple array
  dia: DiasDaSemana = DiasDaSemana.qui

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
      }
    })
  }

}
