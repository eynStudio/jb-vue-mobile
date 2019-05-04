import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export class Button extends Vue {
  hi(e: any) {
    console.log("hi", e);
  }

  render() {
    return <button onClick={this.hi}>fsdfs</button>;
  }
}
