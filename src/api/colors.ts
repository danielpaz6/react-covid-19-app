export const getRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

export const COLORS = [
	"#DC143C",
	"#8A2BE2",
	"#FF7F50",
	"#7FFFD4",
	"#8A2BE2",
	"#A52A2A",
	"#FF7F50",
	"#6495ED",
	"#00FFFF",
	"#00008B",
	"#FF8C00",
	"#ADFF2F",
	"#CD5C5C",
	"#F0E68C",
	"#E6E6FA",
	"#FFFACD",
	"#E0FFFF",
	"#90EE90",
	"#FFB6C1",
	"#FFA07A",
	"#FFFFE0",
	"#FAF0E6",
	"#3CB371",
	"#FFA500",
	"#EEE8AA",
	"#98FB98",
	"#AFEEEE",
	"#DB7093",
	"#FFEFD5",
	"#FFDAB9",
	"#FFC0CB",
	"#DDA0DD",
	"#B0E0E6",
	"#D8BFD8",
	"#F5DEB3",
	"#C71585"
];