const empresa = {
    Nome: 'Rocketseat',
    Cor: 'Roxo',
    Foco: 'Programação',
    Endereco: {
        Rua: 'Rua Guilherme Gembala',
        Numero: 260
    },
}

end = Object.values(empresa.Endereco);

console.log(`A empresa ${empresa.Nome} está localizada em ${end}`)