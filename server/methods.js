Meteor.methods({

	addImagen(imagen)
	{
			Imagenes.insert({
			url:imagen,
			desc:"Una descripción",
			createdAt: new Date(),
			user:Meteor.userId()
		});
	},
	likeImage(image,liked)
	{
		if(!Meteor.userId())
		{
			throw new Meteor.Error('not-authenticated')
		}
		if(liked)
		{
			Imagenes.update(image._id, {$inc: { likes:1}});
			Imagenes.update(image._id, {$inc: { votos:1}});
		
		}
		else
		{
			Imagenes.update(image._id, {$inc: { dislikes:1}});
			Imagenes.update(image._id, {$inc: { votos:-1}});

		}

	}

});