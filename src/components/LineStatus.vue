<template>
  <div>
    <v-chart :option="chart" style="width: 600px;height:400px;" />
  </div>
</template>

<script>
import { CanvasRenderer } from "echarts/renderers";
import {use} from "echarts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "LineStatus",
  data() {
    return {
      chart: {

      }
    }
  }
}
</script>

<style scoped>

</style>