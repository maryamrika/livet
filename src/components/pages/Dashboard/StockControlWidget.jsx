/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-operators */
import React from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell
} from 'recharts';
// import CircleChart from '../../common/ChartCircle/ChartCircle';
import PercentText from '../../common/PrecentText/Percent';

const calculatePercent = (data, colors) => {
  let total = 0;
  for (const i of data) {
    total += i.value;
  }
  return data.map((item, index) => {
    const percentItem = Math.round((item.value * 100) / total);
    return (
      <PercentText
        text={item.name}
        percent={`${percentItem} %`}
        key={index}
        color={colors[index % colors.length]}
      />
    );
  });
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const mx = cx + (outerRadius + 2) * cos;
  const my = cy + (outerRadius + 2) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 5;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  // const sx = cx + (outerRadius + 5) * cos;
  // const sy = cy + (outerRadius + 5) * sin;
  // <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
  // <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
  return (
    <g>
      <text x={cx} y={cy} dy={-5} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={15} textAnchor="middle" fill={fill}>
        {` ${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 3}
        outerRadius={outerRadius + 5}
        fill={fill}
      />


      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" />
    </g>
  );
};

class StockControlWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.onPieEnter = this.onPieEnter.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }
  render() {
    const data = [{ name: 'On Hire', value: 400 }, { name: 'Repair', value: 300 }, { name: 'Rep/Serv', value: 300 }, { name: 'Collection', value: 100 }, { name: 'Others', value: 100 }];
    const colors = ['#488FAE', '#009264', '#ED9423', '#F0594E', '#FF0000'];
    return (
      <div className="mb-4">
        <PieChart width={300} height={300}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={120}
            cy={100}
            innerRadius={55}
            outerRadius={75}
            fill="#8884d8"
            onMouseEnter={this.onPieEnter}
          >
            {
data.map((entry, index) => <Cell key={entry} fill={colors[index % colors.length]} />)
            }
          </Pie>
        </PieChart>
        <div className="d-flex justify-content-between pie-dt">
          {
            calculatePercent(data, colors)
          }
        </div>
      </div>
    );
  }
}

export default StockControlWidget;
