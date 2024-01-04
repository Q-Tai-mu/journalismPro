<template>
  <div
    id="details"
    :style="backCard == 'No' ? '' : 'background-color:#2d2d2d;'"
  >
    <div class="flexContainer">
      <div class="div1 animate__animated animate__backInDown">
        <div
          class="detailsTitle animate__animated animate__backInLeft"
          :style="
            backCard == 'No'
              ? ''
              : 'background-color:#323232;border: 1px solid #232323;color:#fff;'
          "
        >
          <span> {{ title }}</span>
        </div>
        <div
          class="detailsGrade animate__animated animate__backInLeft"
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
        <div
          class="detailsCardText NeworldscroE"
          :style="
            backCard == 'No'
              ? ''
              : 'background-color:#2d2d2d;border: 1px solid #232323;'
          "
        >
          <!--      <div v-for="item in dataView" :key="item.index">-->
          <!--        <img :src="item.img"/>-->
          <!--      </div>-->
          <iframe
            id="iframe-embed"
            width="100%"
            height="100%"
            :src="PlayParserUrl"
            frameborder="no"
            border="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            style="border-radius: 5px; height: 77%"
          ></iframe>
          <div>
            <at-tag color="default" v-for="item in tagData" :key="item.id">
              {{ item }}
            </at-tag>
          </div>
          <div>
            <div
              class="playData"
              :style="
                backCard == 'No'
                  ? ''
                  : 'background-color:#323232;border: 1px solid #232323;color:#fff;'
              "
            >
              {{ PlayParserData }}
            </div>
          </div>
        </div>
      </div>
      <div class="div2 animate__animated animate__backInRight">
        <div
          class="detailsTitle"
          :style="
            backCard == 'No'
              ? ''
              : 'background-color:#323232;border: 1px solid #232323;color:#fff;'
          "
        >
          <span>关联选集</span>
        </div>
        <div
          class="detailsTitle"
          :style="
            backCard == 'No'
              ? ''
              : 'background-color:#323232;border: 1px solid #232323;color:#fff;'
          "
        >
          <div
            style="
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              align-content: flex-start;
              margin: 0 10px;
              height: 95%;
            "
          >
            <at-tag color="default" style="margin-right: 3px; flex: 1 1 auto"
              >开源</at-tag
            >
            <at-tag color="default" style="margin-right: 3px; flex: 1 1 auto"
              >免费</at-tag
            >
            <at-tag color="default" style="margin-right: 3px; flex: 1 1 auto"
              >最全</at-tag
            >
            <at-tag color="default" style="margin-right: 3px; flex: 1 1 auto"
              >汉化</at-tag
            >
          </div>
        </div>
        <div
          class="NeworldscroE flexFu"
          style="
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            align-content: flex-start;
            margin: 0 10px;
          "
        >
          <div
            :class="backCard == 'No' ? 'homeCard' : 'homeCardDeep'"
            v-for="item in journalismList"
            :key="item.index"
            @click="onClickUrlOnView(item)"
          >
            <div class="homeTitleCarImg">
              <img class="homeTitleCarImgI" :src="item.img" />
              <!-- <img class="homeTitleCarImgI" src="https://vdownload.hembed.com/image/icon/card_doujin_background.jpg?secure=sJRJ4-aVOQw4IVZasq7YZw==,4853041705"/> -->
            </div>
            <div class="homeTitleCarText">
              <div
                class="homeTitleCarTextNex"
                :style="backCard == 'No' ? '' : 'background-color: #323232;'"
              >
                <div
                  class="homeTitleCarTextNexTup"
                  v-if="item.play"
                  style="color: #red"
                >
                  <span> <at-tag color="success">正在播放</at-tag></span>

                  <span> {{ item.name }} </span>
                </div>
                <div class="homeTitleCarTextNexKup">
                  <span>
                    {{ item.NexT }}
                  </span>
                </div>
                <div class="homeTitleCarTextNexUnp">
                  <div class="homeTitleCarTextNexUnpCard">
                    <div class="homeTitleCardTextNexUnpCardImgGuid">
                      <img
                        class="homeTitleCardTextNexUnpCardImgGuidBum"
                        src="https://i0.hdslb.com/bfs/face/member/noface.jpg@30w_30h.webp"
                      />
                    </div>
                    <div class="homeTitleCardTextNexUnpCardText">匿名者</div>
                  </div>
                  <div class="homeTitleCarTextNexUnpCard">
                    <div class="homeTitleCardTextNexUnpCardText TextSerengThen">
                      轻涩图
                    </div>
                  </div>
                  <div class="homeTitleCarTextNexUnpCard">
                    <div class="homeTitleCardTextNexUnpCardImgGuid">
                      <img
                        class="homeTitleCardTextNexUnpCardImgGuidBum"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABEVJREFUWAntVn1oW1UUP+e+pEu3VWETmTpY2fxnCDr9Q1AE7T8KEVeWZMHlC6ttk8EcKgwUtK5TUfGLodimqyhtU2ZIIt1QUWRTFEEsc4jDCY51Q3QIDrau9sPcez0n3Q15r++9tv5rLyT3nvP7nY933rknAVhZ//cK4HIK8N7YWMvcpWoUQT8EqDeDxlbayQdOgIYzGvBoi2iupFLhy0v1u6QE3i9+vGF2ZvqARp2iQM2+zhGmKaeRVaHmno74gxd8uQT6JqC1FvmR0j4N8CwFXruYMxuOcIWcv5hNxV5DRGXDGgTPBK4+9agG3dbAX/YRAY9TNRJe1XBNYKDw0TYpq59StA1eEckxvXP4lXFycjMlusWLS/oLwSCGO3fFfnByFiQwMFq5V0p5hEp+jZPMMj+RCMDj3YnYqUZ8YLR0i6rC254VQ7hsWdb27kTkq0Y7WwL50co9SsrP3RoNESSgeDKbjLxD75QefuGinsF8obIHtHpLa7AWMKhBhWXdn01EvjFYPQEuu1LVL8nwWgPad3xldyb2DOv6hyu3AcjnKdE75zn4nRWA3q5E7EeW+4ZKLwPop+cx+zc9yCUhAvd1J3ecZETwFzecUvKoV3Aq+6lN163ez9yBocrDoOX3xN1BZbhp/qMjsqrHaxhxalzEn5jvXByDY3FMxkR+fDw4O/N3hcq30Uk2Mg2Y18Ph8OyhkfJGiTJPQYMGMzvrFMp+5jCXhtQbBnPuHItjcmyhfj63n4zvcpIaZRFqOsayUjri1ZyMzz8dcWgZGz67LY6pT5/tFdQwj7oRbLrNN/zBMk0Tevf+q865auPH1go6uAd+8SMxFjp/vnYlqWN/W4xrOMbGj0+9dUIEAriXLve0H3F2Wt/OuIX6Cz9eI8fYePH5NljQtEfw1UEUHV5E1iulHuG9K73zaxT4AZ/dFmPMYczYuPEYBoGJrsz2s7VrmEtFPxQIPR5kbq5kf6EUZnxd09asAHwJEKt1Pp1ZxxjrmMs2ddxxoEG2L5eMfcLq+iBioW+kdBCU3svnBQvh96AQd3cmo+cY4/8GckrewWdrjXXisfb2ST4PFsqb/lHqW7otN7LsXFTtV3PpaH1I2RKojdLh8rs0z3NOQ5apaSYp+6ey6eigG54fLneSjzfJvsUNJ9uDuXTsiUbMloAB+obLB+h6Pmdk504NdJLu8ZglxBnGpFJbyFE7lX2bk2tkfsXZ9M4XjGx21wQYpHmfoST66GlWG/J/2SnZKfpdyu5ORwpu9p4JMPnQ4crW6pw6TDPuVjfjxXRcKbRwVzYRO+3F9U2AjYpFbV2cK3dReXvpOlzv5cimR/yTOqZn/arIYDyO0oY5hEUTMPxi8fjav2YuxuivQIoarY30tStscNppCuMx+hTWh9aV4vG2Kw2Y53HJCTR6GBr6bM1MYLJVS2xlPVp6IlRtmchkHphieWWtVGA5FfgXAfWiKTPtugcAAAAASUVORK5CYII="
                      />
                    </div>
                    <div class="homeTitleCardTextNexUnpCardText">
                      {{ item.Preview }}万
                    </div>
                  </div>
                  <div class="homeTitleCarTextNexUnpCard">
                    <div class="homeTitleCardTextNexUnpCardImgGuid">
                      <img
                        class="homeTitleCardTextNexUnpCardImgGuidBum"
                        src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAldJREFUWAntV01oE0EUft+YtBgrlPbgTbx4sCKCZy/2ZpESRFeQELBF6sWLXjwoInjyJl4ShFZjVAihDRHFHjRXiyeRij2oh3rRUhGNQW2yz7fbZtlsdtmsbh0Q97Az782b733zzZv9IdJ84U/yMzPyxfJ5YjrLhG0AVQaQOpfJjH3pFTfRa6BfXK44e0WSX1ofY2KmyToaW8Q+5Rfv51N+zl58+TvlNIgvemNFlROWMl5/kP1bBHLFyoistuCbiGnrdLU6EJTQ649MYGZubpC4WRHBt3vB2vbE+Pi3dj+sjURAVqy+11v3pN0dBAxCA4AZNO71RyrC/N3yVSm6w16QDhv8tcMOMbqKJV+s7GNujsqxGrbmKuaHU9ljCzcLs6NNaj0JwSNR4DMDN4LiIPIR1JsU0+Ns9uhHR4FarZZ4vbx62zTXTq5PZrthpVaks8DK3EU9CCu1ITXCG0ezm4aNyi1qgD7k7pePODWwtPzpAhFvJO+eGLdHdNhBa3TNISDJJ+NOEooHPuAQEOl2hk6IOUC2Y8UhINjufsyp/OHkuM7/9aRuKgr0QB8BUH0wuaemjwBh3jD2/tRGwJLf2g5dBMxkX+qRPgLAswljzHrC6lFAPmSqVnLr0rMFSNr7r4cA8PZMJv3KXr4OBeR17MjfoYA8Ft+3WW1mC5WcduO7a6DkHtiMvvw3FKYy6ZdubIfAUP/wZQKeuwfj6ou6DIVbQ/0jp72YzheRYRyql0qLB1d/LB0HmfslsM8OBr2wWjZpUYCu275ot3dA4ql35dEg/kf/ywr8Aonws4baE7rQAAAAAElFTkSuQmCC
    "
                      />
                    </div>
                    <div class="homeTitleCardTextNexUnpCardText">
                      {{ item.like }}万
                    </div>
                  </div>
                  <div class="homeTitleCarTextNexUnpCard">
                    <div class="homeTitleCardTextNexUnpCardImgGuid">
                      <img
                        class="homeTitleCardTextNexUnpCardImgGuidBum"
                        src="  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbNJREFUWAljYBjpgBE5AGYvWSvz9///LqCYw////yWR5ShmMzI8Y/jPeICBg70sM8z3Kcw8uAPAlv/7d/E/A4MQTJIWNCMjwxtWFjb95Ej/ZyDzmWCWgHxOa8tBdv3/zyDy+8/vTpi9cAcABRxggnSg4XbBHUD1OMfjC6BdUjBpuANgAvSmRx0w4CHAgivOgQXEcQYmpj5keWDiKQbmIwsGRsZjjIyM/chyQPESoLw5XjkUDRAOTgcApZ9kxASvQdYzY/HqcGBZwQB0HIbc9MVrIoBS5oz/GR5nxKLpW7QmEtkcZPaAR8HgdgAwThlRMDCCYcGHIg5UBxMHxg+qHmQ5uCIEA65x+qLVoOilF/iXGRfKDLJscEcBPYJjNATgIQBM31/pEeTodsAd8J+B8Ry6JD34cAcwMjA108NCdDvgDsiIDdrNzMwUB4yKj+iKaMmHF0QwS1atOsb57s8LA4b/f6nXLP/LYAss5QpgdgBpeEGEURuGhVl9Byo4jqSYGsx10xev/czw/18tumHwKECXoDY/Mza4joERM53RzQEgD+FyBLU9S9C8mYvX1hNUNGIUAACd/5qYm/6utwAAAABJRU5ErkJggg==
             "
                      />
                    </div>

                    <div class="homeTitleCardTextNexUnpCardText">
                      {{ item.comment }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
      PlayParserUrl: "",
      PlayParserData: "",
      tagData: [],
      journalismList: [],
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
    onClickUrlOnView(val) {
      this.url = JSON.stringify({ url: val.href, title: val.NexT });
    },
  },
  watch: {
    url(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      // this.$refs.scrollBar.scrollTop = 100;
      //读取url，抓取详情信息
      let objectMx = JSON.parse(newValue);
      this.journalismList = [];

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

          this.PlayParserUrl = $($("video").children("source")).attr("src");

          this.PlayParserData = $("div.video-caption-text").text();
          let arry5 = new Array();
          $("div.single-video-tag").each(function (i, e) {
            arry5.push($(e).text());
          });
          this.tagData.push.apply(this.tagData, arry5);
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

          //抓取系列影片
          var arr2 = [];
          var nameList = [];
          $("div.hover-video-playlist div.related-watch-wrap").each(function (
            i,
            e
          ) {
            if (!nameList.includes($(e).children("a.overlay").attr("href"))) {
              nameList.push($(e).children("a.overlay").attr("href"));
              let objectM = {
                href: $(e).children("a.overlay").attr("href"),
                img: "",
                NexT: "",
                Preview: Math.floor(Math.random() * 100) + 1,
                like: Math.floor(Math.random() * 100) + 1,
                comment: Math.floor(Math.random() * 100) + 1,
                play: false,
              };

              $($(e).children("div.card-mobile-panel"))
                .children("div")
                .each(function (j, k) {
                  if (j == 0) {
                    if (
                      $($(k).children("div")).text().replace(/\s/g, "") ==
                      "現正播放"
                    ) {
                      //如果有現正播放，则表明当前是播放中
                      objectM.play = true;
                    }
                    $($(k).children("div"))
                      .children("img")
                      .each(function (l, m) {
                        if (l == 1) {
                          objectM.img = $(m).attr("src");
                          objectM.NexT = $(m).attr("alt");
                        }
                      });
                  }
                });

              arr2.push(objectM);
            }
          });

          this.journalismList.push.apply(this.journalismList, arr2);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.flexFu {
  height: 93%;
}
.at-tag--default {
  color: #3f536e!important;
  border-color: #212020!important;
  background-color: #2d2c2c !important;
}
.flexContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}
.div1 {
  flex: 1 0 70%;
  padding: 5px;
  height: 100%;
}
.div2 {
  flex: 1 0 30%;
  padding: 5px;
}
@media (min-width: 800px) and (max-width: 1200px) {
  .flexContainer {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
  }
  .div1 {
    flex: 1 0 70% !important;
    padding: 5px;
  }
  .div2 {
    flex: 1 0 30% !important;
    padding: 5px;
  }
}
@media (min-width: 400px) and (max-width: 800px) {
  .flexContainer {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
  }
  .div1 {
    flex: 1 0 50% !important;
    padding: 5px;
  }
  .div2 {
    flex: 1 0 50% !important;
    padding: 5px;
  }
  .flexFu {
    height: 30%;
  }
}

.playData {
  background-color: #fdfdfd;
  border-radius: 5px;
  padding: 5px;
}

img {
  width: 100%;
}

strong {
  font-weight: bolder;
}

.detailsCardText {
  width: 100%;
  background-color: #fdfdfd;
  border-radius: 3.5px;
  border: 1px solid #e5e5e5;
  padding: 15px;
  height: 93%;
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
  background-color: #fdfdfd;
  border-radius: 3.5px;
  border: 1px solid #fdfdfd;
  margin-bottom: 6px;
}

.detailsTitle {
  width: 100%;
  background-color: #fdfdfd;
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
