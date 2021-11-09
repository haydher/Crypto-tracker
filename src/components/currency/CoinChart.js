import { defaults, Line } from "react-chartjs-2";

// hide the legends // the number and name on the top of the graph
defaults.plugins.legend.display = false;
// hide the hover effect
defaults.plugins.tooltip.enabled = true;
// line thickness
defaults.elements.bar.borderWidth = 1;
//
//
const CoinChart = ({ graph }) => {
 // console.log("graph", graph);

 const formateDate = (UNIXTime) => {
  const date = new Date(UNIXTime);
  const FullYear = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formateDate = `${month}/${day}/${FullYear}`;
  const formateTime = `${hours}:${minutes}:${seconds}`;

  return `${formateDate} - ${formateTime}`;
 };
 const data = (canvas) => {
  const ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 0, 450);

  gradient.addColorStop(0, "rgba(16, 206, 58, .8)");
  gradient.addColorStop(0.2, "rgba(16, 206, 58, .6)");
  gradient.addColorStop(0.4, "rgba(16, 206, 58, .4)");
  gradient.addColorStop(0.6, "rgba(16, 206, 58, .2)");
  gradient.addColorStop(0.9, "rgba(16, 206, 58, .1)");
  gradient.addColorStop(1, "rgba(16, 206, 58, 0)");

  return {
   labels: graph,
   datasets: [
    {
     label: "data",
     data: graph,
     //hide the dots on the line
     pointRadius: 0,
     //color fo the lines
     fill: true,
     //color of the dots / gradient
     backgroundColor: gradient,
     borderColor: "#10ce3a",
    },
   ],
  };
 };

 const options = {
  // keeps the height and width of the graph
  maintainAspectRatio: false,
  // hides the animation when graph changes
  animations: true,

  // fix the tooltip issue
  plugins: {
   tooltip: {
    // show the tooltip when hover anywhere on the axis
    mode: "index",
    // shows tooltip even not directly hovering
    intersect: false,
    // hides the color in the tooltip
    displayColors: false,
    // background color of the tooltip
    backgroundColor: "rgba(86, 115, 255, .8)",

    // title
    titleColor: "white",
    titleFont: { weight: "bold" },
    titleMarginBottom: 15,

    padding: 20,

    // tip of the tooltip
    // caretPadding: 20,
    caretSize: 10,
    callbacks: {
     title: function (tooltipItem, data) {
      const UNIXTime = parseInt(tooltipItem[0].label.split(",")[0]);
      return formateDate(UNIXTime);
     },
     label: function (tooltipItem, data) {
      return `Price:    $ ${Math.round(tooltipItem.label.split(",")[1] * 100) / 100}`;
     },
     labelTextColor: function (context) {
      return "white";
     },
    },
   },
   // shows the data on tooltip even not directly hovering over data
   hover: {
    mode: "nearest",
    intersect: true,
   },
  },

  scales: {
   xAxes: {
    // hides the lines just show the graph
    display: false,
   },
  },
 };
 return <Line data={data} options={options} />;
};

export default CoinChart;
