import * as echarts from "echarts/core";
import { MapChart, GaugeChart, LineChart, BarChart, GraphChart, PieChart, RadarChart, HeatmapChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    VisualMapComponent,
    ToolboxComponent
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    VisualMapComponent,
    ToolboxComponent,
    HeatmapChart,
    RadarChart,
    PieChart,
    GraphChart,
    BarChart,
    LineChart,
    MapChart,
    GaugeChart,
    CanvasRenderer,
]);

const parser = new DOMParser();
const line_5 =
    "<svg width=\"1370\" height=\"900\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    " <title>5号线车站线路</title>\n" +
    " <g id=\"Layer_1\">\n" +
    "  <title>line_5</title>\n" +
    "  <line stroke=\"#bfbf00\" stroke-dasharray=\"5,5\" fill=\"none\" stroke-width=\"10\" x1=\"463.98186\" y1=\"88.40089\" x2=\"463.98186\" y2=\"722.35158\" id=\"svg_1\"/>\n" +
    "  <line stroke=\"#bfbf00\" stroke-dasharray=\"5,5\" fill=\"none\" stroke-width=\"10\" x1=\"149.37503\" y1=\"88.40089\" x2=\"149.37503\" y2=\"722.35158\" id=\"svg_2\"/>\n" +
    "  <line stroke=\"#bfbf00\" stroke-dasharray=\"5,5\" fill=\"none\"  stroke-width=\"10\" x1=\"150.4167\" y1=\"718.75001\" x2=\"467.1262\" y2=\"718.75001\" id=\"svg_3\"/>\n" +
    "  <circle name=\"站点1\" stroke=\"null\" r=\"30\" cy=\"89.95012\" cx=\"149.99651\" id=\"svg_4\"/>\n" +
    "  <circle name=\"站点2\" stroke=\"null\" r=\"30\" cy=\"290.76027\" cx=\"148.99651\" id=\"svg_5\"/>\n" +
    "  <circle name=\"站点3\" stroke=\"null\" r=\"30\" cy=\"507.57166\" cx=\"148.99651\" id=\"svg_6\"/>\n" +
    "  <circle name=\"站点4\" stroke=\"null\" r=\"30\" cy=\"718.81752\" cx=\"148.99651\" id=\"svg_7\"/>\n" +
    "  <circle name=\"站点5\" stroke=\"null\" r=\"30\" cy=\"718.76146\" cx=\"465.03246\" id=\"svg_8\"/>\n" +
    "  <circle name=\"站点6\" stroke=\"null\" r=\"30\" cy=\"509.69681\" cx=\"464.14045\" id=\"svg_9\"/>\n" +
    "  <circle name=\"站点7\" stroke=\"null\" r=\"30\" cy=\"291.14973\" cx=\"464.52746\" id=\"svg_10\"/>\n" +
    "  <circle name=\"站点8\" stroke=\"null\" r=\"30\" cy=\"92.23925\" cx=\"464.52746\" id=\"svg_11\"/>\n" +
    " </g>\n" +
    "</svg>";
echarts.registerMap('line_5', {svg: parser.parseFromString(line_5, 'text/xml')});

export default echarts;