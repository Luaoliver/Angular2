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
  texto: string = 'Teste' //variavel string
  valor: number = 0 //variável number
  endereco: [string, number] = ['Rua teste numero: ', 4] //tuple array
  dia: DiasDaSemana = DiasDaSemana.qui

  produto: Produto = new Produto(1, 'Cadeira', 900)

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.produto.preco = this.produto.aplicarDesconto(950)

    this.route.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
      }
    })

    this.texto = this.retornarNome('João')
  }

  retornarNome = (nome: string): string => {
    return `${nome} da Silva`
  }

}
