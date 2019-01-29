$(function () {
	
	$.getJSON(
		"https://api.myjson.com/bins/10lp8c",
		
		function(data){
			console.log(data)
			
			let t = Handlebars.compile('<option value="{{ Territory }}">{{ Territory }}</option>');
			data.forEach(function (el) {
				$("#selezione").append(t(el));
			})

			$("#selezione").change(function () {
				let paeseSel = document.getElementById('selezione').value;
				let labels = []; 	
				let test = [];		
				console.log(paeseSel)
				for (let i = 0; i < data.length; i++) {   	
					if (paeseSel == data[i].Territory) {
						labels.push(paeseSel);  	
						test.push(data[i].Value); 	
						console.log(data[i].Value)
						
					}
				} 
				
			})		
		})
});
