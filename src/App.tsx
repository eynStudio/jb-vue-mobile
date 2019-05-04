import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Button } from "./components";

@Component({
  components: {}
})
export class App extends Vue {
  render() {
    return (
      <div>
        <div>header</div>
        <div>
          <div style="">
            <router-link to="/">Home</router-link> |
            <router-link to="/test">Test</router-link> |
            <router-link to="/button">Button</router-link> |
            <Button />
          </div>
          <router-view />
        </div>
      </div>
    );
  }
}
