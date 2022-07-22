"use strict";
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Padeiro"] = 0] = "Padeiro";
    Profissoes[Profissoes["Atriz"] = 1] = "Atriz";
})(Profissoes || (Profissoes = {}));
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz;
let pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissoes.Padeiro;
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
};
