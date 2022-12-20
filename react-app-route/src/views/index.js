import {React, Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from './home';
import Page from './page';
import WPRestAPI from './WpRestApi';
import HeadLessCmsApp from './headlesscms';
import ToDoApp from './todo';
import FormApp from './hooks/form';
import Page404 from './page404';

function Views() {

	return (
		<BrowserRouter basename={'/portfolio/react_route_app/'}>
			<div className="wrapper">

				<Header />

				<div className="site-container">
					<Suspense fallback={<span>Loading ...</span>}>
							<Routes>
									<Route path="/" element={<Home/>}/>
									<Route path="/page" element={<Page />} />
									<Route path="/wprestapi" element={<WPRestAPI />} />
									<Route path="/headlesscms" element={<HeadLessCmsApp />} />
									<Route path="/todo" element={<ToDoApp />} />
									<Route path="/hooks/form" element={<FormApp />} />
									<Route path="*" element={<Page404 />} />
							</Routes>
					</Suspense>
				</div>

				<Footer />

			</div>
		</BrowserRouter>
	)

}

export default Views