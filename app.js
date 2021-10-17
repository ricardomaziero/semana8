var Livro = /** @class */ (function () {
    function Livro(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
    Livro.prototype.verificar = function () {
        return ("O livro " + this.nome + " tem " + this.quantidade + " unidades");
    };
    Livro.prototype.avisoQtd = function () {
        if (this.quantidade == 2) {
            alert("Livro atingiu a quantidade mínima");
            console.log(this.nome + " agora tem " + this.quantidade + " unidades");
        }
    };
    Livro.prototype.venderLivro = function () {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log("Livro vendido, quantidade em estoque: " + this.quantidade);
        }
        else {
            alert("Sem quantidade em estoque");
        }
    };
    Livro.prototype.comprarLivro = function () {
        if (this.quantidade == 10) {
            alert("Este livro chegou na quantidade máxima");
        }
        else {
            this.quantidade++;
            console.log("Livro comprado, quantidade atual: " + this.quantidade);
        }
    };
    return Livro;
}());
var livro1 = new Livro("Primeiro Livro", 0);
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
