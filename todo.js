var container = document.querySelector('.container');
var value1 = document.querySelector('.input');
var add1 = document.querySelector('.add');

class item{
	constructor(name){
		this.create(name);
	}

	create(name){
		var l1 = document.createElement('div');
		l1.classList.add('item');
		var input = document.createElement('input');
		input.type = "text";
		input.disabled = true;
		input.value = name;
		input.classList.add('item_input');

		var strike = document.createElement('button');
		strike.classList.add('strike');
		strike.innerHTML = '<i class="fas fa-check-square"></i>'
		strike.onclick = function () {
			if (!input.classList.contains('strike_text')){
				input.classList.add('strike_text');
				strike.classList.remove('strike');
				strike.classList.add('strike_active');
			}else{
				input.classList.remove('strike_text');
				strike.classList.remove('strike_active');
				strike.classList.add('strike');
			}
			
		};

		var remove = document.createElement('button');
		remove.classList.add('remove');
		remove.innerHTML = '<i class="fas fa-trash"></i>';
		remove.onclick = function () {
			container.removeChild(this.parentElement);
		};
		container.appendChild(l1);

		l1.appendChild(input);
		l1.appendChild(strike);
		l1.appendChild(remove);
	}
	remove(name){
		container.removeChild(name);
	}
}

add1.addEventListener('click', check);
window.addEventListener('keydown', (e)=>{
	if(e.which == 13){
		check();
	}
})

function check(){
	if(value1.value != ""){
		new item(value1.value);
		value1.value = "";
	}
}

function removeAll(){
	document.querySelector('.container').innerHTML="";
}