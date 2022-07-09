import { Itens } from './../models/itens';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private objetos: Itens[] = [];
  
  constructor() { 
    
  }

  criaObjetos(){
    this.objetos = [new Itens(
      1, 
      "SKID DE P-2000 COM PITSTOP", "./assets/tanques/p200-pitstop.jpg", 
      "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de Pit-stop padrão Nacional Gás",
      "P2000","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/2_SkidsP2000_1_Pitstop_Rev02.glb",
      "./assets/qrcode/Skid P-2000Pitstop.png", 
      "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/2_skidsp2000_1_pitstop_rev02___1639170037340.usdz"
      ),
      new Itens(
        2, 
        "SKID DE P-2000 COM VAPORIZADOR ELÉTRICO", "./assets/tanques/p2000-vapor-eletrico.jpg", 
        "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de vaporizador elétrico (100 a 250kg/h)",
        "P2000","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/2_SkidsP2000_1_VaporizadorEletrico_Rev02.glb",
        "./assets/qrcode/Skid P-2000Vaporizadoreletrico.png", 
        "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_2_skidsp2000_1_vaporizadoreletrico_rev02___1639170106924.usdz"
        ),
      new Itens(
      3, 
      "SKID DE P-4000 COM VAPORIZADOR ELÉTRICO", "./assets/tanques/SKIDDEP-4000COMVAPORIZADORELÉTRICO.jpg", 
      "Instalação composta com 2 Skids de vasos P-4000 com grupo de regulagem mais 1 Skid de vaporizador elétrico (100 a 250kg/h)",

      "P4000","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/2_SkidsP4000_1_VaporizadorEletrico_Rev02.glb",
      "./assets/qrcode/Skid P-4000Vaporizadoreletrico.png",
      "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_2_skidsp4000_1_vaporizadoreletrico_rev02___1639170175987.usdz"
      ),
      new Itens(
        4, 
        "SKID DE P-2000", "./assets/tanques/Skid2000.jpg", 
        "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
        "P2000","https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/SkidsP2000_Rev06.glb",
        "./assets/qrcode/KID-DE-P-2000.png", 
        "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
        ),
      
      
    ]
  }

  getObjetos(){
    return this.objetos;
  }
  getObjetosId(id: number){
    this.criaObjetos();
    
    for (let i = 0; i < this.objetos.length; i++) {
      if (this.objetos[i].Id == id){
        return this.objetos[i]
      }
      
    }
    return false;
  }
}
