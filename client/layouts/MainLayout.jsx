import React from 'react';
import AccountsUI from '../AccountsUI';
export const MainLayout=({content})=>(
	<div className="main-layout">
	<header>
		<h2> Imágenes </h2>
		<nav>
			<a href="./"> Images </a>
			<a href="./upload">Upload </a>
			<a href="./mine">My pictures </a>
			<a href="./about"> About </a>
			<AccountsUI />
		</nav>
	</header>
	<main>
	{content}
	</main>
	</div>
	)