class Fibonacci {
	/* 
		-:{ Define variaveis utilizadas }:- [
			(term) -> valor inserido na chamada da class;
		];
	*/
	constructor(term) {
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
		        process.stdout.write(`Not Valid Value`);
		   	} else {
				// Fibonacci sequence, definitions of variables;
                this.listFibonacci = '0 1';
                this.penultimate = 0;
                this.last = 1;
                this.number;

				// loop para gerar a sequencia a partir do termo;
				for(let count = 3; count <= term; count++) {
					// termo subsequente corresponde à soma dos dois anteriores;
					this.number = this.last + this.penultimate;
					// inserir na lista
					this.listFibonacci += ` ${this.number}`;
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
			{ CalculateSum }: Recebe uma String, 
                divide os valores em uma lista separada da String original;
                calcula a soma de todos os valores da lista separada;
                atribui a soma da lista separada a String original;
		];
	*/
	CalculateSum(list) {
        // transforma a string em uma lista;
        let splintInList = list.split(' ');

        // calcula a soma de todos os valores da lista dividida;
		let reduceList = splintInList.reduce((a, b) => {
            return parseInt(a) + parseInt(b);
		});

        // atribui a soma da lista dividida a string original;
        list += ` ${reduceList}`;

        // passa valor para função que vai formatar a String;
		this.FormatValue(list);
	};

    /* 
		-:{ FormatValue }:- [
			(list) -> sequencia Fibonacci + a soma de todos os termos em uma string,
				utiliza de metodos já criados no javascript para reverte e formatar uma string;

			DESCRIPTION
			{ FormatValue }: responsavel por utilizar metodos internos da linguagem para reverter,
				os valores da sequencia Fibonncci de trás pra frente, e recortar para facilitar,
                o ultimo processo de exibição de valores geradors a partir do termo de entrada;
		];
	*/
    FormatValue(list) {
        let splitInList = list.split(' ');

        let reverseList = splitInList.reverse();

        let sliceList = reverseList.slice(0, 4);

        this.DisplayValue(sliceList);
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


// termo de entrada;
new Fibonacci(10);