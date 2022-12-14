import React from "react";
import Navigation from './Navigation';

function Header() {
  return (
		<div className="site-header">

			<div className="site-header-inner">
				
				<p>SiteName</p>

				<Navigation />

			</div>

		</div>
  );
}

export default Header;
