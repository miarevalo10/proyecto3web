import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ImagesPage from './ImagesPage';
Imagenes= new Mongo.Collection("imagenes");

export default ListPageContainer = createContainer(({ query,filter }) => {
  console.log(query)
  const imagesHandle = Meteor.subscribe('allImages', query,filter);
  imagenes=Imagenes.find({},{sort: {votos:-1}}).fetch()

  return {
 	imagenes,
  };
}, ImagesPage);