import { ItensService } from './../../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies/companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaObjetos:any ;
  tipo="Todos";
  pesquisa = ""
  collectioname: any;
  companhia: any;
  companhiaName: any;
  constructor(private objetos: ItensService, private produtos: ProdutosService, private route: ActivatedRoute, private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.objetos.criaObjetos();
    this.route.params.subscribe(params =>  {
      this.companhiaName = params['nickname']
      this.companiesService.getOne(this.companhiaName).subscribe(res=>{
        this.companhia = res;
        console.log(this.companhia)
      })
      this.produtos.getAll(this.companhiaName).subscribe(res=>{
        const result: any = res;
        this.collectioname = result.collections[0].collectionName
  
        console.log(res)
        this.listaObjetos = result.collections[0].vrItems;
        console.log(this.listaObjetos)
      });
      
      
    });


  }
  itemPesquisa(e: any){
    this.pesquisa=(e.target.value);
  }
  tiraEspaco(palavra: string){
    const result = palavra.split(" ").join("-");
    console.log(result)
    return result;
  }

}
