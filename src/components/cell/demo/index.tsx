import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Cell } from "../Cell";

@Component({
  components: { Cell }
})
export default class CellDemo extends Vue {
  render() {
    return <Cell title="abc">fsdfs</Cell>;
  }
}
