enum Profissoes {Padeiro, Atriz}

interface Pessoa {nome: string, idade: number, profissao: Profissoes}

let pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz

let pessoa2 = {} as Pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissoes.Padeiro;

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
}