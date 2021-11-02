const questions = [
	{
		test_id: 1,
		text: 'O café quente é então adicionado na xícara e, passado um tempo, gotículas começam a pingar sobre a bebida, simulando uma chuva doce e reconfortante. A adição de café quente inicia o processo descrito, pois',
		subject: 'Química',
		topic: 'Matéria: propriedades gerais, transformações, estados sólido, líquido e gasoso.'
	},
	{
		test_id: 1,
		text: 'Equipamentos domésticos chamados de vaporizadores para roupa utilizam o vapor de água gerado por um sistema de resistências elétricas a partir de água líquida. Um equipamento com potência nominal de $1.600 W$ foi utilizado para passar roupas por 20 minutos, consumindo $540 mL$ de água. Em relação ao gasto total de energia do equipamento, o gasto de energia utilizado apenas para vaporizar a água, após ela já ter atingido a temperatura de ebulição, equivale a, aproximadamente,$\\\\newline$Note e adote:$\\\\newline$Entalpia de vaporização da água a $100 °C = 40 kJ/mol$;$\\\\newline$Massa molar da água = $18 g/mol$;$\\\\newline$Densidade da água = $1 g/mL$.',
		subject: 'Química',
		topic: 'Termodinâmica'
	},
	{
		test_id: 1,
		text: 'Com base nas informações do texto e em seus conhecimentos, é correto afirmar que',
		subject: 'Química',
		topic: 'Tabela Periódica. Propriedades periódicas.'
	},
	{
		test_id: 1,
		text: 'Ao se preparar molho de tomate (considere apenas a fervura de tomate batido com água e azeite), é possível observar que a fração aquosa (fase inferior) fica vermelha logo no início e a fração oleosa (fase superior), inicialmente com a cor característica do azeite, começa a ficar avermelhada conforme o preparo do molho. Por outro lado, ao se preparar uma sopa de beterraba (considere apenas a fervura de beterraba batida com água e azeite), a fração aquosa (fase inferior) fica com a cor rosada e a fração oleosa (fase superior) permanece com sua coloração típica durante todo o processo, não tendo sua cor alterada.$\\\\newline$Considerando as informações apresentadas no texto e no quadro, a principal razão para a diferença de coloração descrita é que a fração oleosa',
		subject: 'Química',
		topic: 'Geometria molecular. Polaridade. Forças intermoleculares. '
	},
	{
		test_id: 1,
		text: 'Numa determinada condição experimental e com o catalisador adequado, ocorre uma reação, conforme representada no gráfico, que relaciona porcentagem do composto pelo tempo de reação.$\\\\newline$Uma representação adequada para esse processo é:',
		subject: 'Química',
		topic: 'Cinética química'
	},
	{
		test_id: 1,
		text: 'Os chamados “remédios homeopáticos” são produzidos seguindo a farmacotécnica homeopática, que se baseia em diluições sequenciais de determinados compostos naturais. A dosagem utilizada desses produtos é da ordem de poucos $mL$. Uma das técnicas de diluição homeopática é chamada de diluição centesimal $\\\\ce{(CH)}$, ou seja, uma parte da solução é diluída em 99 partes de solvente e a solução resultante é homogeneizada (ver esquema).$\newline$Alguns desses produtos homeopáticos são produzidos com até 200 diluições centesimais sequenciais $\\\\ce{(200CH)}$.$\\\\newline$Considerando uma solução de partida de $\\\\ce{100 mL}$ com concentração $\\\\ce{1 mol/L}$ de princípio ativo, a partir de qual diluição centesimal a solução passa a não ter, em média, nem mesmo uma molécula do princípio ativo?',
		subject: 'Química',
		topic: 'Concentração de soluções. Diluição e mistura de soluções. Titulação.'
	},
	{
		test_id: 1,
		text: 'O gás hélio disponível comercialmente pode ser gerado pelo decaimento radioativo, sobretudo do urânio, conforme esquematizado pela série de decaimento. Desde a formação da Terra, há 4,5 bilhões de anos, apenas metade do $\\\\ce{238U}$ decaiu para a formação de $\\\\ce{He}$.$\\\\newline$Com base nessas informações e em seus conhecimentos, é correto afirmar:',
		subject: 'Química',
		topic: 'Radioatividade e química nuclear'
	},
	{
		test_id: 1,
		text: 'Os movimentos das moléculas antes e depois de uma reação química obedecem aos princípios físicos de colisões. Para tanto, cada átomo é representado como um corpo pontual com uma certa massa, ocupando uma posição no espaço e com uma determinada velocidade (representada na forma vetorial). Costumeiramente, os corpos pontuais são representados como esferas com diâmetros proporcionais à massa atômica. As colisões ocorrem conservando a quantidade de movimento.$\\\\newline$Considerando um referencial no qual as moléculas neutras encontram‐se paradas antes e após a colisão, a alternativa que melhor representa o arranjo de íons e moléculas instantes antes e instantes depois de uma colisão que leva à reação $\\\\newline \\\\ce{F- + H3CCl -> CH3F + Cl-} \\\\newline$(Sendo o lado esquerdo antes da colisão íon-neutron e o direito após a colisão neutron-íon)',
		subject: 'Química',
		topic: 'Cinética química'
	},
	{
		test_id: 1,
		text: 'Quando o nosso corpo é lesionado por uma pancada, logo se cria um hematoma que, ao longo do tempo, muda de cor. Inicialmente, o hematoma torna‐se avermelhado pelo acúmulo de hemoglobina. Em seguida, surge uma coloração azulada, decorrente da perda do $\\\\ce{O2}$ ligado ao $\\\\ce{Fe}$ do grupo heme. Essa coloração torna‐se, então, esverdeada (biliverdina) e, após isso, surge um tom amarelado na pele (bilirrubina). Essa sequência de cores ocorre pela transformação do grupo heme da hemoglobina, como representado a seguir:$\\\\newline$Com base nas informações e nas representações, é correto afirmar:',
		subject: 'Química',
		topic: 'Reações orgânicas'
	},
	{
		test_id: 1,
		text: 'Em supermercados, é comum encontrar alimentos chamados de liofilizados, como frutas, legumes e carnes. Alimentos liofilizados continuam próprios para consumo após muito tempo, mesmo sem refrigeração. O termo “liofilizado”, nesses alimentos, refere‐se ao processo de congelamento e posterior desidratação por sublimação da água. Para que a sublimação da água ocorra, é necessária uma combinação de condições, como mostra o gráfico de pressão por temperatura, em que as linhas representam transições de fases.$\\\\newline$Apesar de ser um processo que requer, industrialmente, uso de certa tecnologia, existem evidências de que os povos pré-colombianos que viviam nas regiões mais altas dos Andes conseguiam liofilizar alimentos, possibilitando estocá‐los por mais tempo. Assinale a alternativa que explica como ocorria o processo de liofilização natural:',
		subject: 'Química',
		topic: 'Matéria: propriedades gerais, transformações, estados sólido, líquido e gasoso.'
	},
	{
		test_id: 1,
		text: 'Para exemplificar probabilidade, um grupo de estudantes fez uma atividade envolvendo química, conforme o procedimento descrito.$\\\\newline$Cada estudante recebeu um recipiente contendo $800 mL$ de água destilada com algumas gotas do indicador de $pH$ alaranjado de metila e soluções de $\\\\ce{HCl}$ e $\\\\ce{NaOH}$ em diversas concentrações.$\\\\newline$Cada estudante deveria jogar apenas uma vez dois dados, um amarelo e um vermelho, ambos contendo os números de 1 a 6.$\\\\newline$• Ao jogar o dado vermelho, o estudante deveria adicionar ao recipiente $100 mL$ de solução do ácido clorídrico na concentração $\\\\ce{10 −n mol/L}$, sendo $n$ o número marcado no dado (por exemplo, se saísse o número 1 no dado, a solução seria de $\\\\ce{10 −1 mol/L}$; se saísse 6, a solução seria de $\\\\ce{10 −6 mol/L}$).$\\\\newline$• Ao jogar o dado amarelo, o estudante deveria executar o mesmo procedimento, mas substituindo o ácido por $\\\\ce{NaOH}$, totalizando assim $1,0 L$ de solução.$\\\\newline$• O estudante deveria observar a cor da solução ao final do experimento.$\\\\newline$A professora mostrou a tabela com alguns valores de $pH$ resultantes conforme os números tirados nos dados. Ela pediu, então, aos estudantes que utilizassem seus conhecimentos e a tabela para prever em quais combinações de dados a cor final do indicador seria vermelha.$\\\\newline$A probabilidade de, após realizar o procedimento descrito, a solução final preparada por um estudante ser vermelha é de:',
		subject: 'Química',
		topic: 'Funções Inorgânicas (ácidos, bases, sais, óxidos).'
	}
];

module.exports = questions.map((question) => Object.values(question));
