import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {DiasDaSemana} from './../dias-da-semana.enum';
import {Produto} from './../objetos/produto';
import { ProdutoService } from './../service/produto.service';

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
    private router: Router,
    private prodService: ProdutoService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
      }
    })

  }

  adicionar = () => {
    this.prodService.adicionar(this.produto).subscribe(
      sucess => console.log('Salvou'),
      error => console.log('Deu ruim'),
      () => console.log('Requisição completa')
    )
  }

}
