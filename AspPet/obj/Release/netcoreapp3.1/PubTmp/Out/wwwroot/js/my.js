let editType = '';
let name = '';
document.addEventListener("DOMContentLoaded", function(event){
var rowText;
var list = document.getElementById('list');
for(var row of guitars){
	var rowText = document.createElement('ion-item');
	rowText.innerHTML = 
	`<ion-label>${row.name}</ion-label>
	<ion-label>${row.price}</ion-label>
	<ion-button class="edit" color="primary" size="medium" rowid="${row.name}">
		<ion-icon name="create"></ion-icon>
	</ion-button>
	<ion-button class="delete" color="danger" size="medium" rowid="${row.name}">
		<ion-icon name="trash"></ion-icon>
	</ion-button>`;
	list.appendChild(rowText);
}

document.querySelector('#main').style.display = "";
document.querySelector('#edit').style.display = "none";

document.querySelectorAll('.edit')
	.forEach(input => input.addEventListener('click', ({target}) =>{
		editType = "edit";
		name = target.getAttribute('rowid');
		let guitar = guitars.find((g) => g.name == name);
		document.getElementById('name').value = guitar.name;
		document.getElementById('price').value = guitar.price;
		document.querySelector('#main').style.display = "none";
		document.querySelector('#edit').style.display = "";
	}));

document.querySelectorAll('.delete')
	.forEach(input => input.addEventListener('click', ({target}) =>{
		name = target.getAttribute('rowid');
		saveGuitars(guitars.filter((g) => g.name !== name));
		location.reload();
	}));

document.querySelector('#save').addEventListener('click', () =>{
		if(editType == "add"){
			guitars.push({
				name: document.getElementById('name').value,
				price: document.getElementById('price').value
			});
		} else {
			let guitar = guitars.find((g) => g.name == name);
			guitar.name = document.getElementById('name').value;
			guitar.price = document.getElementById('price').value;
		}
		saveGuitars(guitars);
		location.reload();
	});

document.querySelector('#add').addEventListener('click', () =>{
		editType = "add";		
		document.getElementById('name').value = "";
		document.getElementById('price').value = "";
		document.querySelector('#main').style.display = "none";
		document.querySelector('#edit').style.display = "";
	});
})






















