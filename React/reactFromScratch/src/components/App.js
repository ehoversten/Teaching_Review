import React from 'react';

import '../assets/scss/app.scss';

export default function App() {
	return (
		//the <> are fragments. They allow you to stack multiple html tags
		<>
			<div id="title">
				<h3>Simple React App!</h3>
			</div>

			<p id="wheels">
				Purpose of this site: This app is made without Create-React-App. Learn
				how to create a React app without the bundled package. There's nothing
				wrong with it, but learn how to create an app without training wheels!
			</p>

			<div id="details">
				Learn these technologies:
				<ul>
					<li>
						React - You'll learn via class, but don't stop at Create-React-App.
						Eject it (npm run eject) and learn to fly!
					</li>
					<li>
						Redux-Thunk -{' '}
						<a href="https://github.com/reduxjs/redux-thunk#redux-thunk">
							Documentation
						</a>
					</li>
					<li>
						Redux-Saga - <a href="https://redux-saga.js.org/">Documentation</a>
					</li>
					<li>
						Webpack -{' '}
						<a href="https://webpack.js.org/concepts/">Documentation</a>
					</li>
				</ul>
				<p>
					Companies don't really use Create-React-App because they would rather
					have total control of the packages and how the app re-act{' '}
					<span className="rotate">;)</span>
					<br /> Specially security companies. One npm package you install can
					have 50+ dependency packages. It's hard to control all those packages.
				</p>
				<br />
				<p className="rotate">P.S. doesn't the UI look so pretty?!</p>
			</div>
		</>
	);
}
