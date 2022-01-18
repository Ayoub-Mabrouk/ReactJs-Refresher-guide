import './Chart.css'
import ChartBar from './ChartBar'
export default function Chart(props) {
    return (
        <div className='chart'>
            {props.dataPoints.map(e=><ChartBar key={e.label} value={e.value} maxValue={null} label={e.label}/>)}
        </div>
    )
}
