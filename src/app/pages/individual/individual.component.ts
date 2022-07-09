import { ItensService } from './../../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode'

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  mostraInfo = true;
  obj:any = null;
  objId: number = 0;
  elementType = NgxQrcodeElementTypes.URL;  
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;  
  value: any;
  constructor(private objeto: ItensService, private route: ActivatedRoute, private router: Router, private produtoService: ProdutosService) {
    console.log(window.location)
   }

  ngOnInit(): void {
    
    this.route.params.subscribe(params =>  {

      this.produtoService.getOne(params['id']).subscribe(res=>{
        this.value = window.location.hostname+"/#/"+params['id'];
        this.obj = res;
        console.log(this.obj)
      })

      
      
    });
      
  }
  tiraEspaco(palavra: string){
    const result = palavra.split(" ").join("-");
    console.log(result)
    return result;
  }

}
