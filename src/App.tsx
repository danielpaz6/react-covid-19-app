import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CounterPicker from './components/CounterPicker/CounterPicker';

import styles from './App.module.scss';
import { fetchData, Statistic, fetchDailyData } from './api';

export interface IAppState {
	globalData?: Statistic;
	dailyData?: Statistic;
}

export default class App extends React.Component<{}, IAppState> {

	async componentDidMount() {
		const globalData = await fetchData();
		const dailyData = await fetchDailyData();

		this.setState({globalData: globalData, dailyData: dailyData});
	}

	public render() {
		return (
			<div className={styles.container}>
				{this.state && this.state.globalData ? 
					<React.Fragment>
						<Cards data={this.state.globalData} />
						<CounterPicker />
						<Chart />
					</React.Fragment>
					:
					<span>Loading....</span>
				}
			</div>
		);
	}
}
