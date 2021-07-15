import React, { Component } from "react";
import './app.scss';

export default class App extends Component {
	constructor() {
		super();

		this.state = {

			items: [],
			isLoading: false
		}
	}
	//https://www.reddit.com/r/reactjs.json?limit=100

	componentDidMount() {
		this.setState({
			isLoading: true
		});

		fetch("https://www.reddit.com/r/reactjs.json?limit=100")
			.then(response => {
				return response.json();

			})
			.then(({ data }) => {
				this.setState({
					items: data.children,
					isLoading: false
				});
			});
	}

	render() {
		const { items, isLoading } = this.state;
		return (
			<div className="wrapper">
				<div className="container">
					<h1 className="main-title">Top commented</h1>
					{isLoading ? (
						<p>....Loading</p>
					) : (
						items.map(item => (
							<div className="card" key={item.data.id} style={{
								border: "1px solid #000",
								margin: "0 auto 10px",
								padding: "5px"
							}}>
								{item.data.thumbnail !== "self" && <img src={item.data.thumbnail} alt="" />}
								<p>{item.data.title}</p>
								<p>Number of comments: {item.data.num_comments}</p>
								<a href={`https://www.reddit.com/${item.data.permalink}`}
									target="_blank"
									rel="noopener noreferrer"
								>Link</a>
							</div>
						))
					)}
				</div>
			</div>
		)
	};
}