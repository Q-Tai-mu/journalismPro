<template>
  <div
      v-show="false"
      ref="scrollBar"
      id="homePage"
      class="Neworldscro"
      @scroll="handleScroll($event)"
  >
    <div
        :class="backCard == 'No' ? 'homeCard' : 'homeCardDeep'"
        v-for="item in journalismList"
        :key="item.index"
        @click="onClickUrlOnView(item)"
    >
      <div class="homeTitleCarImg">
        <img class="homeTitleCarImgI" :src="item.img"/>
      </div>
      <div class="homeTitleCarText">
        <div
            class="homeTitleCarTextNex"
            :style="backCard == 'No' ? '' : 'background-color: #323232;'"
        >
          <div class="homeTitleCarTextNexTup">
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


</template>

<script>
import {mapMutations} from "vuex";
import axios from "axios";

var cheerio = require("cheerio");
export default {
  name: "homePage",
  data() {
    return {
      chatHeader: "小宝贝c",
      inputCardData: "5,345,543.00",
      inputCardData2: "3,403.05",
      inputCardData3: "3,097.33",
      inputCardData4: "5,897.33",
      inputCardData5: "起存点低、安全稳健",
      inputCardData6: "优选基金、一元起投 ",
      inputCardData7: "理财有方、稳重求进",
      inputCardData8: "多重保障、关爱生命",
      journalismList: [],
      inputDeaclee: "00",
      datIndex: 1,
      oexff: false,
      sUrl: "",
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
    hurl: {
      get() {
        return this.$store.getters.getHurl;
      },
      set(val) {
        this.SET_HURL(val);
      },
    },
  },
  methods: {
    ...mapMutations(["SET_BACKCARD", "SET_URL", "SET_VIEW", "SET_HURL"]),
    onClickUrlOnView(val) {
      this.url = JSON.stringify({url: val.href, title: val.NexT});
      this.view = "No1On";
    },
    handleScroll(e) {
      var _this = this;
      if (
          parseInt(e.srcElement.scrollTop) +
          parseInt(e.srcElement.offsetHeight) >=
          parseInt(e.srcElement.scrollHeight.toString()) - 1
      ) {
        _this.$refs.scrollBar.scrollTop = e.srcElement.scrollTop - 500;
        this.datIndex += 1;
        const loading = this.$Message.loading({
          message: "加载中.x..",
          duration: 0,
        });
        setTimeout(loading, 1500);
        if (!_this.oexff) {
          _this.netWork();
        } else {
          _this.netSearchWork(_this.sUrl + "&page=" + this.datIndex);
        }
      }
    },
    netWork() {
      axios
          .get("https://hanime1.me/comics?page=" + this.datIndex)
          .then((resp) => {
            var $ = cheerio.load(resp.data);
            console.log(resp.data);
            var arr1 = [];
            $("div.comics-panel-margin div.comic-rows-videos-div").each(function (
                i,
                e
            ) {
              console.log("解析：x");

              let objectM = {
                href: $($(e).children("a")).attr("href"),
                img: $($($(e).children("a")))
                    .children("img")
                    .attr("data-srcset"),
                NexT: $($($(e).children("a")))
                    .children("div")
                    .text(),
                Preview: Math.floor(Math.random() * 100) + 1,
                like: Math.floor(Math.random() * 100) + 1,
                comment: Math.floor(Math.random() * 100) + 1,
              };

              arr1.push(objectM);
            });

            this.journalismList.push.apply(this.journalismList, arr1);
          })
          .catch((err) => {
            console.log(err);
          });
    },
    //搜索用
    netSearchWork(newValue) {
      axios
          .get(newValue)
          .then((resp) => {
            var $ = cheerio.load(resp.data);
            var arr1 = [];
            $("div.comics-panel-margin div.comic-rows-videos-div").each(function (
                i,
                e
            ) {
              console.log("解析：x");

              let objectM = {
                href: $($(e).children("a")).attr("href"),
                img: $($($(e).children("a")))
                    .children("img")
                    .attr("data-srcset"),
                NexT: $($($(e).children("a")))
                    .children("div")
                    .text(),
                Preview: Math.floor(Math.random() * 100) + 1,
                like: Math.floor(Math.random() * 100) + 1,
                comment: Math.floor(Math.random() * 100) + 1,
              };

              arr1.push(objectM);
            });

            this.journalismList.push.apply(this.journalismList, arr1);
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
  created() {
    axios
        .get("https://q-tai-mu.github.io/sex.json")
        .then((resp) => {
          if (resp.data["offet"]) {
            this.netWork();
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
  watch: {
    hurl(newValue, oldValue) {
      console.log("搜索触发");
      console.log(oldValue);
      console.log(newValue);
      if (!newValue) {
        this.oexff = false;
        this.netWork();
      } else {
        this.journalismList = [];
        this.dataIndex = 1;
        this.oexff = true;
        this.sUrl = newValue;
        this.netSearchWork(newValue);
      }
    },
  },
};
</script>

<style scoped>
.TextSerengThen {
  padding-left: 5px;
}

.homeTitleCardTextNexUnpCardImgGuidBum {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.homeTitleCardTextNexUnpCardText {
  float: left;
  font-size: 10px;
  padding-top: 3px;
  color: #99a2aa;
}

.homeTitleCardTextNexUnpCardImgGuid {
  width: 30%;
  height: 70%;
  border-radius: 50%;
  background-color: #f9f9f9;
  float: left;
  margin-right: 3px;
  margin-left: 3px;
}

.homeTitleCarTextNexUnpCard {
  height: 100%;
  width: 60px;
  float: left;
}

.homeTitleCarTextNexUnp {
  width: 100%;
  height: 30%;
}

.homeTitleCarTextNexKup {
  font-size: 12px;
  color: #99a2aa;
  letter-spacing: 0;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
}

.homeTitleCarTextNexTup {
  font-size: 14px;
  width: 100%;
  padding: 5px;
}

.homeTitleCarTextNex {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}

.homeTitleCarText {
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
  width: 100%;
  height: 40%;
  border-radius: 3.5px;
}

.homeTitleCarImgI {
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
  object-position: top;
}

.homeTitleCarImg {
  width: 100%;
  height: 60%;
}

.homeCard {
  width: 100%;
  height: 280px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.homeCardDeep {
  width: 100%;
  height: 280px;
  background-color: rgb(39, 39, 39);
  border: 1px solid rgb(28, 28, 28);
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.homeCardDeep:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  /* transform: translate(0, -3px); */
  transition-delay: 0s !important;
  border: 1px solid #78a4fa;
}

.homeCard:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  /* transform: translate(0, -3px); */
  transition-delay: 0s !important;
  border: 1px solid #d96cba;
}

#homePage {
  border-radius: 3px;
  width: 100%;
  height: 100%;
  /* background-color: #f9f9f9;
  border: 1px solid #e5e5e5; */
  padding: 10px;
}

.Neworldscro {
  /* height: 430px; */
  overflow-y: auto;
}

.Neworldscro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
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
  height: 0px;
}

.NeworldscroE::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.NeworldscroE::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 0px;
  background: #f1f6fa;
}
</style>
