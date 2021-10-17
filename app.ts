class Livro {
    nome: string;
    quantidade: number;

    constructor(nome:string, quantidade: number) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    verificar() {
        return ("O livro " + this.nome + " tem " + this.quantidade + " unidades");
    }

    avisoQtd() {
        if(this.quantidade == 2) {
            alert("Livro atingiu a quantidade mínima");
            console.log(this.nome + " agora tem " + this.quantidade + " unidades");
        }
    }

    venderLivro() {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log("Livro vendido, quantidade em estoque: " + this.quantidade)
        }
        else {
            alert("Sem quantidade em estoque");
        }   
    }

    comprarLivro() {
        if (this.quantidade == 10) {
            alert("Este livro chegou na quantidade máxima")
        }
        else {
            this.quantidade++;
            console.log("Livro comprado, quantidade atual: " + this.quantidade);
        }
    }
}

let livro1 = new Livro("Primeiro Livro", 0);

livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.comprarLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();
livro1.venderLivro();