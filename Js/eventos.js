window.onload = function(){
	const $fondo = document.getElementById('cuerpo');
	const $obj = document.getElementById('objeto');
	const $titulo = document.getElementById('titulo');
	const $c1 = document.getElementById('c1');
	const $c2 = document.getElementById('c2');
	const $c3 = document.getElementById('c3');
	const $c4 = document.getElementById('c4');
	const $c5 = document.getElementById('c5');

	window.addEventListener('scroll', function(e){
		var barra = window.scrollY;
		var position = barra * 0.20;

		$obj.style.transform = 'translateY('+ barra +'px)';
		$titulo.style.opacity = barra;
		$fondo.style.backgroundPosition = '0 '+'-'+ position + 'px';
			if(position > '72.2'){
				$titulo.style.opacity = '0';
				$c1.style.opacity = '1';
			}

			if(position > '80' || position < '72.2'){
				$c1.style.opacity = '0';
			}

			if(position > '102'){
				$c2.style.opacity = '1';
			}

			if(position > '135' || position < '102'){
				$c2.style.opacity = '0';
			}

			if(position > '152.5'){
				$c3.style.opacity = '1';
			}
			if(position < '146' || position > '202'){
				$c3.style.opacity = '0';
			}

			if(position > '202'){
				$c4.style.opacity = '1';
			}

			if(position < '202' || position > '230'){
				$c4.style.opacity = '0';
			}

			if(position > '252'){
				$c5.style.opacity = '1';
			}

			if(position < '252' || position > '300'){
				$c5.style.opacity = '0';
			}
			
			

		console.log(position);
	})
}
