var usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];
for(let i = 0; i < usuarios.length; i++){
    console.log(usuarios[i].nome + ' trabalha com ' + usuarios[i].tecnologias);
}
function checaUsuario(usuario){
    if(usuario.tecnologias.indexOf('CSS') > -1){
        return true;
    }
    return false
}
for(let i = 0; i < usuarios.length; i++){
    if(checaUsuario(usuarios[i])){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }else{
        console.log(`O usuário ${usuarios[i].nome}  não trabalha com CSS`);
    }
}


usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];
function somaNumeros(numeros){
    var soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return soma;
}

function calculaSaldo(receitas, despesas){
    return somaNumeros(receitas) - somaNumeros(despesas);
}
for(let i = 0; i < usuarios.length; i++){
    var saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
    var tipo = saldo >= 0 ? 'POSITIVO' : 'NEGATIVO';
    console.log(`${usuarios[i].nome} possui saldo ${tipo} de ${saldo}`); 
}
