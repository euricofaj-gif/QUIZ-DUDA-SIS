
import { SubjectData } from './types';

export const QUIZ_DATA: SubjectData[] = [
  {
    name: 'Língua Portuguesa e Literatura',
    questions: [
      {
        id: 1,
        text: 'Na frase "Ele comprou um carro novo.", o adjetivo "novo" exerce a função sintática de:',
        options: [
          { text: 'Sujeito', isCorrect: false },
          { text: 'Objeto direto', isCorrect: false },
          { text: 'Adjunto adnominal', isCorrect: true },
          { text: 'Predicativo do sujeito', isCorrect: false },
          { text: 'Complemento nominal', isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'Qual das seguintes obras é representativa do Romantismo no Brasil?',
        options: [
          { text: 'Memórias Póstumas de Brás Cubas', isCorrect: false },
          { text: 'Iracema', isCorrect: true },
          { text: 'Vidas Secas', isCorrect: false },
          { text: 'O Cortiço', isCorrect: false },
          { text: 'Sagarana', isCorrect: false },
        ],
      },
    ],
  },
  {
    name: 'Matemática',
    questions: [
      {
        id: 3,
        text: 'Se o logaritmo de x na base 2 é 5 (log₂(x) = 5), qual o valor de x?',
        options: [
          { text: '10', isCorrect: false },
          { text: '25', isCorrect: false },
          { text: '32', isCorrect: true },
          { text: '64', isCorrect: false },
          { text: '128', isCorrect: false },
        ],
      },
      {
        id: 4,
        text: 'Uma loja oferece um desconto de 20% em um produto que custa R$ 150,00. Qual o preço final do produto?',
        options: [
          { text: 'R$ 100,00', isCorrect: false },
          { text: 'R$ 120,00', isCorrect: true },
          { text: 'R$ 125,00', isCorrect: false },
          { text: 'R$ 130,00', isCorrect: false },
          { text: 'R$ 140,00', isCorrect: false },
        ],
      },
    ],
  },
  {
    name: 'História',
    questions: [
      {
        id: 5,
        text: 'Qual evento marcou o início da Idade Moderna?',
        options: [
          { text: 'A Revolução Francesa', isCorrect: false },
          { text: 'A Queda do Império Romano do Ocidente', isCorrect: false },
          { text: 'A Tomada de Constantinopla pelos turcos-otomanos', isCorrect: true },
          { text: 'O início da Primeira Guerra Mundial', isCorrect: false },
          { text: 'A Reforma Protestante', isCorrect: false },
        ],
      },
    ],
  },
  {
    name: 'Geografia',
    questions: [
      {
        id: 6,
        text: 'O bioma brasileiro caracterizado por uma vegetação de árvores e arbustos tortuosos, adaptados ao clima com duas estações bem definidas (uma seca e outra chuvosa) é:',
        options: [
          { text: 'Amazônia', isCorrect: false },
          { text: 'Mata Atlântica', isCorrect: false },
          { text: 'Pampa', isCorrect: false },
          { text: 'Caatinga', isCorrect: false },
          { text: 'Cerrado', isCorrect: true },
        ],
      },
    ],
  },
  {
    name: 'Biologia',
    questions: [
        {
            id: 7,
            text: 'Qual organela celular é responsável pela respiração celular e produção de ATP?',
            options: [
                { text: 'Complexo de Golgi', isCorrect: false },
                { text: 'Ribossomo', isCorrect: false },
                { text: 'Lisossomo', isCorrect: false },
                { text: 'Mitocôndria', isCorrect: true },
                { text: 'Retículo Endoplasmático', isCorrect: false },
            ],
        },
    ]
  },
  {
    name: 'Química',
    questions: [
        {
            id: 8,
            text: 'Qual é o número de oxidação (Nox) do enxofre (S) no íon sulfato (SO₄²⁻)?',
            options: [
                { text: '+2', isCorrect: false },
                { text: '+4', isCorrect: false },
                { text: '+6', isCorrect: true },
                { text: '-2', isCorrect: false },
                { text: '0', isCorrect: false },
            ],
        },
    ]
  },
    {
    name: 'Física',
    questions: [
        {
            id: 9,
            text: 'De acordo com a Segunda Lei de Newton, a força resultante que atua sobre um corpo é igual ao produto de sua massa pela sua:',
            options: [
                { text: 'Velocidade', isCorrect: false },
                { text: 'Aceleração', isCorrect: true },
                { text: 'Energia cinética', isCorrect: false },
                { text: 'Densidade', isCorrect: false },
                { text: 'Posição', isCorrect: false },
            ],
        },
    ]
  }
];
