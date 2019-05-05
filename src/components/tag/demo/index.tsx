import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Tag } from "../Tag";

@Component({
  components: { Tag }
})
export default class TagDemo extends Vue {
  render() {
    return <Tag>fsdfs</Tag>;
  }
}
