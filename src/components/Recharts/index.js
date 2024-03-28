import { useEffect, useState } from 'react';
import "./index.css";
import axios from 'axios'; // Import axios for making HTTP requests
import {
	PieChart,
	Pie,
	Tooltip,
	Legend,
	Cell,
} from "recharts";

const Recharts=()=> {
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

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919', '#19FF6F', '#196FFF'];

	return (
		<>
			
			<PieChart width={400} height={400}>
				<Tooltip />
				<Legend />
				<Pie
					data={chartData}
					dataKey="population"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={150}
					fill="#8884d8"
					label
				>
					{
						chartData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))
					}
				</Pie>
			</PieChart>
		</>
	);
}

export default Recharts;
