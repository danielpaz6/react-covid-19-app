import * as React from 'react';
import { Statistic } from '../../api';
import { Line, Bar } from "react-chartjs-2";

import styles from './Chart.module.scss';

interface IChartProps {
	data: Statistic;
}

const Chart: React.FunctionComponent<IChartProps> = (props) => {
	
	/*const lineChart = (
		<Line

		/>
	)*/

	return (
	  <h1>Chart</h1>
  	);
};

export default Chart;
