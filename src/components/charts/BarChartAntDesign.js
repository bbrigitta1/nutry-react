import { Progress } from 'antd';
//css for bar height in CaloriesBar.css

function BarChartAntDesign(props) {
    return (
        <div className="calories-bar">
            <Progress percent={parseInt(props.data.amount / props.data.recommended * 100) } strokeColor={props.data.color} showInfo={false}/>
        </div>
    );
}

export default BarChartAntDesign;