import React, { memo } from "react";


export const Item = memo(({ data }) => {
	// console.log("render");
	return (
		<div className="card" style={{
			border: "1px solid #000",
			margin: "0 auto 10px",
			padding: "5px"
		}}>
			{data.thumbnail === "self" ? <img src={"https://iohotnik.ru/wp-content/auploads/775545/lesnye_koty.jpg"} alt="" /> : <img src={data.thumbnail} alt="" />}
			<p>{data.title}</p>
			<p>Number of comments: {data.num_comments}</p>
			<a href={`https://www.reddit.com/${data.permalink}`}
				target="_blank"
				rel="noopener noreferrer"
			>Link</a>
		</div>
	);
});

