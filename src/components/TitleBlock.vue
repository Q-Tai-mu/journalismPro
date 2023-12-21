<template>
  <div
    id="titleBlock"
    :style="backCard == 'No' ? '' : 'background-color:#2d2d2d;'"
  >
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      "
    >
      <div style="flex: 20%" class="titleName">
        <div class="iconTitle">
          <svg
            t="1701659197345"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6930"
            width="18"
            height="18"
          >
            <path
              d="M640.8 316.5c-0.9 1.2-0.9 3.1 0 4.2l90 123c0.9 1.2 0.4 2-1.1 1.8L578.2 429c-1.4-0.2-3.1 0.8-3.7 2.1L513 570.6c-0.6 1.3-1.5 1.3-2.1 0l-61.5-139.5c-0.6-1.3-2.2-2.3-3.7-2.1l-151.5 16.5c-1.4 0.2-1.9-0.7-1.1-1.8l90-123c0.9-1.2 0.9-3.1 0-4.2l-90-123c-0.9-1.2-0.4-2 1.1-1.8l151.5 16.5c1.4 0.2 3.1-0.8 3.7-2.1l61.5-139.5c0.6-1.3 1.5-1.3 2.1 0l61.5 139.5c0.6 1.3 2.2 2.3 3.7 2.1l151.5-16.5c1.4-0.2 1.9 0.7 1.1 1.8l-90 123z"
              fill="#58D598"
              p-id="6931"
            ></path>
            <path
              d="M512 585m-374.8 0a374.8 374.8 0 1 0 749.6 0 374.8 374.8 0 1 0-749.6 0Z"
              fill="#FF5C7A"
              p-id="6932"
            ></path>
            <path
              d="M659.2 505.9h-87.8l8.5-19.8c17-36.8 16.6-67.7 2.8-90.6-14.7-24.5-41.4-28.3-55.7-27.4-5.5 0.3-10.4 3.5-13.1 8.3L438 506.1h-69.8c-11.1 0-20 9-20 20v214.7c0 11.1 9 20 20 20h74.9v-0.4c0.3 0 0.6 0.2 0.9 0.2h189.7c28.3 0 53.8-19.8 56.6-48.1l28.3-150c0-31.1-25.5-56.6-59.4-56.6z"
              fill="#FDDE80"
              p-id="6933"
            ></path>
            <path
              d="M401.4 726.3c-11.7 0-21.4-9.6-21.4-21.4V562.1c0-11.7 9.6-21.4 21.4-21.4 11.7 0 21.4 9.6 21.4 21.4V705c-0.1 11.7-9.7 21.3-21.4 21.3z"
              fill="#FCC038"
              p-id="6934"
            ></path>
          </svg>
        </div>
        <div
          class="titleText"
          :style="backCard == 'No' ? '' : 'color:#eaeaea;'"
        >
          果汁番剧
        </div>
      </div>

      <div
        style="
          flex: 60%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 10px;
        "
      >
        <div class="Ternarylinkage">
          <div
            class="ternaryClss"
            v-show="view == 'No2On' ? true : false"
            @click="onClickViewOn1on2()"
            :style="
              backCard == 'No'
                ? ''
                : 'background-color: rgb(52, 52, 52); border: 1px solid rgb(59, 59, 59);'
            "
          >
            <span style="font-size: 13px">搜索本番</span>
            <div style="float: right; margin-top: 2px; margin-right: 2px">
              <div v-if="offet == true"></div>
              <div v-if="offet == false"></div>
              <svg
                t="1700124922777"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8724"
                width="15"
                height="15"
              >
                <path
                  d="M834.836 905.027c-5.16 0-10.003-2.001-13.635-5.634l-73.652-73.65c-12.426-12.426-28.973-19.269-46.594-19.269-10.563 0-21.123 2.574-30.536 7.443-51.308 26.533-109.094 40.559-167.11 40.559-96.881 0-187.838-37.716-256.117-106.202-139.693-140.117-140.02-369.246-0.729-510.767 34.925-35.484 75.747-62.962 121.333-81.672 44.011-18.063 90.534-27.222 138.279-27.222 96.682 0 187.509 37.581 255.748 105.818 55.397 55.397 90.658 125.578 101.973 202.955a364.554 364.554 0 0 1-1.034 112.212c-6.211 37.658-18.222 73.886-35.698 107.677-13.311 25.735-8.557 56.727 11.83 77.118l73.655 73.651c7.54 7.542 7.489 19.869-0.115 27.477l-63.761 63.757c-3.707 3.708-8.619 5.748-13.835 5.748l-0.002 0.001z"
                  fill="#FFFFFF"
                  p-id="8725"
                ></path>
                <path
                  d="M506.075 153.614c43.802 0 86.461 8.284 126.793 24.623 41.718 16.9 79.157 41.755 111.277 73.874 26.037 26.036 47.439 55.795 63.612 88.448 15.641 31.579 26.172 65.374 31.301 100.446a339.58 339.58 0 0 1-0.964 104.527c-5.784 35.069-16.967 68.801-33.236 100.258-18.334 35.446-11.762 78.157 16.36 106.286l69.656 69.651-55.994 55.991-69.654-69.652c-17.147-17.147-39.973-26.591-64.271-26.591-14.542 0-29.072 3.54-42.019 10.236-47.774 24.707-101.589 37.766-155.627 37.766-43.882 0-86.613-8.314-127.006-24.711-41.787-16.963-79.27-41.908-111.407-74.143-130.052-130.447-130.328-343.79-0.616-475.579 32.542-33.063 70.563-58.66 113.008-76.081 40.984-16.82 84.314-25.349 128.787-25.349m0-50c-100.487 0-201.094 38.798-277.43 116.357-148.962 151.346-148.559 396.1 0.842 545.955 75.486 75.715 174.597 113.552 273.821 113.552 61.338 0 122.713-14.454 178.596-43.354a41.424 41.424 0 0 1 19.051-4.648c10.611 0 21.062 4.092 28.916 11.946l73.651 73.649c8.639 8.639 19.969 12.957 31.312 12.957 11.396 0 22.806-4.358 31.515-13.069l63.764-63.761c17.378-17.383 17.428-45.51 0.112-62.831l-73.653-73.648c-12.642-12.645-15.544-32.025-7.303-47.958 75.572-146.12 52.384-329.853-69.769-452.006-75.44-75.439-174.375-113.141-273.425-113.141z"
                  fill="#1A1A1A"
                  p-id="8726"
                ></path>
                <path
                  d="M508.601 290.203c109.343 0 197.981 88.639 197.981 197.981 0 109.343-88.638 197.983-197.981 197.983s-197.982-88.64-197.982-197.983c-0.001-109.341 88.639-197.981 197.982-197.981z"
                  fill="#FFCD36"
                  p-id="8727"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <at-modal
          v-model="modal1"
          title="搜索本番"
          @on-confirm="handleConfirm"
          @on-cancel="handleCancel"
          :styles="{ top: '120px', width: '320px' }"
        >
          <at-input v-model="inputValue" placeholder="输入本番名"></at-input>
        </at-modal>
        <div class="Ternarylinkage">
          <div
            class="ternaryClss"
            v-show="view == 'No2On' ? true : false"
            @click="onClickViewOn1on()"
            :style="
              backCard == 'No'
                ? ''
                : 'background-color: rgb(52, 52, 52); border: 1px solid rgb(59, 59, 59);'
            "
          >
            <span style="font-size: 13px"> 链至服务器</span>
            <div style="float: right; margin-top: 2px; margin-right: 2px">
              <div v-if="offet == true"></div>
              <div v-if="offet == false"></div>
              <svg
                t="1700120263040"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4030"
                width="15"
                height="15"
              >
                <path
                  d="M0 0h1024v1024H0V0z"
                  fill="#202425"
                  opacity=".01"
                  p-id="4031"
                ></path>
                <path
                  d="M955.733333 512c0 245.077333-198.656 443.733333-443.733333 443.733333S68.266667 757.077333 68.266667 512 266.922667 68.266667 512 68.266667s443.733333 198.656 443.733333 443.733333z"
                  fill="#11AA66"
                  p-id="4032"
                ></path>
                <path
                  d="M512 102.4C285.7984 102.4 102.4 285.7984 102.4 512s183.3984 409.6 409.6 409.6 409.6-183.3984 409.6-409.6S738.2016 102.4 512 102.4zM34.133333 512C34.133333 248.081067 248.081067 34.133333 512 34.133333s477.866667 213.947733 477.866667 477.866667-213.947733 477.866667-477.866667 477.866667S34.133333 775.918933 34.133333 512z"
                  fill="#11AA66"
                  p-id="4033"
                ></path>
                <path
                  d="M787.114667 339.285333a51.2 51.2 0 0 1 0 72.362667l-307.2 307.2a51.2 51.2 0 0 1-72.362667 0l-170.666667-170.666667a51.2 51.2 0 0 1 72.362667-72.362666L443.733333 610.235733l271.018667-271.018666a51.2 51.2 0 0 1 72.362667 0z"
                  fill="#FFFFFF"
                  p-id="4034"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="ternaryClss ternaryClassXi"
            v-show="view == 'No1On' ? true : false"
            @click="onClickViewOn2on()"
            :style="
              backCard == 'No'
                ? ''
                : 'background-color: rgb(52, 52, 52); border: 1px solid rgb(59, 59, 59);'
            "
          >
            返回
          </div>
        </div>
      </div>
      <div style="flex: 20%">
        <div class="ternarySetUp">
          <div class="ternarySetUpIcon" @click="onBlockTitleButton()">
            <svg
              t="1701165278803"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="13791"
              width="20"
              height="20"
            >
              <path
                d="M512 65.290005c-246.708891 0-446.708971 200.00008-446.708971 446.708972S265.291109 958.707948 512 958.707948c246.712985 0 446.708971-200.00008 446.708971-446.708971S758.712985 65.290005 512 65.290005zM396.941498 424.678212c33.555234 0 61.514006 25.625634 61.514005 60.166311 0 34.548864-27.958772 61.291948-61.514005 61.291948-33.55114 0-61.509912-25.628704-61.509913-60.177567 0-34.537608 27.958772-61.280692 61.509913-61.280692z m370.32121 134.887107v111.462604c0 16.08228-13.044084 29.126364-29.126364 29.126364-16.078187 0-29.126364-13.044084-29.126365-29.126364v-47.752584H314.991044v47.752584c0 16.08228-13.044084 29.126364-29.126364 29.126364-16.078187 0-29.126364-13.044084-29.126365-29.126364V352.971054c0-16.078187 13.048177-29.126364 29.126365-29.126365 16.08228 0 29.126364 13.048177 29.126364 29.126365v212.051557h162.332179v-111.478978c0-16.08228 13.048177-29.126364 29.126364-29.126364h144.021138c64.419172 0 116.791983 52.368718 116.791983 116.791983v18.356067z"
                fill="#040000"
                p-id="13792"
              ></path>
            </svg>
          </div>
          <!-- 左边的深浅模式切换按钮 -->
          <div
            :class="
              backCard == 'No' ? 'ternarySetUpModel' : 'ternarySetUpModelDeep'
            "
            v-show="buttonTitle"
          >
            <div
              class="ternarySetUpModelButton"
              :class="backCard == 'off' ? 'ModelButtonSex' : ''"
              @click="onBlockTitleButtonCex()"
            >
              <span>深</span>
            </div>
            <!-- 分类适配浅色模式有问题：禁用浅色 -->
            <div
              style="pointer-events: none;"
              class="ternarySetUpModelButton"
              :class="backCard == 'No' ? 'ModelButtonSex' : ''"
              @click="onBlockTitleButtonCex()"
            >
              <span>浅</span>
            </div>
          </div>
          <!-- 下边的缩小关闭按钮 -->
          <div
            :class="
              backCard == 'No' ? 'ternarySetUpGuid' : 'ternarySetUpGuidDeep'
            "
            v-show="buttonTitle"
          >
            <div class="ternarySetUpGuidButton" @click="closeWindow()">
              <svg
                t="1636216490127"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="15083"
                width="18"
                height="18"
              >
                <path
                  d="M825.76 246.496L560.256 512l265.504 265.504-48.256 48.256-265.536-265.504-265.472 265.504-48.256-48.256 265.472-265.536-265.472-265.472 48.256-48.256L512 463.744l265.504-265.504z"
                  fill="#717378"
                  p-id="15084"
                ></path>
              </svg>
            </div>
            <div class="ternarySetUpGuidButton" @click="minWindow()">
              <svg
                t="1636216576681"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="16743"
                width="18"
                height="18"
              >
                <path
                  d="M832 490.666667a21.333333 21.333333 0 1 1 0 42.666666h-640a21.333333 21.333333 0 1 1 0-42.666666h640z"
                  fill="#999999"
                  p-id="16744"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

const { ipcRenderer } = require("electron");
import axios from "axios";

export default {
  name: "titleBlock",
  data() {
    return {
      buttonTitle: false,
      offet: true,
      modal1: false,
      inputValue: "",
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
    ...mapMutations(["SET_BACKCARD", "SET_VIEW", "SET_HURL"]),
    onBlockTitleButton() {
      if (this.buttonTitle) {
        this.buttonTitle = false;
      } else {
        this.buttonTitle = true;
      }
    },
    onBlockTitleButtonCex() {
      console.log(this.backCard);
      if (this.backCard == "No") {
        this.backCard = "off";
      } else {
        this.backCard = "No";
      }
      this.onBlockTitleButton();
    },
    onClickViewOn2on() {
      this.view = "No2On";
    },
    onClickViewOn1on() {},
    onClickViewOn1on2() {
      this.modal1 = true;
    },
    handleConfirm() {
      //https://hanime1.me/comics/search?query=this.inputValue
      if (this.inputValue) {
        //https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA&page=2&query=%E6%AF%8D
        //https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA&query=
        this.hurl =
          "https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA&query=" +
          this.inputValue;
      } else {
        this.hurl = "";
      }

      this.$Message("Confirm");
    },
    handleCancel() {
      this.$Message("Cancel");
    },
    minWindow() {
      this.onBlockTitleButton();
      ipcRenderer.send("minWindow");
    },
    closeWindow() {
      ipcRenderer.send("closeWindow");
    },
  },
  created() {
    axios
      .get("https://q-tai-mu.github.io/sex.json")
      .then((resp) => {
        this.offet = resp.data["offet"];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
.ternarySetUpGuidButton {
  height: 20px;
  border-radius: 3px;
  box-shadow: none;
  -webkit-app-region: no-drag;
}

.ternarySetUpGuidButton:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}

.ternarySetUpGuid {
  position: absolute;
  z-index: 2;
  height: 50px;
  width: 25px;
  background-color: #ffffff;
  border-radius: 7px;
  top: 30px;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  padding: 3px;
  padding-top: 7px;
  padding-left: 3.5px;
}

.ternarySetUpGuidDeep {
  position: absolute;
  z-index: 2;
  height: 50px;
  width: 25px;
  background-color: #2d2d2d;
  border-radius: 7px;
  top: 30px;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  padding: 3px;
  padding-top: 7px;
  padding-left: 3.5px;
}

.ModelButtonSex {
  background-color: #4b4646;
  color: #fff;
  /*border-style: double;*/
}

.ternarySetUpModelButton {
  width: 40%;
  height: 100%;
  float: left;
  font-size: 12px;
  text-align: center;
  border-radius: 6px;
  padding-top: 1px;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 1px;
  -webkit-app-region: no-drag;
}

.ternarySetUpModelButton:hover {
  background-color: #3d3c3c;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(183, 27, 27);
  transition: all 0.2s ease-in-out;
}

.ternarySetUpModel {
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 25px;
  background-color: #ffebfa;
  left: 1;
  /* left: 1px; */
  right: 35px;
  top: 5px;
  border-radius: 7px;
  padding: 2px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
}

.ternarySetUpModelDeep {
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 25px;
  background-color: #2d2d2d;
  left: 1;
  /* left: 1px; */
  right: 35px;
  top: 5px;
  border-radius: 7px;
  padding: 2px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
}

.ternaryClassXi {
  width: 50px !important;
  float: right;
  margin-right: 12%;
  margin-top: 4.5%;
}

.ternarySetUpIcon {
  /* height: 26px; */
  /* margin-top: 30%; */
  width: 80%;
  /* margin-top: 30%; */
  margin-top: 30%;
  /* padding-top: 30%; */
  box-shadow: none;
  -webkit-app-region: no-drag;
  cursor: default;
  height: 16px;
  width: 17px;
}

.ternarySetUpIcon:hover {
  /*background-color: #eaeaea;*/
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  /*border-color: rgb(180, 26, 26);*/
  transition: all 0.2s ease-in-out;
}

.ternaryClss {
  width: 90px;
  height: 26px;
  background-color: #5dadf7;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  text-align: center;
  margin-top: 5.5%;

  margin-left: 12%;
  padding-top: 2.5%;
  box-shadow: none;

  -webkit-app-region: no-drag;
  cursor: pointer;
}

.ternaryClss:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  /* border-color: rgb(180, 26, 26); */
  transition: all 0.2s ease-in-out;
}

.inpputSer {
  outline-style: none;
  border: none;
  border-radius: 3px;
  padding: 8px 14px;
  width: 320px;
  font-size: 14px;
  font-weight: 700;
  font-family: "Microsoft soft";
  float: left;
  background-color: #fbfbfb;
}

.fanJuIcon {
  float: left;
  margin-top: 10px;
  margin-left: 8px;
}

.fanJu {
  width: 400px;
  height: 40px;
  border-radius: 6px;
  background-color: #fbfbfb;
  border: 1px solid #e5e5e5;
  border-bottom: 1px solid #868686;
  /*margin-top: 6%;*/
  position: absolute;
  z-index: 101;
  margin-top: 0.5%;
  margin-left: 35%;
  -webkit-app-region: no-drag;
}

.iconTitle {
  width: 16px;
  height: 16px;
  float: left;
}

.titleText {
  float: left;
  margin-left: 5px;
}

.titleName {
  float: left;
  margin-top: 8px;
  margin-left: 10px;
  font-size: 13px;
}

.BinarylinkageSvg {
  margin-top: 10%;
  height: 100%;
}

.BinarylinkageGan {
  width: 25%;
  height: 30px;
  /* background-color: aqua; */
  /* padding-top: 10%; */
  float: right;
  padding: 6px;
  border-top-right-radius: 5px;
  text-align: center;
  -webkit-app-region: no-drag;
}

.BinarylinkageGan:hover {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #eee;
  transition: all 0.2s ease-in-out;
  background-color: #e81123;
}

.Binarylinkage {
  width: 25%;
  height: 30px;
  /* background-color: aqua; */
  /* padding-top: 10%; */
  float: right;
  padding: 6px;
  /* margin-top: 6px; */
  /* padding-top: 6px; */
  text-align: center;
  -webkit-app-region: no-drag;
}

.Binarylinkage:hover {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #eee;
  transition: all 0.2s ease-in-out;
  background-color: #d3d3d3;
}

.Ternarylinkage {
  width: 115px;
  height: 30px;
  /* background: #009966; */
  /* float: right; */
}

.ternarySetUp {
  width: 30px;
  height: 30px;
  /* background: #009966; */
  float: right;
  position: relative;
}

#titleBlock {
  position: fixed;
  z-index: 100;
  height: 33px;
  width: 100%;
  top: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  -webkit-app-region: drag;
  background-color: #f4c8d8;
}
</style>
