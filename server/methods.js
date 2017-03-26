Meteor.methods({

	addImagen(url,snippet,title)
	{
	if(!Meteor.userId())
		{
			throw new Meteor.Error('not-authenticated')
		}
			Imagenes.insert({
			url:url,
			title:title,
			snippet:snippet,
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