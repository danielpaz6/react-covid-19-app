import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export type SingleStat = {
	value: number,
	detail: string
}

export type Statistic = {
	confirmed: SingleStat,
	recovered: SingleStat,
	deaths: SingleStat,
	lastUpdate: string
}

export const fetchData = () => {
	return axios.get<Statistic>(url).then(res => res.data);

}

export const fetchDailyData = () => {
	return axios.get<Statistic>(url).then(res => res.data);
}