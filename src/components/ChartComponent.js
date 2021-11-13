import { defaults, Line } from "react-chartjs-2";

// hide the legends // the number and name on the top of the graph
defaults.plugins.legend.display = false;
// hide the hover effect
defaults.plugins.tooltip.enabled = false;
// line thickness
defaults.elements.bar.borderWidth = 1;
//
//
const ChartComponent = ({ priceData, color }) => {
 const data = {
  labels: priceData,
  datasets: [
   {
    label: "",
    data: priceData,
    //color of the dots
    backgroundColor: color,
    //hide the dots on the line
    pointRadius: 0,
    //color fo the lines
    borderColor: color,
   },
  ],
 };

 const options = {
  // keeps the height and width of the graph
  maintainAspectRatio: false,
  // hides the animation when graph changes
  animations: false,
  plugins: {
   tooltip: {
    enabled: false,
   },
  },
  scales: {
   xAxes: {
    // hides the lines just show the graph
    display: false,
   },

   yAxis: {
    // hides the lines just show the graph
    display: false,
   },
  },
 };
 return <Line style={{ cursor: "pointer" }} data={data} options={options} height={80} width={100} />;
};

export default ChartComponent;
