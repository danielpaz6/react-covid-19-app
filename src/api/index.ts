import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const citiesUrl = 'https://devdinocdn.com/mako/coronavirusStats/Home/GetCitiesHistory/';

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

export type CityDetail = {
	date: string;
	cases: number;
	normalCases: number;
}

export type CitiesInfo = {
	data: {
		data: Record<string, CityDetail[]>
	}
}

export const fetchData = () => {
	return axios.get<Statistic>(url).then(res => res.data);

}

export const fetchDailyData = () => {
	return axios.get<CitiesInfo>(citiesUrl).then(res => {
		const cities = res.data.data.data;
		return cities;
	});
}