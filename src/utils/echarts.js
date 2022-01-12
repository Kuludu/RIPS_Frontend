import * as echarts from "echarts/core";
import { MapChart, GaugeChart, LineChart, BarChart, GraphChart, PieChart, RadarChart, HeatmapChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    VisualMapComponent
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    VisualMapComponent,
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

export default echarts;