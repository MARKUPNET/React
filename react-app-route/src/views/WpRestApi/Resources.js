import React from 'react';

function Resources({ resources }) { 

	return (
		<div className="row posts">
			{resources.map((resource) => (
				<div className="col-12" key={resource.id}>
					<a href={resource.link} target="_blank" rel="noreferrer">
						<div className="postItem">
							<h3>{resource.title.rendered}</h3>
						</div>
					</a>
				</div>
			))}
		</div>
	);
}

export default Resources;