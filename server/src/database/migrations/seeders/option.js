const options = [
	{
		question_id: 1,
		text: 'a temperatura do café é suficiente para liquefazer a sacarose do algodão‐doce, fazendo com que este goteje na forma de sacarose líquida.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 1,
		text: 'o vapor de água que sai do café quente irá condensar na superfície do algodão‐doce, gotejando na forma de água pura.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 1,
		text: 'a sacarose que evapora do café quente condensa na superfície do algodão‐doce e goteja na forma de uma solução de sacarose em água.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 1,
		text: 'o vapor de água encontra o algodão‐doce e solubiliza a sacarose, que goteja na forma de uma solução de sacarose em água.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 1,
		text: 'o vapor de água encontra o algodão‐doce e vaporiza a sacarose, que goteja na forma de uma solução de sacarose em água.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 2,
		text: '0,04%.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 2,
		text: '0,062%.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 2,
		text: '4,6%.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 2,
		text: '40%.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 2,
		text: '62%.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 3,
		text: 'o $\\\\ce{Cs}$ é um elemento químico radioativo e, devido a essa característica química, a molécula de $\\\\ce{NaCs}$ não se formaria sem esse modo inovador $\\\\ce{(L.2)}$, que estabiliza o decaimento.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 3,
		text: 'o raio atômico do $\\\\ce{Na}$ é maior que o do $\\\\ce{Cs}$, portanto, a sua energia de ionização também é maior. O esbarrão $\\\\ce{L.3}$ entre os átomos retira um elétron do $\\\\ce{Na}$, permitindo a ligação.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 3,
		text: 'o terceiro laser $\\\\ce{L.8}$ usado no experimento serviu para retirar um nêutron do $\\\\ce{Cs}$, tornando‐o um cátion e possibilitando a reação com o $\\\\ce{Na}$.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 3,
		text: 'na natureza, com esses elementos se esbarrando por acaso $\\\\ce{(L.10‐11)}$, a tendência seria formar $\\\\ce{CsNa}$, e não $\\\\ce{NaCs}$, justificando o caráter inovador do experimento.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 3,
		text: 'o $\\\\ce{Cs}$ e o $\\\\ce{Na}$ não formariam uma molécula espontaneamente $\\\\ce{(L.11-12)}$, uma vez que ambos têm grande tendência a formarem cátions e ligações iônicas.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 4,
		text: 'fica mais quente do que a aquosa, degradando a betanina; o mesmo não é observado com o licopeno, devido à sua cadeia carbônica longa.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 4,
		text: 'está mais exposta ao ar, que oxida a betanina; o mesmo não é observado com o licopeno, devido à grande quantidade de duplas ligações.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 4,
		text: 'é apolar e a betanina, polar, havendo pouca interação; o mesmo não é observado com o licopeno, que é apolar e irá interagir com o azeite.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 4,
		text: 'é apolar e a aquosa, polar, mantendo‐se separadas; o licopeno age como um surfactante misturando as fases, colorindo a oleosa, enquanto a betanina não.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 4,
		text: 'tem alta viscosidade, facilitando a difusão do licopeno, composto de menor massa molar; o mesmo não é observado para a betanina, com maior massa.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 5,
		text: '$\\\\ce{limoneno\\\\rightleftharpoons p‐cimeno -> \\\\alpha‐terpineno}$',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 5,
		text: '$\\\\ce{limoneno ->[{p-cimeno (catalisador)}] \\\\alpha‐terpineno}$',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 5,
		text: '$\\\\ce{limoneno + p‐cimeno\\\\rightleftharpoons \\\\alpha‐terpineno}$',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 5,
		text: '$\\\\ce{limoneno ->[{\\\\alpha‐terpineno (catalisador)}] p-cimeno}$',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 5,
		text: '$\\\\ce{limoneno -> \\\\alpha‐terpineno -> p‐cimeno}$',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 6,
		text: '12ª diluição $(12CH)$.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 6,
		text: '24ª diluição $(24CH)$.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 6,
		text: '51ª diluição $(51CH)$.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 6,
		text: '99ª diluição $(99CH)$.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 6,
		text: '200ª diluição $(200CH)$.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 7,
		text: 'O decaimento de um átomo de $238U$ produz, ao final da série de decaimento, apenas um átomo de $He$.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 7,
		text: 'O decaimento do $238U$ para $234U$ gera a mesma quantidade de $He$ que o decaimento do $234U$ para $230Th$.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 7,
		text: 'Daqui a 4,5 bilhões de anos, a quantidade de $He$ no planeta Terra será o dobro da atual.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 7,
		text: 'O decaimento do $238U$ para $234U$ gera a mesma quantidade de $He$ que o decaimento do $214Pb$ para $214Po$.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 7,
		text: 'A produção de $He$ ocorre pela sequência de decaimento a partir do $206Pb$.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 8,
		text: null,
		correct_answer: false,
		image_id: 10
	},
	{
		question_id: 8,
		text: null,
		correct_answer: false,
		image_id: 11
	},
	{
		question_id: 8,
		text: null,
		correct_answer: true,
		image_id: 12
	},
	{
		question_id: 8,
		text: null,
		correct_answer: false,
		image_id: 13
	},
	{
		question_id: 8,
		text: null,
		correct_answer: false,
		image_id: 14
	},
	{
		question_id: 9,
		text: 'A conversão da biliverdina em bilirrubina ocorre por meio de uma redução.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 9,
		text: 'A biliverdina, assim como a hemoglobina, é capaz de transportar $O2$ para as células do corpo, pois há oxigênio ligado na molécula.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 9,
		text: 'As três estruturas apresentadas contêm o grupo funcional amida.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 9,
		text: 'A degradação do grupo heme para a formação da biliverdina produz duas cetonas.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 9,
		text: 'O grupo heme, a biliverdina e a bilirrubina são isômeros.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 10,
		text: 'A sublimação da água ocorria devido às baixas temperaturas e à alta pressão atmosférica nas montanhas.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 10,
		text: 'Os alimentos, após congelados naturalmente nos períodos frios, eram levados para a parte mais baixa das montanhas, onde a pressão atmosférica era menor, o que possibilitava a sublimação.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 10,
		text: 'Os alimentos eram expostos ao sol para aumentar a temperatura, e a baixa pressão atmosférica local favorecia a solidificação.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 10,
		text: 'As temperaturas eram baixas o suficiente nos períodos frios para congelar os alimentos, e a baixa pressão atmosférica nas altas montanhas possibilitava a sublimação.',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 10,
		text: 'Os alimentos, após congelados naturalmente, eram prensados para aumentar a pressão, de forma que a sublimação ocorresse.',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 11,
		text: '$\\\\frac{1}{12}$',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 11,
		text: '$\\\\frac{1}{6}$',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 11,
		text: '$\\\\frac{1}{4}$',
		correct_answer: true,
		image_id: null
	},
	{
		question_id: 11,
		text: '$\\\\frac{11}{36}$',
		correct_answer: false,
		image_id: null
	},
	{
		question_id: 11,
		text: '$\\\\frac{5}{12}$',
		correct_answer: false,
		image_id: null
	}
];

module.exports = options.map((option) => Object.values(option));
