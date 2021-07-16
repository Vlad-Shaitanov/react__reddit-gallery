import React, { Component } from "react";

export default class Item extends Component {
	render() {

		const { data } = this.props;

		return (
			<div className="card" style={{
				border: "1px solid #000",
				margin: "0 auto 10px",
				padding: "5px"
			}}>
				{data.thumbnail !== "self" && <img src={data.thumbnail} alt="" />}
				<p>{data.title}</p>
				<p>Number of comments: {data.num_comments}</p>
				<a href={`https://www.reddit.com/${data.permalink}`}
					target="_blank"
					rel="noopener noreferrer"
				>Link</a>
			</div>
		);
	}
}