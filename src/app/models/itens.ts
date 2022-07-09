export class Itens {
    Id: number;
    Nome: string;
    Descricao: string ;
    Tipo: string;
    Imagem: string ;
    Modelo: string ;
    Qrcode: string ;
    ModeloI: string ;

    

    constructor(id: number, nome: string, imagem: string, descricao: string, tipo: string, modelo: string, qrcode: string, modeloI: string){
        this.Id = id;
        this.Nome = nome;
        this.Descricao = descricao;
        this.Imagem = imagem;
        this.Tipo = tipo;
        this.Modelo = modelo;
        this.Qrcode = qrcode;
        this.ModeloI = modeloI
    }
}
