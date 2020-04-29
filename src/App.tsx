import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';

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
				<h2>C<div className={styles.space}><div className={styles.img}></div></div>rvid-19 Statistics</h2>
				{this.state && this.state.globalData && this.state.dailyData ? 
					<React.Fragment>
						<Cards data={this.state.globalData} />
						<Chart data={this.state.dailyData} />
					</React.Fragment>
					:
					<CircularProgress className={styles.spinnerAlign} />
				}
			</div>
		);
	}
}
