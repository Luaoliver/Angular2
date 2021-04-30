import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //responsavel por fazer consultas em APIs e já faz a conversão de json para objeto

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private $http: HttpClient) { }
  
  listar(){
    return this.$http.get('http://localhost:3000/produtos')
  }
  
}
