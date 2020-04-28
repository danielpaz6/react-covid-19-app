import * as React from 'react';
import { Statistic } from '../../api';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';


import styles from './Cards.module.scss';

interface ICardsProps {
	data: Statistic
}

const Cards: React.FunctionComponent<ICardsProps> = (props) => {

	console.log(props.data);
	
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
								<CountUp
									start={0}
									end={props.data.confirmed.value}
									duration={2.5}
									separator=","
								/>
							</Typography>
						<Typography color="textSecondary">
							{new Date(props.data.lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">Number of active cases of COVID-19</Typography>
					</CardContent>
				</Grid>

				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp
									start={0}
									end={props.data.recovered.value}
									duration={1.5}
									separator=","
								/>	
						</Typography>
						<Typography color="textSecondary">
							{new Date(props.data.lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">Number of recoveries from COVID-19</Typography>
					</CardContent>
				</Grid>

				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Death
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={props.data.deaths.value}
								duration={1}
								separator=","
							/>		
						</Typography>
						<Typography color="textSecondary">
							{new Date(props.data.lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">Number of deaths caused by COVID-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
