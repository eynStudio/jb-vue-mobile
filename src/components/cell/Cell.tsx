import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export class Cell extends Vue {
  render() {
    return <span>cell</span>;
  }
}
