import * as echarts from "echarts/core";
import { BarChart, PieChart, LineChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    GeoComponent
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    GeoComponent,
    BarChart,
    PieChart,
    LineChart,
    CanvasRenderer,
]);

export default echarts;