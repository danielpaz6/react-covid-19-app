import * as React from 'react';
import { Statistic, CityDetail } from '../../api';
import { Line, Bar } from "react-chartjs-2";

import styles from './Chart.module.scss';
import { COLORS } from '../../api/colors';

interface IChartProps {
	data: Record<string, CityDetail[]>;
}

const Chart: React.FunctionComponent<IChartProps> = (props) => {
	const parseDateToXAxis = (date: Date) => {
		return date.getDate() + "/" + (date.getMonth() + 1);
	}

	const getDates = () => {
		let dates: string[] = []
		let itDate = new Date(2020, 3, 3);
		const nowTime = new Date().getTime();

		while(itDate.getTime() < nowTime) {
			dates.push(parseDateToXAxis(itDate));
			itDate = new Date(itDate.getTime() + 86400000);
		}

		return dates;
	}

	let count = 0;
	const getInfo = () => {
		let finalObj: any[] = [];

		for(const key in props.data) {
			let cases: {x: string, y: number}[] = []

			const currData = props.data[key];

			for(let i = 0; i < currData.length; i++) {				
				cases.push({
					x: parseDateToXAxis(new Date(currData[i].date)),
					y: currData[i].cases
				});
			}
			
			const color = COLORS[count++ % COLORS.length];

			finalObj.push({
				data: cases,
				label: key,
				//borderColor: '#80b6f4',
				//pointBackgroundColor: '#80b6f4',
				borderColor: color,
				pointBackgroundColor: color,
				fill: false,
				pointHitRadius: 15,
				pointBorderWidth: 4
			});
		}

		//console.log(finalObj.slice(0, 2));
		return finalObj.slice(0, 35);
	}

	//const [dates, cases] = getInfo();
	
	const lineChart = (
		<Line
			data={{
				labels: getDates(),
				datasets: getInfo()
			}}

			options={{
				elements: {
					point: {
						pointStyle: 'circle'
					}
				},
				scales: {
					xAxes: [{
						display: true,
						gridLines: {
							drawTicks: false,
							display: false
						},
						ticks: {
							autoSkip: true,
							padding: 20,
						},
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Cases'
						},
						ticks: {
							padding: 10
						}
					}]
				},
					
			}}
		/>
	);

	return (
		<div className={styles.container}>
			{lineChart}
		</div>
  	);
};

export default Chart;
