
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};




const SurveyorChart = ({chartData}) => {

  console.log(chartData)

  // const data = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 },
  // ];

  const allVotes = chartData?.reduce((acc, curr) => acc + curr.voted, 0);
  const allLikes = chartData?.reduce((acc, curr) => acc + curr.like, 0);
  const allDislikes = chartData?.reduce((acc, curr) => acc + curr.dislike, 0);

  console.log(allVotes, allLikes, allDislikes)

  const data = [
    {
      name: 'Votes',
      value: allVotes
    },
    {
      name: 'Likes',
      value: allLikes
    },
    {
      name: 'Dislikes',
      value: allDislikes
    }
  ]

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  return (
 
      <PieChart width={400} height={400}>

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"

        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
          <Legend />
      </PieChart>

  );
};

export default SurveyorChart;
