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
            class="ternaryClss titleBlockButton"
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
          :showClose="false"
          :styles="{ top: '40%', width: '320px' }"
        >
          <div slot="header" style="text-align: center">
            <span style="font-weight: bold">搜索本番</span>
          </div>
          <at-input v-model="inputValue" placeholder="输入本番名"></at-input>

          <div
            slot="footer"
            style="
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <at-button
              style="
                width: 50px;
                flex: 1 1 auto;
                border-color: #b11100 !important;
                background-color: #b11100 !important;
              "
              type="error"
              @click="handleCancel"
              >关闭</at-button
            >
            <at-button
              style="
                width: 50px;
                flex: 1 1 auto;
                border-color: #06b100 !important;
                background-color: #06b100 !important;
              "
              type="error"
              @click="handleConfirm"
              >搜索</at-button
            >
          </div>
        </at-modal>
        <div class="Ternarylinkage">
          <div
            class="ternaryClss titleBlockButton"
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
              <div v-if="offet == true">
                <svg
                  t="1704251047667"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9469"
                  width="18"
                  height="18"
                >
                  <path
                    d="M512 512m-388 0a388 388 0 1 0 776 0 388 388 0 1 0-776 0Z"
                    fill="#37b940"
                    p-id="9470"
                    data-spm-anchor-id="a313x.search_index.0.i13.74563a81Mj49nN"
                    class="selected"
                  ></path>
                  <path
                    d="M372.31 423.511m-52.511 0a52.511 52.511 0 1 0 105.022 0 52.511 52.511 0 1 0-105.022 0Z"
                    fill="#231815"
                    p-id="9471"
                  ></path>
                  <path
                    d="M651.69 423.511m-52.511 0a52.511 52.511 0 1 0 105.022 0 52.511 52.511 0 1 0-105.022 0Z"
                    fill="#231815"
                    p-id="9472"
                  ></path>
                  <path
                    d="M510.431 637.01c-49.543 0-96.608-21.465-129.126-58.892-9.056-10.422-7.948-26.212 2.475-35.269 10.423-9.057 26.213-7.948 35.269 2.475 23.018 26.492 56.325 41.686 91.383 41.686 36.615 0 70.872-16.323 93.986-44.784 8.704-10.718 24.448-12.351 35.167-3.646 10.718 8.704 12.35 24.449 3.646 35.167-32.653 40.204-81.057 63.263-132.8 63.263z"
                    fill="#FFFFFF"
                    p-id="9473"
                  ></path>
                </svg>
              </div>
              <div v-if="offet == false">
                <svg
                  t="1704251151003"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10733"
                  width="18"
                  height="18"
                >
                  <path
                    d="M542.72 131.072c219.136 0 396.288 177.664 396.288 396.288s-177.664 396.288-396.288 396.288-396.288-177.152-396.288-396.288S323.584 131.072 542.72 131.072z"
                    fill="#e23b25"
                    p-id="10734"
                    data-spm-anchor-id="a313x.search_index.0.i23.74563a81Mj49nN"
                    class="selected"
                  ></path>
                  <path
                    d="M286.72 370.176c0-12.8-10.24-23.04-23.04-23.04s-23.04 10.24-23.04 23.04c0 23.04 9.216 44.032 24.576 58.88 14.848 14.848 35.84 24.064 58.88 24.064s44.032-9.216 58.88-24.064c14.848-14.848 24.576-35.84 24.576-58.88 0-12.8-10.24-23.04-23.04-23.04s-23.04 10.24-23.04 23.04c0 10.24-4.096 19.456-10.752 26.112-6.656 6.656-15.872 10.752-26.112 10.752-10.24 0-19.456-4.096-26.112-10.752-7.68-6.656-11.776-15.872-11.776-26.112z m373.76 0c0-12.8-10.24-23.04-23.04-23.04s-23.04 10.24-23.04 23.04c0 23.04 9.216 44.032 24.576 58.88 14.848 14.848 35.84 24.064 58.88 24.064s44.032-9.216 58.88-24.064 24.576-35.84 24.576-58.88c0-12.8-10.24-23.04-23.04-23.04s-23.04 10.24-23.04 23.04c0 10.24-4.096 19.456-10.752 26.112s-15.872 10.752-26.112 10.752-19.456-4.096-26.112-10.752c-7.68-6.656-11.776-15.872-11.776-26.112z m-352.768 344.064c0 12.8 10.24 23.04 23.04 23.04s23.04-10.24 23.04-23.04c0-43.008 17.408-82.432 45.568-110.592s67.584-45.568 110.592-45.568c43.008 0 82.432 17.408 110.592 45.568l1.024 1.024c27.648 28.16 44.544 66.56 44.544 109.568 0 12.8 10.24 23.04 23.04 23.04s23.04-10.24 23.04-23.04c0-55.296-22.016-105.472-57.856-141.824l-1.536-1.536c-36.864-36.352-87.552-59.392-143.36-59.392-55.808 0-107.008 22.528-143.36 59.392-35.84 36.864-58.368 87.552-58.368 143.36z"
                    p-id="10735"
                  ></path>
                  <path
                    d="M243.712 824.32c11.264-5.632 25.088-1.024 31.232 10.752 5.632 11.264 1.024 25.088-10.752 30.72L143.36 925.184l-1.024 0.512c-5.632 2.56-12.8 5.12-19.968 5.12h-0.512c-6.656 0-13.312-1.536-18.944-5.632-6.656-4.608-11.776-11.776-13.312-21.504-1.024-6.656 0-14.848 3.072-24.576l43.008-128c-22.016-33.792-39.424-71.168-51.712-110.592-12.8-41.984-19.968-86.016-19.968-132.096 0-123.392 50.176-235.008 131.072-315.392s192.512-130.56 316.416-130.56c123.392 0 235.008 50.176 315.904 130.56s131.072 192.512 131.072 315.904-50.176 235.008-131.072 315.392-192.512 130.56-315.904 130.56c-27.136 0-53.76-2.56-79.872-7.168-26.624-4.608-52.736-11.776-77.312-21.504-11.776-4.608-17.92-17.92-13.312-29.696 4.608-11.776 17.92-17.92 29.696-13.312 22.528 8.192 45.568 14.848 69.12 18.944 23.04 4.096 47.104 6.144 71.68 6.144 110.592 0 210.944-45.056 283.136-117.248S911.36 618.496 911.36 508.416s-45.056-210.432-117.248-283.136c-72.704-72.192-172.544-117.248-283.136-117.248-110.592 0-210.944 45.056-283.648 117.248s-117.76 172.544-117.76 283.136c0 41.472 6.144 80.896 17.92 118.272 11.776 38.4 29.184 74.24 51.712 106.496 5.12 6.656 6.656 15.36 3.072 23.552l-39.424 117.248 100.864-49.664z"
                    fill="#333333"
                    p-id="10736"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            class="ternaryClss titleBlockButton"
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
        <div class="Ternarylinkage">
          <div
            class="ternaryClss titleBlockButton"
            v-show="view == 'No2On' ? true : false"
            @click="onClickViewOn1on3()"
            :style="
              backCard == 'No'
                ? ''
                : 'background-color: rgb(52, 52, 52); border: 1px solid rgb(59, 59, 59);'
            "
          >
            <span style="font-size: 13px">回到主页</span>
            <div style="float: right; margin-top: 2px; margin-right: 2px">
              <div v-if="offet == true"></div>
              <div v-if="offet == false"></div>
              <svg
                t="1703215226194"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5902"
                width="15"
                height="15"
              >
                <path
                  d="M230.4 992c-64 0-115.2-51.2-115.2-115.2L115.2 544 76.8 582.4C70.4 588.8 57.6 595.2 44.8 595.2c-12.8 0-25.6-6.4-32-12.8C6.4 569.6 0 556.8 0 544 0 537.6 6.4 524.8 12.8 512l467.2-467.2C486.4 38.4 499.2 32 512 32s25.6 6.4 32 12.8L1011.2 512C1017.6 524.8 1024 537.6 1024 544c0 12.8-6.4 25.6-12.8 32-6.4 6.4-19.2 12.8-32 12.8s-25.6-6.4-32-12.8L512 147.2 211.2 448l0 422.4c0 12.8 12.8 25.6 25.6 25.6l115.2 0 0-185.6c0-25.6 19.2-44.8 44.8-44.8l230.4 0c25.6 0 44.8 19.2 44.8 44.8s-19.2 44.8-44.8 44.8L441.6 755.2l0 185.6c0 25.6-19.2 44.8-44.8 44.8L230.4 985.6zM627.2 992c-25.6 0-44.8-19.2-44.8-44.8 0-25.6 19.2-44.8 44.8-44.8l160 0c12.8 0 25.6-12.8 25.6-25.6l0-256c0-25.6 19.2-44.8 44.8-44.8 25.6 0 44.8 19.2 44.8 44.8l0 256c0 64-51.2 115.2-115.2 115.2L627.2 992z"
                  fill="#305AB7"
                  p-id="5903"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style="flex: 20%">
        <div class="ternarySetUp">
          <div
            class="ternarySetUpIcon titleBlockButtonIcon"
            @click="onBlockTitleButton()"
          >
            <svg
              t="1704249579442"
              class="icon"
              viewBox="0 0 1028 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4602"
              width="20"
              height="20"
            >
              <path
                d="M1016.1 418.5c-9.9-34.5-38.1-60.6-73.3-67.8-72.3-14.9-97.9-59.3-74.7-129.3 11.3-34.1 2.8-71.5-22.1-97.3C804.7 81.2 742.1 45 684.2 30.6c-34.8-8.7-71.5 2.7-95.4 29.5-49 55.2-100.3 55.2-149.3 0-23.8-26.8-60.5-38.2-95.4-29.5-57.8 14.4-120.4 50.6-161.8 93.5-24.9 25.8-33.4 63.3-22.1 97.3 23.3 70.1-2.3 114.5-74.7 129.3C50.4 358 22.2 384 12.3 418.5c-16.4 57.3-16.4 129.6 0 187C22.2 640 50.4 666 85.5 673.3c72.3 14.9 97.9 59.3 74.7 129.3-11.3 34-2.8 71.5 22.1 97.3 41.4 42.9 104.1 79 161.9 93.5 34.8 8.7 71.5-2.7 95.4-29.5 49-55.2 100.3-55.2 149.3 0 23.8 26.8 60.5 38.2 95.4 29.5 57.8-14.4 120.5-50.6 161.9-93.5 24.9-25.8 33.4-63.3 22.1-97.3-23.3-70.1 2.3-114.5 74.7-129.3 35.2-7.2 63.4-33.3 73.3-67.8 16.3-57.3 16.3-129.7-0.2-187zM514.2 736c-123.7 0-224-100.3-224-224s100.3-224 224-224 224 100.3 224 224-100.3 224-224 224z"
                p-id="4603"
                fill="#8090c9"
              ></path>
              <path
                d="M674.2 512c0 42.7-16.6 82.9-46.9 113.1C597.1 655.4 556.9 672 514.2 672s-82.9-16.6-113.1-46.9C370.8 594.9 354.2 554.7 354.2 512s16.6-82.9 46.9-113.1C431.3 368.6 471.5 352 514.2 352s82.9 16.6 113.1 46.9C657.6 429.1 674.2 469.3 674.2 512z"
                p-id="4604"
                fill="#8090c9"
              ></path>
            </svg>
          </div>
          <!-- 左边的深浅模式切换按钮 -->

          <!-- 下边的缩小关闭按钮 -->
          <div
            :class="
              backCard == 'No' ? 'ternarySetUpGuid' : 'ternarySetUpGuidDeep'
            "
            v-show="buttonTitle"
          >
            <div
              class="ternarySetUpGuidButton titleBlockButton"
              @click="closeWindow()"
            >
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
            <div
              class="ternarySetUpGuidButton titleBlockButton"
              @click="minWindow()"
            >
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
    onClickViewOn1on() {
      if (this.offet == false) {
        this.$Message("正在重新尝试连接服务器");
        axios
          .get("https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA&page=0")
          .then((resp) => {
            console.log(resp);
            this.offet = true;
            const date = new Date();
            const milliseconds = date.getTime();
            this.hurl =
              "https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA&query=&time=" +
              milliseconds;
          })
          .catch((err) => {
            this.offet = false;
            this.$Message.error("网络问题");
            console.log(err);
          });
      }else {
        this.$Message("目前网络一切正常");
      }
    },
    onClickViewOn1on3() {
      const date = new Date();
      const milliseconds = date.getTime();
      this.hurl =
        "https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA&query=&time=" +
        milliseconds;
    },
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
      this.modal1 = false;
      this.$Message("搜索中");
    },
    handleCancel() {
      this.modal1 = false;
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
      .get("https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA&page=0")
      .then((resp) => {
        console.log(resp);
        this.offet = true;
      })
      .catch((err) => {
        this.offet = false;
        this.$Message.error("网络问题");
        console.log(err);
      });
  },
};
</script>
<style>
.titleBlockButtonIcon {
  transition: transform 0.3s, box-shadow 0.3s !important;
}

.titleBlockButtonIcon:hover {
  /* box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); */

  /* transition-delay: 0s !important; */
  /* border: 1px solid #78a4fa; */

  /* transform: translateY(-10px)  !important; */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  transform: rotate(360deg);
  /* animation: sparkle 0.5s infinite; */
}
.titleBlockButton {
  transition: transform 0.3s, box-shadow 0.3s !important;
}

.titleBlockButton:hover {
  /* box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); */

  /* transition-delay: 0s !important; */
  /* border: 1px solid #78a4fa; */

  /* transform: translateY(-10px)  !important; */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  /* animation: sparkle 0.5s infinite; */
}
.elementC {
  transition: width 0.5s ease-in-out;
}

.elementC:hover {
  width: 100%;
}
.elementX {
  transition: transform 0.5s ease-in-out;
}

.elementX:hover {
  transform: translateY(0);
  /* animation: enlargeAndRotate 3s infinite; */
}

@keyframes enlargeAndRotate {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1.5) rotate(360deg);
  }
}

@keyframes sparkleX {
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
}
.elementF {
  transition: transform 0.5s ease-in-out;
}

.elementF:hover {
  /* transform: rotate(360deg) scale(1.2);
   */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}
.ternarySetUpGuidButton {
  height: 20px;
  border-radius: 3px;
  box-shadow: none;
  -webkit-app-region: no-drag;
}

/* .ternarySetUpGuidButton:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
} */

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
  background-color: rgb(52, 52, 52);
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
  height: 20px;
  width: 20px;
  border-radius: 10px;
}

/* .ternarySetUpIcon:hover {

  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-in-out;
} */

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
/* 
.ternaryClss:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-in-out;
} */

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
  background-color: #f4f3ee;
}
</style>
