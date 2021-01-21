var guitars = localStorage.getItem("guitars_data");
if(localStorage.getItem("guitars_data") === null){
	guitars = [
		{
			name: 'Fender Squier Strat',
			price: 4200
		},
		{
			name: 'Gibson Explorer Custom',
			price: 4200000	
		}
	];
	saveGuitars(guitars);
} else {
	guitars = JSON.parse(guitars);
}

function saveGuitars(guitars){
	localStorage.setItem("guitars_data", JSON.stringify(guitars));
}