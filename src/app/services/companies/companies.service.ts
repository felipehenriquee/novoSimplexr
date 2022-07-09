import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  constructor(private http: HttpClient) { }
  getOne(nickname: string) {
    return this.http.get<any[]>(`${environment.api}/companies/${nickname}`);
    
    
  }

  async changeStatus(idCompra: string, dados: any){
    const result = await this.http.put<any>(`${environment.api}/api/compra/${idCompra}`, dados).toPromise();
    console.log(result)
    return result;
  }
  // getAllAvaliar() {
    
  //   return this.http.get<Compras[]>(`${environment.api}/participante/avaliar`);
    
  // }

  // getById(id: string) {
    
  //   return this.http.get<Compras>(`${environment.api}/participante?id=${id}`);
  // }

  // getProdutoById(id: string) {
    
  //   return this.http.get<Produto[]>(`${environment.api}/produto?id_participante=${id}`);
  // }
}
