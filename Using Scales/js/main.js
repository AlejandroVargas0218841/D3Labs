var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 500);

	d3.json("data/buildings.json").then((data)=>{
		data.forEach((d)=>{
			d.height = +d.height;
		});

		name_building=data.map((d)=>{return d.name});
		height_max=d3.max(data,(d)=>{return d.height});
		var x = d3.scaleBand()
		.domain(name_building)
		.range([0,400])
		.paddingInner(.3)
		.paddingOuter(.3);
		console.log(data);

		var y = d3.scaleLinear()
		.domain([0,height_max])
		.range([0,400]);
		var colors=d3.scaleOrdinal()
		.domain(name_building)
		.range(d3.schemeSet3);
		console.log(colors);

		var edif=svg.selectAll("rect").data(data);
		edif.enter()
			.append("rect")
			.attr("x",(d)=>{return x(d.name);})
			.attr("y",(d)=>{return 500-y(d.height);})
			.attr("height", (d)=>{return y(d.height);})
			.attr("width",x.bandwidth())
			.attr("fill",(d)=>{return colors(d.name)});

	}).catch((error)=>{
		console.log(error);
	});

