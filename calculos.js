let botaoResolver = document.querySelector('#resolver');

botaoResolver.addEventListener('click', function(){
	let coef_a = document.querySelector('#coeficiente-a').value;

	/* caso nao seja uma eq de seg grau */
	if(coef_a == 0){
		window.alert('Não se trata de uma eq. do segundo grau !!!');
		return;
	}

	let coef_b = document.querySelector('#coeficiente-b').value;
	let coef_c = document.querySelector('#coeficiente-c').value;

	let delta = Math.pow(coef_b, 2)-4*coef_a*coef_c;
	let resDelta = document.querySelector('#resultado-delta');
	resDelta.value = delta;

	let resX1 = document.querySelector('#resultado-x1');
	let resX2 = document.querySelector('#resultado-x2');

	/* calcula raizes */
	if(delta >= 0){
		let x1 = (-coef_b+Math.sqrt(delta))/2*coef_a;
		resX1.value = x1;

		let x2 = (-coef_b-Math.sqrt(delta))/2*coef_a;
		resX2.value = x2;
	}else{
		resX1.value = '';
		resX2.value = '';
	}

	/* definindo qtde raizes */
	let qtdeRaizes = document.querySelector('#qtde-raizes');
	if(delta == 0){
		qtdeRaizes.value = 1;
	}else{
		qtdeRaizes.value = 2;
	}

	/* definindo concavidade */
	let concavidade = document.querySelector('#concavidade');
	if(coef_a > 0){
		concavidade.value = 'cima';
	}else{
		concavidade.value = 'baixo';
	}

	/* calculo coordenadas do vertice */
	let coordVertice = document.querySelector('#coord-vertice');
	let coordVerticeX = -coef_b/2*coef_a;
	let coordVerticeY = -delta/4*coef_a;
	coordVertice.value = '('+coordVerticeX+', '+coordVerticeY+')';

});