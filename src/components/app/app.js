import React, { Component } from "react";
import Item from "../item/index.js";
import './app.scss';

export default class App extends Component {
	constructor() {
		super();

		this.state = {

			items: [], //Посты
			isLoading: false, //Состояние загрузки постов
			enableAutoRefresh: false, //Включено ли автообновление постов
			minComments: 0, //Минимальное кол-во комментариев
		}
	}
	//https://www.reddit.com/r/reactjs.json?limit=100

	//Запрос к серверу после рендеринга
	componentDidMount() {
		this.getItems();
	}

	//Получение постов с рервера
	getItems = () => {
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

	updateMinComments = event => {
		this.setState({
			minComments: Number(event.target.value)
		});
	};

	//Обновление постов
	updateAutoRefresh = () => {
		//При изменении состояния запускаем коллбэк
		this.setState(state => ({
			enableAutoRefresh: !state.enableAutoRefresh
		}),
			() => {
				if (this.state.enableAutoRefresh) {
					//По клику на кнопку запускаем обновление постов
					this.autoRefresh = setInterval(this.getItems, 3000);
				} else {
					//При повторном клике на кнопку очищаем интервал
					clearInterval(this.autoRefresh);
				}
			});
	}

	render() {
		const { items, isLoading, enableAutoRefresh, minComments } = this.state;

		//Массив, отсортированный по комментариям
		const itemsSortByComments = items
			.sort((a, b) => b.data.num_comments - a.data.num_comments)
			.filter(item => item.data.num_comments >= minComments);

		return (
			<div className="wrapper">
				<div className="container">
					<h1 className="main-title">Top commented</h1>

					<div>
						<p>Current filter: {minComments}</p>
						<button type="button"
							style={{ marginBottom: "15px" }}
							onClick={this.updateAutoRefresh}
						>{enableAutoRefresh ? "Stop" : "Start"} auto-refresh
						</button>
					</div>

					<input type="range"
						value={minComments}
						onChange={this.updateMinComments}
						min={0}
						max={500}
						style={{ width: "100%", display: "block", marginBottom: "15px" }} />

					{isLoading ? (
						<p>....Loading</p>
					) : (
						itemsSortByComments.map(item => (
							<Item key={item.data.id} data={item.data} />
						))
					)}
				</div>
			</div>
		)
	};
}