import React, { useEffect, useState } from 'react';
import { createClient } from 'microcms-js-sdk'; 

function HeadLessApp() {

	const [resources, setResources] = useState([]);

	const client = createClient({
		serviceDomain: "markupnet", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
		apiKey: "31l8co8ClB9CoZEYnXTkX1pjZ6oxFWTERuzh",
	});

	const getPosts = async () => {
		const data = await client.get({
			endpoint: 'blogs',
		});
		setResources(data);
		console.log(data)
		
	}

	useEffect(() => { 
		console.log('data')
		getPosts();
	},[])

	return (
		<div className="page-container">
			<h1 className="page__title">MicroCMS</h1>

			<div className="row posts">
			</div>
			
		</div>
	)
}

export default HeadLessApp;