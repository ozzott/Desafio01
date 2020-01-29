const Nome = 'Silvana';
const Sexo = 'F';
const Idade = 48;
const Contribuicao = 23;
const calculo = Contribuicao + Idade;

if (
    (Sexo == 'M' && Contribuicao >= 35 && calculo >= 95) ||
    (Sexo == 'F' && Contribuicao >= 30 && calculo >= 85)
) {
    console.log(`${Nome}, você pode se aposentar!`);
} else {
    console.log(`${Nome}, você ainda não pode se aposentar!`);
}