import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { data } from "./common/data";
import "./common/doc.scss";

@Component({
  components: {}
})
export class App extends Vue {
  render() {
    return (
      <div class="jb-doc">
        <div class="jb-doc-header">
          <div class="header-logo">Jb Vue Mobile</div>
        </div>
        <div class="jb-doc-nav">
          <router-link to="/">Home</router-link>
          {data.nav.map(x => (
            <div class="jb-doc-nav-item">
              <div class="jb-doc-nav-title">{x.title}</div>
              {x.list.map(x2 => (
                <div class="jb-doc-nav-subitem">
                  <router-link to={x2.path}>{x2.title}</router-link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div class="jb-doc-main">
          <div class="jb-doc-content">
            <router-view />
          </div>
        </div>
        <div class="jb-doc-demo">
          <iframe
            ref="iframe"
            frameborder="0"
          />
        </div>
      </div>
    );
  }
}
