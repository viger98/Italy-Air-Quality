$(function () {
	
	// grafico qualità dell'aria
	// devo passargli i dati di airqualityita.JSON
	$.getJSON(
		"https://api.myjson.com/bins/10lp8c",
		
		function(data){
			console.log(data)
			
			// Compilo la selezione con HANDLEBARS
			let t = Handlebars.compile('<option value="{{ Territory }}">{{ Territory }}</option>');

            data.forEach(function (el) {
                $("#selezione").append(t(el));
            })

			$("#selezione").change(function () {
				let paeseSel = document.getElementById('selezione').value;
				let labels = []; 	// Territory select
				let test = [];		// Value del select
				console.log(paeseSel)
				for (let i = 0; i < data.length; i++) {   	//loop tra gli elemeni dell'array
					if (paeseSel == data[i].Territory) {
						labels.push(paeseSel);  	//aggiungo all'array labels il paese selezionato
						test.push(data[i].Value); 	// aggiungo all'array Value del paese selezionato
						console.log(data[i].Value)
						
					}
				} 
				var ctx = document.getElementById("italyAirQualityChart").getContext("2d"); 	// Grafico doughnut chart.js 
				var myChart = new Chart(ctx, {
					type: 'doughnut',
					data: {
						labels: ["Qualità dell'aria"],  
						datasets: [
							{
								label: "Qualità dell'aria",								
								data: [test, 200 - test],        	// passo al grafico i valori scritti prima
								backgroundColor: ["#3396ff","#B6E4FF"],
								hoverBackgroundColor: ["#4da3ff", "#b3d7ff"],
                        		hoverBorderColor: "rgb(255, 255, 255, 0)",
                        		borderColor: "rgba(255, 255, 255, 0)",
								 
							}
						],
					options: {
						responsive: true,
						maintainAspectRatio: true,

					}},
				});
			})		
		})
});
