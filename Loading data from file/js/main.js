var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);
	

d3.json("data/ages.json").then((data)=> {
	data.forEach((d) => {

		d.age = +d.age;
		
	});
	console.log(data);

		var circles=svg.selectAll("circles").data(data);
	circles.enter()
		.append("circles")
			.attr("cx",(d,i)=>{return (i*50)+20;})
			.attr("cy",50)
			.attr("r", (d)=>{return d.age;})
			.attr("fill",(d)=>{if(d.age>10){return "orange";} else{return "blue";}});
	}).catch((error)=>{
		console.log(error);
});

