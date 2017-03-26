import React from 'react';
import AccountsUI from '../AccountsUI';
export const MainLayout=({content})=>(
	<div className="main-layout">
	<header>
		<h2> Imágenes </h2>
		<nav>
			<a href="./"> Imágenes </a>
			<a href="./upload">Subir </a>
			<a href="./mine">Mias </a>
			<a href="./about"> Acerca </a>
			<AccountsUI />
		</nav>
	</header>
	<main>
	{content}
	</main>
	</div>
	)