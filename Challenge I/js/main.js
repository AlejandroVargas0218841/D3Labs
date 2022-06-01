var svg = d3.select("#chart-area").append("svg")
	.attr("width", 1300)
	.attr("height", 1300);
max_height=0;

d3.json("data/buildings.json").then((data)=>{
	data.forEach((d) => {
		d.height = +d.height;
	
		if(d.height>max_height){
			max_height = d.height
		}

		
	});
	console.log(data);
	var edif=svg.selectAll("rect").data(data);
	edif.enter()
	.append("rect")
	.attr("X", (d,i)=>{return(i*50)+20;})
	.attr("Y", (d)=>{return max_height-d.height;})
	.attr("height", (d)=>{returnd.height;})
	.attr("width",45)
	.attr("fill","red");


}).catch((error)=>{
	console.log(error);

});


