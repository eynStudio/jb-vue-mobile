import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export class Tag extends Vue {
  render() {
    return <span>标签</span>;
  }
}
