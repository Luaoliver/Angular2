import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {DiasDaSemana} from './../dias-da-semana.enum';
import {Produto} from './../objetos/produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any

  produto: Produto = new Produto(0, '', 0)

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
