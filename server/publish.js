Imagenes= new Mongo.Collection("imagenes");
Likes= new Mongo.Collection("likes");
DisLikes=new Mongo.Collection("disLikes");



Meteor.publish("allImages",function(filters,options){
		console.log("Filtros");
		console.log(filters);
		console.log("Opciones");
		console.log(options);

	return Imagenes.find(filters,options);
});

Meteor.publish("myImages",function(bus,options){

		var title = {};
		var snippet = {};
	    snippet['snippet'] = new RegExp('.*' + bus);
	    title['title'] = new RegExp('.*' + bus);
	    var filtro = { user:this.userId,'$or': [snippet, title] };
	return Imagenes.find(filtro,options);

})

