import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ImageForm from './ImageForm';
import Buscador from './Buscador';
import ImagePreview from './ImagePreview';
Imagenes= new Mongo.Collection("imagenes");

export default class ImagenesWrapper extends TrackerReact(Component){


	constructor() {
		super();
		this.state=
		{
			filters:{},
			count:20,
			query:"",
			subscription:{
				imagenes:Meteor.subscribe("allImages",{},{sort:{votos:-1},limit: 20})
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.imagenes.stop();
	}

	imagenes()
	{
		return Imagenes.find({},{sort: {votos:-1}}).fetch();
	}

	addSearch(event)
	{
		event.preventDefault();
		var bus=this.refs.filtroImagenes.value.trim();
		var cant=parseInt(this.refs.numeroImagenes.value);
		this.setState({count:cant})
	    this.setState({query:bus});
	    this.state.subscription.imagenes.stop();
	    this.setState({subscription:{
	    		imagenes:Meteor.subscribe("allImages",bus,{sort:{votos:-1},limit: cant})
	    	}});

	
	}


	render()
	{

		return(
		<div>
		<h1> Mis imágenes</h1>
		
			<form className="Buscador" id="FormBuscar"onSubmit={this.addSearch.bind(this)}>
			<input type="text" 
				   ref="filtroImagenes"
				   placeholder="Palabra clave a buscar"/>
			<input type="number" 
				   ref="numeroImagenes"
				   placeholder="Número de imágenes a mostrar"
				   default="10"
				   min="1" 
				   max="100"/>
			<button type="submit"  value="Submit">Buscar</button>
			</form>

		{this.imagenes().map((imagen)=>{
			return <ImagePreview key={imagen._id} imagen={imagen}  />})}
		</div>
		

			)
		
	}
}

