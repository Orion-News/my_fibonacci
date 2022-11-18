class Fibonacci {
	/* 
		-:{ Define variaveis utilizadas }:- [
			(term) -> valor inserido na chamada da class;
		];
	*/
	constructor(term) {
		this.penultimate = 0; 
		this.last = 1;
		this.number;
		this.listFibonacci = [];
		this.Init(term);
	};

	/* 
		-:{ Init }:- [
			função que cria uma sequencia de fibonacci iniciando no 0;
		];	
	*/
	Init(term) {
		// valida o valor inserido no input 'termo' para ver se existe sequencia;
		if(term <= 2) {
			this.number = term -1;
		   	} else {
				// Fibonacci sequence;
				// inserir 0;
				this.listFibonacci.push(this.penultimate);
				// inserir 1;
				this.listFibonacci.push(this.last);
				// loop para gerar a sequencia a partir do termo;
				for(let count = 3; count <= term; count++) {
					// termo subsequente corresponde à soma dos dois anteriores;
					this.number = this.last + this.penultimate;
					// inserir na lista
					this.listFibonacci.push(this.number);
					// definir penultimo número como igual ao ultimo;
					this.penultimate = this.last;
					// definir ultimo igual ao correspondente a soma dos anteriores;
					this.last = this.number;
				};
				// inicia o calculo de todos os valores inseridos na lista;
			this.CalculateSum(this.listFibonacci);
		};
	};

	/* 
		-:{ CalculateSum }:- [
			(List) -> valor na memoria sem ter contato com a lista original;
			
			DESCRIPTION
			{ CalculateSum }: responsavel por somar todos os valores com uma referencia da lista original,
				adiciona a soma de todos os valores na list(referenciada) inverte a lista do menor para o maior,
				recorta os 4 primeiros valores dessa lista e envia para a DisplayValue responsavel,
				por exibir os valores formatados;
		];
	*/
	CalculateSum(list) {
		// calcula a soma de todos os valores inseridos na variável (this.listFibonacci);
		let reduceList = list.reduce((a, b) => {
			return a + b
		});
		// inserir a soma de todos os valores na lista;
		list.push(reduceList);
		// criando sequencia inversa, do maior para o menor;
		let reverseList = list.reverse();
		// cortar list nos 4 primeiros números da sequencia invertida;
		let listSlice = reverseList.slice(0, 4);
		// chamar função para exibir valores em uma string com espaço;
		this.DisplayValue(listSlice);
	};

	/* 
		-:{ DisplayValue }:- [
			(ListSlice) -> valor recortado da lista na memoria, para ser exibido,
				criado um loop para remover os valores do array transformando em uma string com espaço;

			DESCRIPTION
			{ DisplayValue }: responsavel por gerar uma string com espaço para ser exibida no terminal,
				com os 4 valores gerado por um determinado termo de entrada;
		];
	*/
	DisplayValue(listSlice) {
		// criando uma variável do tipo string para receber os pedaços da fatia;
		let outputResult = '';
		// loop para separar os pedaços por espaço e inserindo no resultado de saida;
		for (let sliceCount = 0; sliceCount < listSlice.length; sliceCount++) {
			outputResult += `${listSlice[sliceCount]} `;
		};
		// exibindo o resultado de saida;
		process.stdout.write(outputResult);
	};
};


// chamada da class: hmmmm é mesmo ?
// se o valor for 2 não vai exibir nada;
new Fibonacci(10);
