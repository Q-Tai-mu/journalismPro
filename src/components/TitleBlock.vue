<template>
  <div
    id="titleBlock"
    :style="backCard == 'No' ? '' : 'background-color:#2d2d2d;'"
  >
    <div class="titleName">
      <div class="iconTitle">
        <svg
          t="1687858605424"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3344"
          width="16"
          height="16"
        >
          <path
            d="M520.2 520m-450 0a450 450 0 1 0 900 0 450 450 0 1 0-900 0Z"
            fill="#72E798"
            opacity=".6"
            p-id="3345"
          ></path>
          <path
            d="M572.6 367.8l-7.7-23c-7.2-21.2-30.1-32.7-51.4-25.5l-144.7 48.6h203.8z m0 0"
            fill="#13D48D"
            p-id="3346"
          ></path>
          <path
            d="M654.4 376.1l-7.8-23.2c-7.2-21.3-30.3-32.9-51.7-25.7L449.4 376h205z m0 0"
            fill="#13D48D"
            p-id="3347"
          ></path>
          <path
            d="M700.7 722.8H339.6c-24.1 0-43.7-19.6-43.7-43.7V399.5c0-24.1 19.6-43.7 43.7-43.7h361.2c24.1 0 43.7 19.6 43.7 43.7v279.6c-0.1 24.2-19.6 43.7-43.8 43.7z m0 0"
            fill="#13D48D"
            p-id="3348"
          ></path>
          <path
            d="M626 580.3c-22.4 0-40.5-18.1-40.5-40.5s18.1-40.5 40.5-40.5l118.6-0.9v81.1l-118.6 0.8z m0 0"
            fill="#FFFFFF"
            p-id="3349"
          ></path>
          <path
            d="M662.1 540.3c0 7.3 3.9 14 10.2 17.6 6.3 3.6 14 3.6 20.3 0 6.3-3.6 10.2-10.3 10.2-17.6 0-7.3-3.9-14-10.2-17.6-6.3-3.6-14-3.6-20.3 0a20.25 20.25 0 0 0-10.2 17.6z m0 0"
            fill="#13D48D"
            p-id="3350"
          ></path>
        </svg>
      </div>
      <div class="titleText" :style="backCard == 'No' ? '' : 'color:#eaeaea;'">
        优秀APP
      </div>
    </div>
    <div class="ternarySetUp">
      <div class="ternarySetUpIcon" @click="onBlockTitleButton()">
        <svg
          t="1634443017395"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="22215"
          width="18"
          height="18"
        >
          <path
            d="M696.814933 119.466667H326.741333a68.266667 68.266667 0 0 0-59.306666 34.440533l-185.019734 324.266667a68.266667 68.266667 0 0 0 0 67.652266l185.019734 324.266667A68.266667 68.266667 0 0 0 326.741333 904.533333h370.0736a68.266667 68.266667 0 0 0 59.255467-34.372266l185.463467-324.266667a68.266667 68.266667 0 0 0 0-67.7888l-185.463467-324.266667A68.266667 68.266667 0 0 0 696.832 119.466667z m-370.0736 68.266666h370.0736l185.463467 324.266667-185.463467 324.266667H326.741333L141.704533 512l185.0368-324.266667z"
            fill="#444444"
            p-id="22216"
          ></path>
          <path
            d="M512 358.4a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 0 0 0-307.2z m0 68.266667a85.333333 85.333333 0 1 1 0 170.666666 85.333333 85.333333 0 0 1 0-170.666666z"
            fill="#00B386"
            p-id="22217"
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
        <div
          class="ternarySetUpModelButton"
          :class="backCard == 'No' ? 'ModelButtonSex' : ''"
          @click="onBlockTitleButtonCex()"
        >
          <span>浅</span>
        </div>
      </div>
      <!-- 下边的缩小关闭按钮 -->
      <div
        :class="backCard == 'No' ? 'ternarySetUpGuid' : 'ternarySetUpGuidDeep'"
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
      <!-- <div class="BinarylinkageGan">
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
      </div> -->

      <!-- <div class="Binarylinkage" >
        <svg
          t="1636216526439"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="15906"
          width="18"
          height="18"
        >
          <path
            d="M204.8 675.84a10.24 10.24 0 0 1 10.16832 9.04192L215.04 686.08v122.88h194.56a10.24 10.24 0 0 1 10.16832 9.04192L419.84 819.2a10.24 10.24 0 0 1-9.04192 10.16832L409.6 829.44H204.8a10.24 10.24 0 0 1-10.16832-9.04192L194.56 819.2V686.08a10.24 10.24 0 0 1 10.24-10.24z m614.4-10.24a10.24 10.24 0 0 1 10.16832 9.04192L829.44 675.84v143.36a10.24 10.24 0 0 1-9.04192 10.16832L819.2 829.44H614.4a10.24 10.24 0 0 1-1.19808-20.40832L614.4 808.96h194.56V675.84a10.24 10.24 0 0 1 9.04192-10.16832L819.2 665.6zM675.84 399.36a10.24 10.24 0 0 1 10.24 10.24v204.8a10.24 10.24 0 0 1-10.24 10.24H348.16a10.24 10.24 0 0 1-10.24-10.24V409.6a10.24 10.24 0 0 1 10.24-10.24z m-10.24 20.48H358.4v184.32h307.2V419.84zM409.6 194.56a10.24 10.24 0 0 1 1.19808 20.40832L409.6 215.04H215.04v133.12a10.24 10.24 0 0 1-9.04192 10.16832L204.8 358.4a10.24 10.24 0 0 1-10.16832-9.04192L194.56 348.16V204.8a10.24 10.24 0 0 1 9.04192-10.16832L204.8 194.56h204.8z m409.6 0a10.24 10.24 0 0 1 10.16832 9.04192L829.44 204.8v143.36a10.24 10.24 0 0 1-20.40832 1.19808L808.96 348.16V215.04H614.4a10.24 10.24 0 0 1-10.16832-9.04192L604.16 204.8a10.24 10.24 0 0 1 9.04192-10.16832L614.4 194.56h204.8z"
            p-id="15907"
          ></path>
        </svg>
      </div>
      <div class="Binarylinkage" >
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
      </div> -->
    </div>
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
      :styles="{top: '120px',width:'320px'}"
    
    >
    <at-input  v-model="inputValue" placeholder="输入本番名"></at-input>
    </at-modal>
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
      modal1:false,
      inputValue:""
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
    ...mapMutations(["SET_BACKCARD", "SET_VIEW","SET_HURL"]),
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
      if(this.inputValue) {
        this.hurl = "https://hanime1.me/comics/search?query="+this.inputValue;
      }else {
        this.hurl = "";
      }
     
      this.$Message("Confirm");
    },
    handleCancel() {
      this.$Message("Cancel");
    },
    minWindow() {
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
  background-color: #eaeaea;

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
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(183, 27, 27);
  transition: all 0.2s ease-in-out;
}
.ternarySetUpModel {
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 25px;
  background-color: #ffffff;
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
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}
.ternaryClss {
  width: 90px;
  height: 26px;
  background-color: #f8fcff;
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
  float: right;
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
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  -webkit-app-region: drag;
  background-color: #f3f3f3;
}
</style>
