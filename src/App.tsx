import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Button } from "./components";

@Component({
  components: {}
})
export class App extends Vue {
  render() {
    return (
      <div>
        fdsfs
        <Button />
      </div>
    );
  }
}
