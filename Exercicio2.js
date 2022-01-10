//exercicio laços de repetição em mensagens na tela (aparecendo todos juntos)
var inicio = 2;
var fim = 10;
var todosPares = "";

	while (inicio <= fim){
		todosPares = todosPares + inicio + ", ";
		inicio = inicio + 2;
	}
	alert ("A soma dos parês até 10 é: " + todosPares);
