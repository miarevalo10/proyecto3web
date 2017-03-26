import React,{Component} from "react";

export default class ImageForm extends Component{

	addImage(event)
	{
		event.preventDefault();
		var text=this.refs.imageAdd.value.trim();
		Meteor.call('addImagen',text,()=>{
			this.refs.imageAdd.value="";
		});

	}

	render(){
		return(
			<form className="new-image" onSubmit={this.addImage.bind(this)}>
						<input type="text" 
				   ref="imageAdd"
				   placeholder="Url de la imagen"/>
			</form>


			)
	}
}
