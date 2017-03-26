import React,{Component} from "react";
export default class ImageForm extends Component{

	addImage(event)
	{
		event.preventDefault();
		var title=this.refs.imTitle.value.trim();
		var url=this.refs.imgUrl.value.trim();
		var snippet=this.refs.imSnippet.value.trim();
		Meteor.call('addImagen',url,snippet,title,(error,data)=>{
			if(error)
			{
			Bert.alert( 'Por favor inicie sesión para subir imágenes', 'danger', 'fixed-top', 'fa-frown-o' );
			Session.set("Meteor.loginButtons.dropdownVisible", true);
			}
			else
			{
			Bert.alert( 'La imágen se ha subido correctamente', 'success', 'fixed-top', 'fa-check' );

			}

			
		});

	}

	render(){
		return(
			<form className="new-image" onSubmit={this.addImage.bind(this)}>
			<input type="text" 
				   ref="imTitle"
				   required="required"
				   placeholder="Titulo de la imágen"/>
				<input type="text" 
				   ref="imgUrl"
				   required="required"
				   placeholder="Url de la imagen"/>
				<input type="text" 
				   ref="imSnippet"
				   placeholder="Descripción de la imágen"/>
				<button type="submit"  value="Submit">Subir</button>
			</form>
			)
	}
}
