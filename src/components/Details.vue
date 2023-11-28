<template>
  <div
      id="details"
      :style="backCard == 'No' ? '' : 'background-color:#2d2d2d;'"
  >
    <div
        class="detailsTitle"
        :style="
        backCard == 'No'
          ? ''
          : 'background-color:#323232;border: 1px solid #232323;color:#fff;'
      "
    >
      <span> {{ title }}</span>
    </div>
    <div
        class="detailsGrade"
        :style="
        backCard == 'No'
          ? ''
          : 'background-color:#323232;border: 1px solid #232323;color:#fff;'
      "
    >
      <div
          class="detailsGradeText"
          :style="backCard == 'No' ? '' : 'color:#fff;'"
      >
        日常
      </div>
      <div
          class="detailsGradeText"
          :style="backCard == 'No' ? '' : 'color:#fff;'"
      >
        {{ dateStr }}
      </div>
      <div
          class="detailsGradeText"
          :style="backCard == 'No' ? '' : 'color:#fff;'"
      >
        {{ Preview }}阅读
      </div>
      <div
          class="detailsGradeText"
          :style="backCard == 'No' ? '' : 'color:#fff;'"
      >
        {{ love }}喜欢
      </div>
      <div
          class="detailsGradeText"
          :style="backCard == 'No' ? '' : 'color:#fff;'"
      >
        {{ like }}评论
      </div>
    </div>
    <div class="detailsCardText Neworldscro">
      <div v-for="item in dataView" :key="item.index">
        <img :src="item.img"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import axios from "axios";


var cheerio = require("cheerio");
export default {
  name: "details",
  data() {
    return {
      dataView: [],
      Preview: "",
      love: "",
      like: "",
      title: "",
      dateStr: "",
    };
  },
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
    url(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      // this.$refs.scrollBar.scrollTop = 100;
      //读取url，抓取详情信息
      let objectMx = JSON.parse(newValue);

      this.dataView = [];
      this.title = objectMx.title;
      const loading = this.$Message.loading({
        message: "加载中...",
        duration: 0,
      });
      setTimeout(loading, 1500);


      axios
          .get(objectMx.url)
          .then((resp) => {
            var $ = cheerio.load(resp.data);
            var arr1 = [];
            $("div.comics-panel-margin").each(function (i, e) {
              if (i == 1) {
                $(e)
                    .children("a")
                    .each(function (j, s) {
                      console.log("图片地址：")
                      console.log($(s).attr("href"))
                      let urlOrg = $(s).children("img").attr("data-srcset");
                      //获得高清图片，wang 20231128 start
                      //https://i.nhentai.net/galleries/2746757/1.jpg//高清
                      //https://t.nhentai.net/galleries/2746757/1t.jpg//低清
                      let objectM = {
                        img: (urlOrg.substring(0, urlOrg.lastIndexOf("t.")) + urlOrg.substring(urlOrg.lastIndexOf("t.") + 1, urlOrg.length)).replace("//t.", "//i."),
                      };
                      //获取高清图片，wang 20231128 end
                      console.log(objectM);
                      arr1.push(objectM);
                    });
              }
            });
            const date = new Date();
            this.dataView.push.apply(this.dataView, arr1);
            this.Preview = Math.floor(Math.random() * 100) + 1;
            this.like = Math.floor(Math.random() * 100) + 1;
            this.love = Math.floor(Math.random() * 100) + 1;
            this.dateStr = date.toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            });
            this.$Message.success("查询成功");
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>

<style>
img {
  width: 100%;
}

strong {
  font-weight: bolder;
}

.detailsCardText {
  width: 100%;
  background-color: #ffff;
  border-radius: 3.5px;
  border: 1px solid #e5e5e5;
  padding: 15px;
  height: 89%;
}

.detailsGradeText {
  height: 100%;
  color: #999;
  font-size: 13px;
  margin-left: 5px;
  margin-right: 5px;
  float: left;
}

.detailsGrade {
  width: 100%;
  height: 23px;
  background-color: #ffff;
  border-radius: 3.5px;
  border: 1px solid #e5e5e5;
  margin-bottom: 6px;
}

.detailsTitle {
  width: 100%;
  background-color: #ffff;
  border-radius: 3.5px;
  border: 1px solid #e5e5e5;

  font-size: 18px;
  color: #222;
  margin-bottom: 6px;
  font-weight: 700;
  line-height: 1.4;
  padding: 5px;
}

#details {
  width: 100%;
  height: 100%;
  padding: 10px;
}

.Neworldscro {
  /* height: 430px; */
  overflow-y: auto;
}

.Neworldscro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 1px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.Neworldscro::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.Neworldscro::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}

.NeworldscroE {
  /* height: 430px; */
  overflow-y: auto;
}

.NeworldscroE::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.NeworldscroE::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.NeworldscroE::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}
</style>
