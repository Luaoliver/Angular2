import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //responsavel por fazer consultas em APIs
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }
  
  listar(){
    return [ 'Computador', 'Teclado', 'Fones', 'Mouse' ]
  }
  
}
