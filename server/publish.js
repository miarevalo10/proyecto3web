Imagenes= new Mongo.Collection("imagenes");
Likes= new Mongo.Collection("likes");
DisLikes=new Mongo.Collection("disLikes");



Meteor.publish("allImages",function(filters,options){
		console.log("Filtros");
		console.log(filters);
		console.log("Opciones");
		console.log(options);
		var title = {};
		var snippet = {};
	    snippet['snippet'] = new RegExp('.*' + filters);
	    title['title'] = new RegExp('.*' + filters);
	    var filtro = { '$or': [snippet, title] };
	return Imagenes.find(filtro,options);
});

