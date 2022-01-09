import * as echarts from "echarts/core";
import { MapChart, GaugeChart, LineChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    VisualMapComponent
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    VisualMapComponent,
    LineChart,
    MapChart,
    GaugeChart,
    CanvasRenderer,
]);

export default echarts;