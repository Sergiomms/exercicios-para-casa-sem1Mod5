//Parte A - Aquecimento Arrow Function

//Transforme as funções declarativas abaixo em Arrow Functions
const upperName = (name) => {
    console.log(name.toUpperCase())
    return name.toUpperCase();
};

const myFunction = (p1, p2) => {
    console.log(p1 * p2)
    return p1 * p2;
}

const toCelsius = (fahrenheit) => {
    console.log((5 / 9) * (fahrenheit - 32))
    return (5 / 9) * (fahrenheit - 32);
}

upperName('sergio')
myFunction(2, 3)
toCelsius(100)

//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
}

function handleMouseMove(event) {
    const { clientX, clientY } = event
    console.log(clientX, clientY)
}

// OU

function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY)
}


//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };

const { first } = obj
console.log(first)

//A partir do objeto abaixo, instancie uma variavel que receba ​nome​ e outra para colors
company = {
    nome: 'ACME Corp',
    address: 'Nowhere st',
    products: {
        shirts: {
            colors: ['red', 'green', 'blue'],
        },
        socks: {
            colors: ['cyan', 'magenta', 'yellow'],
        },
    },
};

const { nome } = company
const { colors } = company.products.shirts
console.log(nome, colors)


//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

  const clone = {...clothes}
  console.log(clone)

// Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ 
// colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ants, shirts ​e​ socks

const clothes = {
        pants: { colors: ['black', 'blue'] },
        shirts: { colors: ['white', 'red'] },
        socks: { colors: ['beige', 'gray'] },
      };

      const clone2 = {...clothes, shoes:{colors: ['yellow', 'purple']}}
      console.log(clone2)



//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
let numbers = [4, 9, 16, 25];
let raiz = numbers.map(Math.sqrt)
console.log(raiz)

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
let numbers = [65, 44, 12, 4];
let mult = numbers.map((num) =>{
    return num * 10
})
console.log(mult)


//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
let ages = [32, 33, 16, 40];
let resposta = ages.filter((valor) =>{
    return valor >= 18
})
console.log(resposta)

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];

  let resposta2 = data.filter((obj) =>{
      if( obj.type === 'dog'){
          return obj.name
        }
    })

  console.log(resposta2) //Não consegui descobrir como retornar só o nome :c


//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

let resposta3 = resposta2.reduce((total, obj) =>{
    return (total + obj.age)},0)

    console.log(resposta3)

//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
let getShirtsColorsAmount = (company) => {
    const { colors } = company.products.shirts
    console.log(colors.length)
    return colors.length;
};

getShirtsColorsAmount(company)


//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instanciar uma variável que tenha apenas os dados de roupas que não são 
//calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

let {shirts, socks} = clothes
let dados = [...shirts.colors,...socks.colors]

console.log(dados)

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
let persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
  ];

let novaResposta = persons.map((obj) =>{
    return `${obj.firstname} ${obj.lastname}`
})

console.log(novaResposta)

