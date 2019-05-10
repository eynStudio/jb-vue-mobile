import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { utils } from "@/utils/utils";

@Component({
  components: {}
})
export class Cell extends Vue {
  $props: {
    title: String;
  };
  // @Prop() title: String;

  render() {
    const { title } = this.$props;
    const slots: any = this.$slots;

    const showTitle = slots.title || utils.isDef(title);

    const Title = showTitle && (
      <div class={["jb-cell__title"]}>
        {slots.title ? slots.title() : <span>{title}</span>}
      </div>
    );

    return <span>cell, {Title}</span>;
  }
}
