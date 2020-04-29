import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CounterPicker from './components/CounterPicker/CounterPicker';

import styles from './App.module.scss';
import { fetchData, Statistic, fetchDailyData, CityDetail } from './api';
import { CircularProgress } from '@material-ui/core';

export interface IAppState {
	globalData?: Statistic;
	dailyData?: Record<string, CityDetail[]>;
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
				C<img alt="Coronavirus icon" src="https://img.icons8.com/plasticine/344/coronavirus.png" width={64} style={{display: "inline-block"}}/>rvid-19
				{this.state && this.state.globalData && this.state.dailyData ? 
					<React.Fragment>
						<Cards data={this.state.globalData} />
						<CounterPicker />
						<Chart data={this.state.dailyData} />
					</React.Fragment>
					:
					<CircularProgress className={styles.spinnerAlign} />
				}
			</div>
		);
	}
}
