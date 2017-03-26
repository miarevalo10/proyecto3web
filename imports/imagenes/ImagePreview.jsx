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
		<button className="social-like" onClick={this.votarPositivo.bind(this)}>
		     <span className="like"><i className="glyphicon glyphicon-thumbs-up"></i></span>
		     <span className="count" >{this.props.imagen.likes}</span>
		 </button>
		    
		 <button className="social-dislike" onClick={this.votarNegativo.bind(this)}>
		     <span className="dislike" >{this.props.imagen.dislikes}</span>
		     <span className="like"><i className="glyphicon glyphicon-thumbs-down"></i></span>
		</button>
        </div>
      
    );
  }
}
