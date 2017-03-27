'use strict';
import React, { Component } from 'react';

export default class ImagePreview extends Component {

	votarPositivo(events)
	{
		Meteor.call('likeImage',this.props.imagen,true);
	}
	votarNegativo(events)
	{
		Meteor.call('likeImage',this.props.imagen,false);
	}

  render() {
    return (
        <div className="imagen">
        < a href={this.props.imagen.url} target='_blank' >
          <img className="imageResult"  src={`${this.props.imagen.url}`}
          alt={`${this.props.imagen.title}`}
          />
        < /a>
				<div className="botonesImagen">
		<button className="social-like btn" title="Like" onClick={this.votarPositivo.bind(this)}>
		     <span className="count" >{this.props.imagen.likes}</span>
				 <span className="like"><i className="glyphicon glyphicon-thumbs-up">Like</i></span>
		 </button>

		 <button className="social-dislike btn" title="Dislike" onClick={this.votarNegativo.bind(this)}>
		     <span className="dislike" >{this.props.imagen.dislikes}</span>
		     <span className="like"><i className="glyphicon glyphicon-thumbs-down"></i></span>
		</button>
		</div>
        </div>

    );
  }
}
