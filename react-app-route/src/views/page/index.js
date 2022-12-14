import React from "react";

function Page() {
	return (
		<div id="top" className="page-container">
			<h1 className="page__title">Page</h1>

			<div className="typography">

				<p>The purpose of this HTML is to help determine what default settings are with CSS and to make sure that all possible HTML Elements are included in this HTML so as to not miss any possible Elements when designing a site.</p>
				<hr/>
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
				<p><small><a href="#top">[top]</a></small></p>
				<hr/>
				<h2 id="paragraph">Paragraph</h2>
				<p>Lorem ipsum dolor sit amet, <a href="#top" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
				<p>Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
				<p><small><a href="#top">[top]</a></small></p>
				<hr/>
				<h2 id="list_types">List Types</h2>
				<h3>Definition List</h3>
				<dl>
				<dt>Definition List Title</dt>
				<dd>This is a definition list division.</dd>
				</dl>
				<h3>Ordered List</h3>
				<ol>
				<li>List Item 1</li>
				<li>List Item 2</li>
				<li>List Item 3</li>
				</ol>
				<h3>Unordered List</h3>
				<ul>
				<li>List Item 1</li>
				<li>List Item 2</li>
				<li>List Item 3</li>
				</ul>
				<p><small><a href="#top">[top]</a></small></p>
				<hr/>
				<h2 id="form_elements">Forms</h2>
				<fieldset>
					<legend>Legend</legend>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.</p>
					<form>
						<h2>Form Element</h2>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui.</p>
						<p><label>Text Field:</label><br/>
						<input type="text" id="text_field" /></p>
						<p><label>Text Area:</label><br/>
						<textarea id="text_area"></textarea></p>
						<p><label>Select Element:</label><br/>
						<select name="select_element">
									<optgroup label="Option Group 1"><option defaultValue="1">Option 1</option><option defaultValue="2">Option 2</option><option defaultValue="3">Option 3</option></optgroup>
									<optgroup label="Option Group 2"><option defaultValue="1">Option 1</option><option defaultValue="2">Option 2</option><option defaultValue="3">Option 3</option></optgroup>
						</select></p>
						<p><label>Radio Buttons:</label></p>
						<p><input type="radio" className="radio" name="radio_button" defaultValue="radio_1" /> Radio 1<br/>
						<input type="radio" className="radio" name="radio_button" defaultValue="radio_2" /> Radio 2<br/>
						<input type="radio" className="radio" name="radio_button" defaultValue="radio_3" /> Radio 3</p>
						<p><label>Checkboxes:</label></p>
						<p><input type="checkbox" className="checkbox" name="checkboxes" defaultValue="check_1" /> Radio 1<br/>
						<input type="checkbox" className="checkbox" name="checkboxes" defaultValue="check_2" /> Radio 2<br/>
						<input type="checkbox" className="checkbox" name="checkboxes" defaultValue="check_3" /> Radio 3</p>
						<p><label>Password:</label></p>
						<p><input type="password" className="password" name="password" /></p>
						<p><label>File Input:</label><br/>
						<input type="file" className="file" name="file" /></p>
						<p><input className="button" type="reset" value="Clear" /> <input className="button" type="submit" value="Submit" /></p>
					</form>
				</fieldset>
				<p><small><a href="#top">[top]</a></small></p>
				<hr/>
				<h2 id="tables">Tables</h2>
				<table>
					<tbody>
						<tr>
						<th>Table Header 1</th>
						<th>Table Header 2</th>
						<th>Table Header 3</th>
						</tr>
						<tr>
						<td>Division 1</td>
						<td>Division 2</td>
						<td>Division 3</td>
						</tr>
						<tr className="even">
						<td>Division 1</td>
						<td>Division 2</td>
						<td>Division 3</td>
						</tr>
						<tr>
						<td>Division 1</td>
						<td>Division 2</td>
						<td>Division 3</td>
						</tr>
					</tbody>
				</table>
				<p><small><a href="#top">[top]</a></small></p>
				<hr/>
				<h2 id="misc">Misc Stuff – abbr, acronym, pre, code, sub, sup, etc.</h2>
				<p>Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr></p>
				<pre>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. 
				Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. 
				Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. 
				Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> 
				Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  
				<abbr title="Avenue">AVE</abbr>
				</pre>
				<blockquote><p>
					“This stylesheet is going to help so freaking much.”<br/>
																								-Blockquote</p></blockquote>
			</div>

		</div>
	);
}

export default Page;