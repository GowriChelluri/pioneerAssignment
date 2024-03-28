import { useEffect, useState } from 'react';
import "./index.css";
import axios from 'axios'; // Import axios for making HTTP requests
import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

const LineGraph=()=> {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
				const data = response.data.data.map(item => ({
					name: item.Year,
					population: item.Population,
				}));
				setChartData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		< >
			
			<ResponsiveContainer width="100%" aspect={3} >
				<LineChart data={chartData} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name" interval={"preserveStartEnd"} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="population" stroke="#AAFF00"  width="120px" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
			
		</>
	);
}

export default LineGraph;
