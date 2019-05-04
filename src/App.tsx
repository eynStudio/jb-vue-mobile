import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { data } from "./common/data";

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
            {data.nav.map(x => (
              <div>
                {x.title}
                {x.list.map(x2 => (
                  <router-link to={x2.path}>{x2.title}</router-link>
                ))}
              </div>
            ))}
          </div>
          <router-view />
        </div>
      </div>
    );
  }
}
