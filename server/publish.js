Imagenes= new Mongo.Collection("imagenes");
Likes= new Mongo.Collection("likes");
DisLikes=new Mongo.Collection("disLikes");



Meteor.publish("allImages",function(bus,options){
		console.log("Filtros");
		console.log(bus);
		console.log("Opciones");
		console.log(options);
		var title = {};
		var snippet = {};
	    snippet['snippet'] = new RegExp('.*' + bus);
	    title['title'] = new RegExp('.*' + bus);
	    var filtro = { '$or': [snippet, title] };

	return Imagenes.find(filtro,options);
});

Meteor.publish("myImages",function(bus,options){

		var title = {};
		var snippet = {};
	    snippet['snippet'] = new RegExp('.*' + bus);
	    title['title'] = new RegExp('.*' + bus);
	    var filtro = { user:this.userId,'$or': [snippet, title] };
	return Imagenes.find(filtro,options);

})

