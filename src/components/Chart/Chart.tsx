import * as React from 'react';
import { CityDetail } from '../../api';
import { Line } from "react-chartjs-2";

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
				legend: {
					display: true,
					rtl: true,
					labels: {
						fontSize: 12,
						usePointStyle: true,
						padding: 18
					},
					position: 'right'
				},
				elements: {
					point: {
						pointStyle: 'circle'
					}
				},
				scales: {
					xAxes: [{
						type: 'category',
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
							labelString: 'Infecteds'
						},
						ticks: {
							padding: 10
						}
					}]
				},
				title: {
					display: true,
					fontFamily: 'WorkSans',
					text: 'Corona Total Infecteds by City',
					fontSize: 28,
					fontColor: "#000",
					padding: 40
				},
				tooltips: {
					mode: 'index',
					intersect: false,
					custom: (tooltipModel: any) => {
						tooltipModel.y = 0;
					},
					callbacks: {
						title: function(tooltipItems: any, data: any) {
							return data.datasets[tooltipItems[0].datasetIndex].data[tooltipItems[0].index].x;
						}
					},
					titleAlign: 'center',
					bodyAlign: 'right',
					bodySpacing: 3,
					xPadding: 10
				}
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
