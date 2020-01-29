const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${name}, você está acima do peso, seu IMC é de ${imc}`);
} else {
    console.log(`${name}, você não está acima do peso, seu IMC é de ${imc}`);
}