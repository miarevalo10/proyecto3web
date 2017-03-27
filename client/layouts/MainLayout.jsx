import React from 'react';
import AccountsUI from '../AccountsUI';
import Buscador from '../../imports/imagenes/ImagenesWrapper';

export const MainLayout=({content})=>(
	<div className="main-layout">
  <div>
	<header>
		<br />
		<nav className="menu">
			<a href="./" className="btn btn-primary"> Home </a>
			<a href="./upload" className="btn btn-primary" role="button">Subir Imagen </a>
			<a href="./mine" className="btn btn-primary" role="button">Mi Imagenes </a>
			<AccountsUI />
		</nav>
		<br />
	</header>
	<div className="content">
	<main>
	{content}
	</main>
	</div>
	</div>
	</div>
	)
