import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export class Demo extends Vue {
  @Watch("$route.path")
  onRoute() {
    console.log("route", this.$route.path);
  }

  render() {
    return (
      <div class="jb-doc">
        <div class="jb-doc-header">
          <div class="header-logo">Jb Vue Mobile Demo</div>
        </div>

        <div class="jb-doc-main">
          <div class="jb-doc-content">
            <router-view />
          </div>
        </div>
      </div>
    );
  }
}
