
<template>
  <div id="layout">
    <TitleBlock />
    <div
      class="layoutPan"
      :style="
        backCard == 'No' ? '' : 'background-color:#2d2d2d; border-radius: 5px;'
      "
    >
      <HomePage v-show="view == 'No2On' ? true : false" />
      <Details v-show="view == 'No1On' ? true : false" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TitleBlock from "../components/TitleBlock";
import HomePage from "../components/HomePage";
import Details from "../components/Details.vue";

export default {
  name: "layout",
  components: { HomePage, TitleBlock, Details },
  computed: {
    backCard: {
      get() {
        return this.$store.getters.getBackCard;
      },
      set(val) {
        this.SET_BACKCARD(val);
      },
    },
    url: {
      get() {
        return this.$store.getters.getUrl;
      },
      set(val) {
        this.SET_URL(val);
      },
    },
    view: {
      get() {
        return this.$store.getters.getView;
      },
      set(val) {
        this.SET_VIEW(val);
      },
    },
  },
  methods: {
    ...mapMutations(["SET_BACKCARD", "SET_URL", "SET_VIEW"]),
  },
  watch: {
    view(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
    },
  },
};
</script>

<style scoped>
.layoutPan {
  padding-top: 39px;
  width: 100%;
  height: 100%;
  /* padding-left: 25px; */
  /* padding-right: 25px; */
  padding-bottom: 15px;
}
#layout {
  width: 100%;
  height: 100%;
  /* min-width: 1334px;
        min-height: 830px; */
  border-block-color: #fff;
  background-color: #f4c8d8;
  border-radius: 5px;
}
</style>
