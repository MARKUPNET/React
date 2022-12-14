import React, { useEffect, useState } from "react";
import axios from "axios";
import Resources from './Resources';
import ReactPaginate from 'react-paginate'

function WPRestAPI() {

	const [resources, setResources] = useState([]);
	const [totalPosts, setTotalPosts] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const totalPageCount = Math.ceil(totalPosts / 12);

	const BaseUrl = 'https://michi-eki.net/wp-json/wp/v2/posts';

	const getTotal = async () => { 
		try {
			const data = await axios.get(BaseUrl);
			setTotalPosts(data.headers.get('X-WP-Total'));
		}catch (err) { 
			console.log(err)
		}
	}

	const setPage = ({ selected }) => { 
		setCurrentPage(selected + 1)
	}

	const getPosts = async (currentPage) => { 
		try {
			const { data } = await axios.get(`${BaseUrl}?_embed&per_page=12&page=${currentPage}`);
			setResources(data);
		 }catch (err) { 
			console.log(err)
		}
	}

	useEffect(() => { 
		getTotal();
	}, [])
	
	useEffect(() => { 
		getPosts(currentPage);
	},[currentPage])

	
	return (
		<div className="page-container">
			<h1 className="page__title">WP Rest API</h1>
			<Resources resources={resources} />
			<ReactPaginate
				setStart={1}
				numberOfDisplaysPerpage={12}
				forcePage={currentPage - 1} /* 現在のページをreactのstateで管理したい場合等 */
				pageCount={totalPageCount}
				onPageChange={setPage}
				marginPagesDisplayed={2} /* 先頭と末尾に表示するページ数 */
				pageRangeDisplayed={2} /* 現在のページの前後をいくつ表示させるか */
				containerClassName="pagination justify-content-center" /* ul(pagination本体) */
				pageClassName="page-item"
				pageLinkClassName="page-link rounded-full"
				activeClassName="active"
				activeLinkClassName="active"
				
				/* 戻る・進む関連 */
				previousClassName="page-item"
				nextClassName="page-item"
				previousLabel={'PREV'}
				previousLinkClassName="previous-link"
				nextLabel={'NEXT'}
				nextLinkClassName="next-link"
			
				/* 先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくする */
				disabledClassName="disabled-button d-none"
			
				/* 中間ページの省略表記関連 */
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
			/>
		</div>
	);
	
}

export default WPRestAPI;