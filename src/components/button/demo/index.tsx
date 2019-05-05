import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Button } from "../Button";

@Component({
  components: { Button }
})
export default class ButtonDemo extends Vue {
  render() {
    return <Button>fsdfs</Button>;
  }
}
