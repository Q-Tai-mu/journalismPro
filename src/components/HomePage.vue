<template>
  <div
    v-show="false"
    ref="scrollBar"
    id="homePage"
    class="NeworldscroE animate__animated animate__fadeInUp"
    @scroll="handleScroll($event)"
  >
    <!-- 分类 -->
    <div
      style="
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin: 0 10px;
        position: relative;
        z-index: 3;
      "
    >
      <div
        style="flex: 1 1 auto; padding: 10px"
        v-for="item in classFx"
        :key="item.id"
      >
        <div>
          <span style="color: #ddd6d6">{{ item.name }}</span>
        </div>
        <at-select
          multiple
          placeholder="请选择"
          v-model="item.value"
          class="element animate__animated animate__bounceInRight"
          :style="
            backCard == 'No'
              ? 'width:100px;background-color:rgb(39, 39, 39);border-radius: 5px;'
              : 'width:100px;background-color:rgb(39, 39, 39);border-radius: 5px;'
          "
        >
          <!-- &tags%5B%5D=無碼 -->
          <at-option
            :value="itemX.name"
            v-for="itemX in item.data"
            :key="itemX.id"
            >{{ itemX.name }}</at-option
          >
        </at-select>
      </div>
      <div
        style="
          margin-right: 5px;
          display: flex;
          justify-items: center;
          align-items: center;
          flex-direction: column;
        "
      >
        <div>
          <span style="color: #ddd6d6">刷新</span>
        </div>
        <at-button
          icon="icon-refresh-cw"
          style="width: 50px; flex: 1 1 auto"
          type="error"
          @click="classification"
        ></at-button>
      </div>
      <div>
        <div>
          <span style="color: #ddd6d6">默认值</span>
        </div>
        <at-button
          icon="icon-refresh-cw"
          style="width: 50px; flex: 1 1 auto"
          type="error"
          @click="classificationRestore"
        ></at-button>
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 0 10px;
      "
    >
      <div
        :class="
          backCard == 'No'
            ? 'homeCard'
            : 'animate__animated animate__flipInX  homeCardDeep'
        "
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

    <at-modal
      v-model="modal3"
      :showClose="false"
      :maskClosable="false"
      :styles="{ top: Notice.VertexHeight, width: '350px' }"
    >
      <div slot="header" style="text-align: center">
        <span style="font-weight: bold">{{ Notice.windowTitle }}</span>
      </div>
      <div style="color: #d6d6d6">
        <p style="color: #d6d6d6; font-size: 14px; font-weight: bold">
          {{ Notice.version }}
        </p>
        <p style="color: #d6d6d6">{{ Notice.UpdateDate }}</p>
        <p style="color: #d6d6d6; font-weight: bold">更改记录</p>
        <p
          style="
            color: rgb(214, 214, 214);
            font-weight: bold;
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: flex-start;
          "
        >
          <svg
            t="1704162603045"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4622"
            width="25"
            height="25"
          >
            <path
              d="M599.18848 470.48704m-345.18528 0a345.18528 345.18528 0 1 0 690.37056 0 345.18528 345.18528 0 1 0-690.37056 0Z"
              fill="#FFEC43"
              p-id="4623"
            ></path>
            <path
              d="M599.18336 823.5264c-194.66752 0-353.04448-158.37696-353.04448-353.04448S404.52096 117.4528 599.18336 117.4528s353.04448 158.36672 353.04448 353.02912-158.37696 353.04448-353.04448 353.04448z m0-690.37568c-186.00448 0-337.33632 151.33696-337.33632 337.33632 0 186.0096 151.32672 337.34656 337.33632 337.34656s337.33632-151.33696 337.33632-337.34656c0-185.99936-151.32672-337.33632-337.33632-337.33632z"
              fill="#6B0204"
              p-id="4624"
            ></path>
            <path
              d="M203.83232 770.58048c4.26496 5.56032 2.176 14.32064-4.66944 19.56864l-65.33632 50.10944c-6.84544 5.248-15.8464 4.99712-20.11136-0.5632-4.26496-5.56032-2.176-14.32064 4.66944-19.56864l65.33632-50.10944c6.84032-5.248 15.8464-4.99712 20.11136 0.5632zM218.85952 852.56704c4.26496 5.56032 2.176 14.32064-4.66944 19.56864l-65.33632 50.10944c-6.84544 5.248-15.8464 4.99712-20.11136-0.5632-4.26496-5.56032-2.176-14.32064 4.66944-19.56864l65.33632-50.10944c6.84544-5.25312 15.8464-4.99712 20.11136 0.5632zM128.55296 734.81216c4.26496 5.56032 2.176 14.32064-4.66944 19.56864l-65.33632 50.10944c-6.84544 5.248-15.8464 4.99712-20.11136-0.5632-4.26496-5.56032-2.176-14.32064 4.66944-19.56864l65.33632-50.10944c17.48992-13.41952 21.73952 2.688 20.11136 0.5632z"
              fill="#6C0000"
              p-id="4625"
            ></path>
            <path
              d="M336.03584 451.57376S241.68448 394.15808 71.5264 538.3168l164.0192 72.28928 100.49024-159.03232z"
              fill="#BED5E9"
              p-id="4626"
            ></path>
            <path
              d="M238.5664 620.52864l-181.69344-80.09216 9.57952-8.1152c97.44896-82.55488 171.008-99.8912 215.552-99.8912 37.248 0 57.27232 11.92448 58.112 12.43648l6.81984 4.15232-108.36992 171.50976z m-152.2688-84.28032l146.22208 64.44544 92.05248-145.67424c-7.98208-2.96448-22.34368-6.87616-42.56768-6.87616-40.45824 0-106.7776 15.55456-195.70688 88.10496z"
              fill="#6C0000"
              p-id="4627"
            ></path>
            <path
              d="M538.85952 716.04224s30.98624 106.0096-152.36608 232.96512l-27.28448-177.152 179.65056-55.81312z"
              fill="#BED5E9"
              p-id="4628"
            ></path>
            <path
              d="M380.64128 962.60608l-30.22848-196.2496 193.74592-60.17536 2.23744 7.66976c1.33632 4.55168 30.4384 112.92672-155.43808 241.6128l-10.3168 7.1424z m-12.64128-185.25696l24.31488 157.93152c138.07616-99.41504 142.6688-183.49568 140.26752-209.05984l-164.5824 51.12832z"
              fill="#6C0000"
              p-id="4629"
            ></path>
            <path
              d="M581.10464 683.12064c151.43424-116.13696 228.90496-269.3376 173.04064-342.18496-55.86944-72.84736-223.91808-37.75488-375.35744 78.38208-98.62656 75.63776-165.8368 166.98368-185.31328 241.63328l0.0512 0.01536a4.06016 4.06016 0 0 0-0.41472 1.49504c-0.1792 2.53952 93.87008 32.74752 100.48512 131.67616 0.0768 1.14176 0.53248 2.2528 1.23392 3.16928 0.896 1.16736 2.19648 2.01728 3.60448 2.22208a3.82976 3.82976 0 0 0 1.3568-0.09216c77.12768 0.50688 182.72768-40.71424 281.31328-116.31616z"
              fill="#BED5E9"
              p-id="4630"
            ></path>
            <path
              d="M298.81344 807.40864l-1.6128-0.128c-3.28704-0.47104-6.46656-2.39104-8.6272-5.22752a13.4144 13.4144 0 0 1-2.816-7.4496c-3.56864-53.248-34.176-94.38208-90.98752-122.20416-5.74464-2.81088-9.89696-4.84352-9.50272-10.48064 0.07168-1.024 0.27648-2.01728 0.62464-3.01568 20.77184-79.52896 91.08992-171.4176 188.11392-245.81632 96.32256-73.87648 202.75712-117.9904 284.71296-117.9904 45.90592 0 81.05472 14.20288 101.65248 41.05728 58.40384 76.16512-19.87072 234.60864-174.4896 353.20832-96.29696 73.84064-202.71616 117.9392-284.672 117.9392h-0.00512l-2.39104 0.10752z m-96.55808-148.82816c61.14304 30.12608 94.44864 74.86464 99.02592 133.00736 78.60736-0.0256 181.41696-42.89536 275.04128-114.70336 147.74784-113.32096 224.72192-261.88288 171.58656-331.17184-17.5104-22.83008-48.35328-34.90816-89.1904-34.90816-78.61248 0-181.47328 42.89536-275.15392 114.75456-92.58496 70.9888-160 157.73696-181.30944 233.02144z"
              fill="#6C0000"
              p-id="4631"
            ></path>
            <path
              d="M503.3216 728.69376L312.61696 477.37856a598.7328 598.7328 0 0 0-29.91616 33.96608l180.04992 237.28128a595.5584 595.5584 0 0 0 40.57088-19.93216z"
              fill="#FFFFFF"
              p-id="4632"
            ></path>
            <path
              d="M460.2624 758.32832L272.7168 511.1808l3.89632-4.79232a613.08416 613.08416 0 0 1 30.30016-34.42176l6.36416-6.71232 201.85088 266.01472-8.08448 4.34688a605.71648 605.71648 0 0 1-41.09824 20.18304l-5.6832 2.52928zM292.7104 511.55456l172.51328 227.34848a601.32864 601.32864 0 0 0 26.24512-12.82048L311.99232 489.54368a587.58656 587.58656 0 0 0-19.28192 22.01088z"
              fill="#6C0000"
              p-id="4633"
            ></path>
            <path
              d="M419.3792 774.8352l-171.10528-223.10912c-6.89152 8.62208-14.73536 20.84864-20.15232 33.6896l152.36096 200.97536c10.88512-1.45408 28.77952-7.13728 38.89664-11.55584z"
              fill="#FFFFFF"
              p-id="4634"
            ></path>
            <path
              d="M376.9856 794.76736l-157.86496-208.22528 1.7664-4.17792c5.06368-12.01664 12.80512-24.96512 21.248-35.5328l6.26176-7.84896 183.31648 239.03232-9.1904 4.01408c-10.58304 4.62848-29.27616 10.58304-41.00608 12.14464l-4.5312 0.59392z m-139.8016-210.39616l146.688 193.47456c6.85568-1.36704 15.47264-3.91168 22.912-6.53312L248.39168 564.7872a143.44704 143.44704 0 0 0-11.20768 19.584z"
              fill="#6C0000"
              p-id="4635"
            ></path>
            <path
              d="M556.5184 492.27264m-71.2192 0a71.2192 71.2192 0 1 0 142.4384 0 71.2192 71.2192 0 1 0-142.4384 0Z"
              fill="#ECF3FE"
              p-id="4636"
            ></path>
            <path
              d="M556.5184 571.33056c-43.5968 0-79.07328-35.456-79.07328-79.0528s35.47648-79.06816 79.07328-79.06816 79.06816 35.47136 79.06816 79.06816-35.46624 79.0528-79.06816 79.0528z m0-142.42304c-34.93888 0-63.36512 28.42624-63.36512 63.37024 0 34.93376 28.42624 63.36 63.36512 63.36s63.36-28.42624 63.36-63.36c0-34.944-28.42112-63.37024-63.36-63.37024z"
              fill="#6C0000"
              p-id="4637"
            ></path>
            <path
              d="M577.90464 436.29056c19.53792 10.0096 27.80672 33.41824 25.20064 56.7296-5.67808 50.88256-65.88416 56.3712-71.92576 54.3488a60.13952 60.13952 0 0 0 27.50976 6.6304c33.37216 0 60.42624-27.05408 60.42624-60.42624 0-26.6496-17.26464-49.2544-41.21088-57.28256z"
              fill="#BED5E9"
              p-id="4638"
            ></path>
            <path
              d="M953.2416 170.83392m-38.42048 0a38.42048 38.42048 0 1 0 76.84096 0 38.42048 38.42048 0 1 0-76.84096 0Z"
              fill="#FFC700"
              p-id="4639"
            ></path>
            <path
              d="M953.24672 217.09824c-25.51808 0-46.2848-20.75648-46.2848-46.26944s20.7616-46.26944 46.2848-46.26944 46.27456 20.75648 46.27456 46.26944-20.75648 46.26944-46.27456 46.26944z m0-76.84096a30.60736 30.60736 0 0 0-30.57152 30.57152 30.60736 30.60736 0 0 0 30.57152 30.57152 30.60224 30.60224 0 0 0 30.5664-30.57152 30.60736 30.60736 0 0 0-30.5664-30.57152z"
              fill="#6C0000"
              p-id="4640"
            ></path>
            <path
              d="M219.4944 205.66016m-28.81536 0a28.81536 28.81536 0 1 0 57.63072 0 28.81536 28.81536 0 1 0-57.63072 0Z"
              fill="#6C0000"
              p-id="4641"
            ></path>
          </svg>
          功能
        </p>
        <div style="padding-left: 30px" v-html="Notice.UpdateLog"></div>
        <p
          style="
            color: rgb(214, 214, 214);
            font-weight: bold;
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: flex-start;
          "
        >
          <svg
            t="1704162846032"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6593"
            width="24"
            height="24"
          >
            <path
              d="M901.9 513.6c-10.7-13.7-27-29.6-50.4-40.7-14.1-6.7-29.3-10.9-44.9-12.6-11.2-1.2-20.7 8.1-20.2 19.4 0.4 9.3 7.6 16.6 16.8 17.6 9.6 1.1 20.9 3.6 32.5 9.1 17.2 8.1 29.2 19.9 37 30 5.6 7.3 15.7 9.4 23.7 4.9 9.9-5.5 12.5-18.7 5.5-27.7zM826.7 569c-14.1-6.7-29.3-10.9-44.9-12.6-11.2-1.2-20.7 8.1-20.2 19.4 0.4 9.3 7.6 16.6 16.8 17.6 9.6 1.1 20.9 3.6 32.5 9.1 17.2 8.1 29.2 19.9 37 30 5.6 7.3 15.7 9.4 23.7 4.9 10-5.6 12.6-18.7 5.5-27.7-10.7-13.7-27-29.6-50.4-40.7zM783.4 680.4c-14.1-6.7-29.3-10.9-44.9-12.6-11.2-1.2-20.7 8.1-20.2 19.4 0.4 9.3 7.6 16.6 16.8 17.6 9.6 1.1 20.9 3.6 32.5 9.1 17.2 8.1 29.2 19.9 37 30 5.6 7.3 15.7 9.4 23.7 4.9 10-5.6 12.6-18.7 5.5-27.7-10.7-13.7-27-29.6-50.4-40.7z"
              fill="#004D40"
              p-id="6594"
            ></path>
            <path
              d="M176.9 857.9m-58.8 0a58.8 58.8 0 1 0 117.6 0 58.8 58.8 0 1 0-117.6 0Z"
              fill="#388E3C"
              p-id="6595"
            ></path>
            <path
              d="M266.7 879.5m-80.5 0a80.5 80.5 0 1 0 161 0 80.5 80.5 0 1 0-161 0Z"
              fill="#8BC34A"
              p-id="6596"
            ></path>
            <path
              d="M381.2 870.2m-89.8 0a89.8 89.8 0 1 0 179.6 0 89.8 89.8 0 1 0-179.6 0Z"
              fill="#388E3C"
              p-id="6597"
            ></path>
            <path
              d="M480.2 814.5m-102.1 0a102.1 102.1 0 1 0 204.2 0 102.1 102.1 0 1 0-204.2 0Z"
              fill="#8BC34A"
              p-id="6598"
            ></path>
            <path
              d="M557.6 743.4m-111.4 0a111.4 111.4 0 1 0 222.8 0 111.4 111.4 0 1 0-222.8 0Z"
              fill="#388E3C"
              p-id="6599"
            ></path>
            <path
              d="M635 659.8m-120.7 0a120.7 120.7 0 1 0 241.4 0 120.7 120.7 0 1 0-241.4 0Z"
              fill="#8BC34A"
              p-id="6600"
            ></path>
            <path
              d="M669 557.7m-130 0a130 130 0 1 0 260 0 130 130 0 1 0-260 0Z"
              fill="#388E3C"
              p-id="6601"
            ></path>
            <path
              d="M681.4 440m-142.4 0a142.4 142.4 0 1 0 284.8 0 142.4 142.4 0 1 0-284.8 0Z"
              fill="#8BC34A"
              p-id="6602"
            ></path>
            <path
              d="M690.7 294.6m-157.8 0a157.8 157.8 0 1 0 315.6 0 157.8 157.8 0 1 0-315.6 0Z"
              fill="#388E3C"
              p-id="6603"
            ></path>
            <path
              d="M451.9 504.9c7 5.9 17.3 5.8 24.2-0.3 9.6-8.5 23.6-17.7 42-22.4 12.4-3.2 23.9-3.6 33.6-2.8 9.2 0.8 17.7-5.1 19.8-14.1 2.6-10.9-5-21.9-16.2-22.8-15.6-1.3-31.4-0.1-46.5 3.8-25.1 6.5-44.1 19-57.2 30.4-8.5 7.4-8.4 20.8 0.3 28.2zM515.1 545.2c-25.1 6.5-44.1 19-57.2 30.4-8.6 7.5-8.5 20.9 0.2 28.3 7 5.9 17.3 5.8 24.2-0.3 9.6-8.5 23.6-17.7 42-22.4 12.4-3.2 23.9-3.6 33.6-2.8 9.2 0.8 17.7-5.1 19.8-14.1 2.6-10.9-5-21.9-16.2-22.8-15.5-1.5-31.3-0.2-46.4 3.7zM561.6 652.8c-15.6-1.3-31.4-0.1-46.5 3.8-25.1 6.5-44.1 19-57.2 30.4-8.6 7.5-8.5 20.9 0.2 28.3 7 5.9 17.3 5.8 24.2-0.3 9.6-8.5 23.6-17.7 42-22.4 12.4-3.2 23.9-3.6 33.6-2.8 9.2 0.8 17.7-5.1 19.8-14.1 2.7-11-4.9-21.9-16.1-22.9z"
              fill="#004D40"
              p-id="6604"
            ></path>
            <path
              d="M654.5 71.1c-9.5 12.5-16.9 26.5-21.7 41.3-8 24.7-7.6 47.4-4.9 64.6 1.8 11.3 13.1 18.4 24 15 8.8-2.8 14.1-11.5 12.7-20.6-2-12.7-2.3-29.4 3.6-47.5 3.9-12.2 9.8-22.1 15.6-29.9 5.6-7.4 5.1-17.7-1.3-24.3-7.9-8.1-21.2-7.5-28 1.4zM801.2 90.2c-4.3-10.4-16.9-14.7-26.5-8.9-13.4 8.1-25.4 18.5-35.3 30.5-16.5 20-24.4 41.4-28.2 58.3-2.5 11.2 5.4 21.9 16.8 22.7 9.2 0.6 17.4-5.5 19.4-14.5 2.8-12.5 8.6-28.2 20.7-42.9 8.1-9.9 17.2-17 25.5-22.1 7.8-4.8 11.2-14.6 7.6-23.1z"
              fill="#004D40"
              p-id="6605"
            ></path>
            <path
              d="M641.2 269.8m-46.4 0a46.4 46.4 0 1 0 92.8 0 46.4 46.4 0 1 0-92.8 0Z"
              fill="#FFEB3B"
              p-id="6606"
            ></path>
            <path
              d="M616.4 269.8m-21.7 0a21.7 21.7 0 1 0 43.4 0 21.7 21.7 0 1 0-43.4 0Z"
              fill="#4E342E"
              p-id="6607"
            ></path>
            <path
              d="M783.5 269.8m-46.4 0a46.4 46.4 0 1 0 92.8 0 46.4 46.4 0 1 0-92.8 0Z"
              fill="#FFEB3B"
              p-id="6608"
            ></path>
            <path
              d="M758.8 269.8m-21.7 0a21.7 21.7 0 1 0 43.4 0 21.7 21.7 0 1 0-43.4 0Z"
              fill="#4E342E"
              p-id="6609"
            ></path>
            <path
              d="M662.8 365.8c-5 12.7 1.9 28.6 12.4 37.1 14.5 11.8 33.3 7.2 37.1 6.2 23.5-6.4 40.8-33.6 43.3-68.1-33-5.3-56.2 1.5-68.1 6.2-19.8 7.8-23.6 15.9-24.7 18.6z"
              fill="#004D40"
              p-id="6610"
            ></path>
          </svg>
          Bug修复
        </p>
        <div style="padding-left: 30px" v-html="Notice.MaintenanceLog"></div>
        <p
          style="
            color: rgb(214, 214, 214);
            font-weight: bold;
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: flex-start;
          "
        >
          <svg
            t="1704162885102"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7808"
            width="24"
            height="24"
          >
            <path
              d="M115 321.1h792.8v624H115z"
              fill="#EB6836"
              p-id="7809"
            ></path>
            <path
              d="M115 321.1h792.8v103.4H115z"
              fill="#C74B38"
              p-id="7810"
            ></path>
            <path
              d="M953.4 288.4L832.3 185.1c-2.5-2.1-5.6-3.3-8.9-3.3h-59.6v-30.5c0-7.6-6.2-13.8-13.8-13.8h-34v-60c0-7.6-6.2-13.8-13.8-13.8H320.5c-7.6 0-13.8 6.2-13.8 13.8v60h-34c-7.6 0-13.8 6.2-13.8 13.8v30.5h-63.3c-3.3 0-6.6 1.2-9.1 3.4L69.2 288.6c-3 2.6-4.7 6.4-4.7 10.4v77.5c0 7.6 6.2 13.8 13.8 13.8h22.9V443c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.2 13.8-13.8v-52.6h134v48.9c0 7.6 6.2 13.8 13.8 13.8h88.1c7.6 0 13.8-6.2 13.8-13.8v-48.9h266.1v48.9c0 7.6 6.2 13.8 13.8 13.8h88.1c7.6 0 13.8-6.2 13.8-13.8v-48.9h134v540.9H128.7V516.8c0-7.6-6.2-13.8-13.8-13.8-7.6 0-13.8 6.2-13.8 13.8v428.3c0 7.6 6.2 13.8 13.8 13.8h792.8c7.6 0 13.8-6.2 13.8-13.8V390.4h22.9c7.6 0 13.8-6.2 13.8-13.8V299c0-4.1-1.7-7.9-4.8-10.6z"
              fill=""
              p-id="7811"
            ></path>
            <path
              d="M420.9 710.4c-34.8-13.9-74.5-6-101.6 21.2-28.8 28.9-35.9 73-17.8 109.6 4.1 8.3 15.5 10.2 22.1 3.6l52.2-52.5 16.9 17-52.2 52.5c-6.5 6.6-4.7 18 3.6 22.2 13.4 6.7 27.8 10 42.1 10 24.5 0 48.7-9.6 66.8-27.9 27-27.2 35-67.1 21.1-102.2l55-55.3 7.9 7.9-8.4 8.5c-3.7 3.7-5 9.2-3.3 14.2l10.4 31.3c0.7 2 1.8 3.9 3.3 5.4l92.1 92.7c8.1 8.1 18.6 12.1 29.2 12.1 10.6 0 21.1-4 29.2-12.1l18.2-18.3c7.8-7.8 12.1-18.3 12.1-29.4 0-11.1-4.3-21.5-12.1-29.4L615.5 699c-1.5-1.5-3.4-2.7-5.4-3.3L579 685.3c-4.9-1.7-10.4-0.4-14.1 3.3l-8.4 8.5-7.9-7.9 20.9-21c34.8 13.9 74.5 6 101.6-21.2 28.8-28.9 35.9-73 17.8-109.6-4.1-8.3-15.5-10.2-22.1-3.6l-52.2 52.5-16.9-17 52.2-52.5c6.5-6.6 4.7-18-3.6-22.2-36.4-18.2-80.2-11-108.9 17.9-27 27.2-35 67.1-21.1 102.2l-20.9 21-44-44.3 16.2-16.3c5.6-5.6 5.2-15-0.7-20.2l-80.5-70.5c-5.5-4.8-13.7-4.5-18.8 0.6l-36.3 36.5c-5.1 5.1-5.4 13.4-0.6 18.9l70.1 80.9c5.2 6 14.6 6.3 20.1 0.7l11-11.1 44 44.3-55 55.2z"
              fill=""
              p-id="7812"
            ></path>
            <path
              d="M688.1 811.2l-89.8-90.4-20-6.7-21 21.1 112.9 113.6 18-18.1c5.2-5.2 5.2-14.2-0.1-19.5z"
              fill="#F7D04A"
              p-id="7813"
            ></path>
            <path
              d="M554 738.6l6.7 20.1 89.8 90.4c5.4 5.4 14.1 5.4 19.5 0l0.2-0.2-112.9-113.6-3.3 3.3z"
              fill="#F3B41B"
              p-id="7814"
            ></path>
            <path
              d="M600.4 195.6c0-7.6 6.2-13.8 13.8-13.8h30.3v-30.5c0-7.6 6.2-13.8 13.8-13.8h30.3V91.3H334.3v46.2h30.3c7.6 0 13.8 6.2 13.8 13.8v30.5h147.7c7.6 0 13.8 6.2 13.8 13.8h60.5z"
              fill="#FFFFFF"
              p-id="7815"
            ></path>
            <path
              d="M526.1 209.5H242.4L140.7 299v63.7h122v-60c0-7.6 6.2-13.8 13.8-13.8h88.1c7.6 0 13.8 6.2 13.8 13.8v60h266.1v-60c0-7.6 6.2-13.8 13.8-13.8h88.1c7.6 0 13.8 6.2 13.8 13.8v60h125.7V299L781 209.5H614.1c-7.6 0-13.8-6.2-13.8-13.8h-60.6c0.1 7.6-6 13.8-13.6 13.8z"
              fill="#EF9D3C"
              p-id="7816"
            ></path>
            <path
              d="M930.7 362.7v-57.3l-112.4-95.9h-37.5l105 89.5v63.7h44.9z"
              fill="#FFB973"
              p-id="7817"
            ></path>
            <path
              d="M242.4 209.5h-41.5L92 305.3v57.4h48.7V299z"
              fill="#E2771E"
              p-id="7818"
            ></path>
            <path
              d="M670.3 569.1l-46.1 46.3c-5.4 5.4-14.1 5.4-19.5 0l-36.3-36.5c-5.3-5.3-5.3-14.2 0-19.6l46.1-46.3c-20.8-3.3-42.3 3.4-57.8 18.9-20.9 21-25.7 52.8-11.9 79.1 2.8 5.4 1.8 12-2.4 16.3L526.8 643l14.3 14.3 15.6-15.7c4.3-4.3 10.8-5.3 16.2-2.5 26.1 13.9 57.7 9.1 78.6-12 15.5-15.4 22.1-37.1 18.8-58z"
              fill="#E5E5E5"
              p-id="7819"
            ></path>
            <path
              d="M514.8 655.1l14.3 14.4 12.1-12.2-14.4-14.3z"
              fill="#CCCCCC"
              p-id="7820"
            ></path>
            <path
              d="M433.6 736.8c-4.3 4.3-10.8 5.3-16.2 2.5-26.1-13.9-57.7-9.1-78.6 12-15.4 15.5-22.1 37.2-18.8 58.1l46-46.4c5.4-5.4 14.1-5.4 19.5 0l36.3 36.5c5.4 5.4 5.4 14.2 0 19.6l-46.1 46.3c20.8 3.3 42.3-3.4 57.8-18.9 20.9-21 25.7-52.8 11.9-79.1-2.8-5.4-1.8-12 2.4-16.3l16.6-16.7-14.3-14.3-16.5 16.7z"
              fill="#E5E5E5"
              p-id="7821"
            ></path>
            <path
              d="M495.3 674.7l-45.1 45.4 14.3 14.3 45.1-45.3z"
              fill="#CCCCCC"
              p-id="7822"
            ></path>
            <path
              d="M359.8 531.9l18.2-18.3 59.6 52.3-25.8 26z"
              fill="#E5E5E5"
              p-id="7823"
            ></path>
            <path
              d="M672 346.4h60.6v79.1H672zM290.2 346.4h60.6v79.1h-60.6z"
              fill="#CCCCCC"
              p-id="7824"
            ></path>
            <path
              d="M290.2 316.5h60.6v29.8h-60.6zM672 316.5h60.6v29.8H672z"
              fill="#F2F2F2"
              p-id="7825"
            ></path>
            <path
              d="M286.6 165.2h64.2v16.6h-64.2zM672 165.2h64.2v16.6H672z"
              fill="#EB6836"
              p-id="7826"
            ></path>
          </svg>
          管理与维护
        </p>
        <div style="padding-left: 30px" v-html="Notice.upgradationLog"></div>
      </div>
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
          @click="toUrl(Notice.Url)"
          >前往下载</at-button
        >
        <at-button
          style="width: 50px; flex: 1 1 auto"
          type="error"
          @click="closeModal2"
          >忽略该版本</at-button
        >
        <at-button
          style="width: 50px; flex: 1 1 auto"
          type="error"
          @click="closeModal2"
          >取消</at-button
        >
      </div>
    </at-modal>
  </div>
</template>

<script>
import { shell } from "electron";
import { mapMutations } from "vuex";
import axios from "axios";
// const { ipcRenderer } = require("electron");

var cheerio = require("cheerio");
export default {
  name: "homePage",
  data() {
    return {
      modal3: false,
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
      classFx: [
        {
          name: "影片屬性",
          data: [
            { name: "無碼" },
            { name: "AI解碼" },
            { name: "中文字幕" },
            { name: "1080p" },
            { name: "60FPS" },
          ],
          value: [],
        },
        {
          name: "人物關係",
          data: [
            { name: "近親" },
            { name: "姐" },
            { name: "妹" },
            { name: "母" },
            { name: "女兒" },
            { name: "師生" },
            { name: "情侶" },
            { name: "青梅竹馬" },
          ],
          value: [],
        },
        {
          name: "角色設定",
          data: [
            { name: "JK" },
            { name: "處女" },
            { name: "御姐" },
            { name: "熟女" },
            { name: "人妻" },
            { name: "老師" },
            { name: "女醫護士" },
            { name: "OL" },
            { name: "大小姐" },
            { name: "偶像" },
            { name: "女僕" },
            { name: "巫女" },
            { name: "修女" },
            { name: "風俗娘" },
            { name: "公主" },
            { name: "女戰士" },
            { name: "魔法少女" },
            { name: "異種族" },
            { name: "妖精" },
            { name: "魔物娘" },
            { name: "獸娘" },
            { name: "碧池" },
            { name: "痴女" },
            { name: "不良少女" },
            { name: "傲嬌" },
            { name: "病嬌" },
            { name: "無口" },
            { name: "偽娘" },
            { name: "扶他" },
          ],
          value: [],
        },
        {
          name: "外貌身材",
          data: [
            { name: "短髮" },
            { name: "馬尾" },
            { name: "雙馬尾" },
            { name: "巨乳" },
            { name: "貧乳" },
            { name: "黑皮膚" },
            { name: "眼鏡娘" },
            { name: "獸耳" },
            { name: "美人痣" },
            { name: "肌肉女" },
            { name: "白虎" },
            { name: "大屌" },
            { name: "水手服" },
            { name: "體操服" },
            { name: "泳裝" },
            { name: "比基尼" },
            { name: "和服" },
            { name: "兔女郎" },
            { name: "圍裙" },
            { name: "啦啦隊" },
            { name: "旗袍" },
            { name: "絲襪" },
            { name: "吊襪帶" },
            { name: "熱褲" },
            { name: "迷你裙" },
            { name: "性感內衣" },
            { name: "丁字褲" },
            { name: "淫紋" },
          ],
          value: [],
        },
        {
          name: "故事劇情",
          data: [
            { name: "純愛" },
            { name: "戀愛喜劇" },
            { name: "後宮" },
            { name: "開大車" },
            { name: "公眾場合" },
            { name: "NTR" },
            { name: "精神控制" },
            { name: "藥物" },
            { name: "痴漢" },
            { name: "阿嘿顏" },
            { name: "精神崩潰" },
            { name: "BDSM" },
            { name: "綑綁" },
            { name: "眼罩" },
            { name: "項圈" },
            { name: "調教" },
            { name: "異物插入" },
            { name: "肉便器" },
            { name: "胃凸" },
            { name: "強制" },
            { name: "逆強制" },
            { name: "女王樣" },
            { name: "母女丼" },
            { name: "姐妹丼" },
            { name: "凌辱" },
            { name: "出軌" },
            { name: "攝影" },
            { name: "性轉換" },
            { name: "百合" },
            { name: "耽美" },
            { name: "異世界" },
            { name: "怪獸" },
            { name: "世界末日" },
          ],
          value: [],
        },
        {
          name: "性交體位",
          data: [
            { name: "手交" },
            { name: "指交" },
            { name: "乳交" },
            { name: "肛交" },
            { name: "腳交" },
            { name: "拳交" },
            { name: "3P" },
            { name: "群交" },
            { name: "口交" },
            { name: "口爆" },
            { name: "吞精" },
            { name: "舔蛋蛋" },
            { name: "舔穴" },
            { name: "69" },
            { name: "自慰" },
            { name: "腋毛" },
            { name: "舔腋下" },
            { name: "內射" },
            { name: "顏射" },
            { name: "雙洞齊下" },
            { name: "懷孕" },
            { name: "噴奶" },
            { name: "放尿" },
            { name: "排便" },
            { name: "顏面騎乘" },
            { name: "車震" },
            { name: "性玩具" },
            { name: "車震" },
            { name: "毒龍鑽" },
            { name: "觸手" },
            { name: "頸手枷" },
          ],
          value: [],
        },
        {
          name: "排序方式",
          data: [
            { name: "最新上市" },
            { name: "最新上傳" },
            { name: "本日排行" },
            { name: "本週排行" },
            { name: "本月排行" },
            { name: "觀看次數" },
            { name: "他們在看" },
          ],
          value: [],
        },
        {
          name: "發佈日期",
          data: [],
          value: [],
        },
      ],
      Notice: {},
      cUxOne: "",
      cUx: "",
      cUxoffet: false,
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
    version: {
      get() {
        return this.$store.getters.getVersion;
      },
      set(val) {
        this.SET_VERSION(val);
      },
    },
  },
  methods: {
    ...mapMutations([
      "SET_BACKCARD",
      "SET_URL",
      "SET_VIEW",
      "SET_HURL",
      "SET_VERSION",
    ]),
    onClickUrlOnView(val) {
      this.url = JSON.stringify({ url: val.href, title: val.NexT });
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
          if (this.cUxoffet) {
            _this.netSearchWork(_this.cUx + "&page=" + this.datIndex);
          } else {
            _this.netSearchWork(_this.sUrl + "&page=" + this.datIndex);
          }
        }
      }
    },
    netWork() {
      axios
        .get(
          "https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA&page=" +
            this.datIndex
        )
        .then((resp) => {
          var $ = cheerio.load(resp.data);

          var arr1 = [];
          $("div.home-rows-videos-wrapper a").each(function (i, e) {
            console.log("解析：x");

            let objectM = {
              href: $(e).attr("href"),
              img: $($(e).children("div.home-rows-videos-div"))
                .children("img")
                .attr("src"),
              NexT: $($(e).children("div.home-rows-videos-div")).text(),
              Preview: Math.floor(Math.random() * 100) + 1,
              like: Math.floor(Math.random() * 100) + 1,
              comment: Math.floor(Math.random() * 100) + 1,
            };

            arr1.push(objectM);
          });
          this.$Loading.finish();
          this.$Message.success('番剧加载完成')
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
          $("div.home-rows-videos-wrapper a").each(function (i, e) {
            console.log("解析：x");

            let objectM = {
              href: $(e).attr("href"),
              img: $($(e).children("div.home-rows-videos-div"))
                .children("img")
                .attr("src"),
              NexT: $($(e).children("div.home-rows-videos-div")).text(),
              Preview: Math.floor(Math.random() * 100) + 1,
              like: Math.floor(Math.random() * 100) + 1,
              comment: Math.floor(Math.random() * 100) + 1,
            };

            arr1.push(objectM);
          });
          this.$Loading.finish();
          this.$Message.success('番剧加载完成')
          this.journalismList.push.apply(this.journalismList, arr1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closeModal2() {
      this.modal3 = false;
    },
    closeModal3() {
      this.modal3 = false;
    },
    toUrl(val) {
      shell.openExternal(val);
    },
    classificationRestore() {
      this.$Loading.start()
      this.journalismList = [];
      this.dataIndex = 1;
      for (let i = 0; i < this.classFx.length; i++) {
        this.classFx[i].value = [];
      }
      this.oexff = false;
      this.netWork();
    },
    classification() {
      this.$Loading.start();
      this.journalismList = [];
      this.dataIndex = 1;
      this.oexff = true;
      let cUrl = "https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA";
      if (this.sUrl) {
        if (!this.cUxOne) {
          this.cUxOne = this.sUrl;
          //搜索地址
          cUrl = this.sUrl;
        } else {
          //如果存储过，最原始的搜索url,那就直接赋值
          cUrl = this.cUxOne;
        }
      }

      for (let i = 0; i < this.classFx.length; i++) {
        if (this.classFx[i].value.length > 0) {
          for (let j = 0; j < this.classFx[i].value.length; j++) {
            cUrl += "&tags%5B%5D=" + this.classFx[i].value[j];
          }
        }
      }

      if (this.sUrl) {
        //存储一份，搜索只带搜索加分类url
        this.cUxoffet = true;
        this.cUx = cUrl;
      }

      console.log(cUrl);
      this.netSearchWork(cUrl);
    },
    
  },
  created() {
    axios
      .get("https://q-tai-mu.github.io/sex.json")
      .then((resp) => {
        if (resp.data["offet"]) {
          this.netWork();
          this.Notice = resp.data;
          if (this.version != resp.data["version"]) {
            console.log("");
            this.modal3 = resp.data["AnnouncementSwitch"];
          }
        } else {
          // ipcRenderer.send("closeWindow");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    hurl(newValue, oldValue) {
      console.log("搜索触发");
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

<style>
.at-message {
  background-color: #3b3838 !important;
  color: #fff !important;
  box-shadow: 0 1px 6px #4e4e4e !important;
}
.at-popover__content {
  background-color: #3d3d40 !important;
}
.at-popover__title {
  background-color: #212121 !important;
  border-bottom: 1px solid #1e1e1e !important;
}
.at-popover__popper {
  border: 1px solid #212121 !important;
  box-shadow: 0 1px 6px #4e4e4e !important;
  background-color: #212121 !important;
  border-radius: 5px;
}
.at-modal__footer {
  border-top: none !important;
}
.at-modal__header {
  color: #fff !important;
  border-bottom: none !important;
}
.at-modal {
  background-color: rgb(39, 39, 39) !important;
}
.at-select__dropdown {
  background-color: #212121 !important;
}
.at-input-number {
  border: 1px solid rgb(28, 28, 28) !important;
  background-color: rgb(39, 39, 39) !important;
}
.at-input-number__original {
  background-color: #333230 !important;
  /* border: 1px solid #3c3c3d !important; */
  /* color: #e7e5e5 !important; */
}
.at-select__dropdown .at-select__option--selected {
  background-color: #353534 !important;
  color: #fff;
}
.at-select__dropdown .at-select__option:hover,
.at-select__dropdown .at-select__option--focus {
  /* background-color: #2e2e2c !important; */
}
.at-select__selection {
  background-color: #333230 !important;
  border: 1px solid #3c3c3d !important;
  color: #e7e5e5 !important;
  transition: transform 0.3s, box-shadow 0.3s !important;
  border-radius: 10px;
}
.at-select__selection:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.at-input__original {
  background-color: #333230 !important;
  border: 1px solid #3c3c3d !important;
  color: #e7e5e5 !important;
  transition: transform 0.3s, box-shadow 0.3s !important;
}
.at-input__original:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.at-tabs__header {
  border-bottom: 1px solid #333333 !important;
}
.at-tabs-nav__item {
  background-color: #333230 !important;
  border: 1px solid #353636 !important;
  color: #c7c7c7;
}
.at-btn {
  background-color: #333230 !important;
  border: 1px solid #353636 !important;
  color: #c7c7c7;
  transition: transform 0.3s, box-shadow 0.3s !important;
}
.at-btn:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.at-input-number__original {
  background-color: #333230 !important;
  /* border: 1px solid #3c3c3d !important; */
  /* color: #e7e5e5 !important; */
}
.at-select__dropdown .at-select__option--selected {
  background-color: #353534 !important;
  color: #fff;
}
.at-select__dropdown .at-select__option:hover,
.at-select__dropdown .at-select__option--focus {
  /* background-color: #2e2e2c !important; */
}
.at-select__selection {
  background-color: #333230 !important;
  border: 1px solid #3c3c3d !important;
  color: #e7e5e5 !important;
  transition: transform 0.3s, box-shadow 0.3s !important;
}
.at-select__selection:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.at-input__original {
  background-color: #333230 !important;
  border: 1px solid #3c3c3d !important;
  color: #e7e5e5 !important;
  transition: transform 0.3s, box-shadow 0.3s !important;
}
.at-input__original:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.element {
  transition: transform 0.3s, box-shadow 0.3s;
}

.element:hover {
  transform: translateY(-10px) scale(1.1);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  /* animation: sparkle 0.5s infinite; */
}

@keyframes sparkle {
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
.at-modal__footer {
  background-color: rgb(33 31 31) !important;
  border-top: 1px solid rgb(39, 39, 39) !important;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.at-modal__body {
  /* background-color: rgb(50, 50, 50) !important; */
}
.at-modal__header {
  background-color: rgb(39, 39, 39) !important;
  border-bottom: 1px solid rgb(39, 39, 39) !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.at-select__dropdown--bottom {
  background-color: rgb(39, 39, 39) !important;
}

.at-select__option {
  color: #fff;
}
.at-select__option:hover {
  background-color: rgb(50, 50, 50) !important;
  color: #fff;
}
.at-select__dropdown {
  padding: 3px;
  background-color: rgb(50, 50, 50);
}
.at-select__dropdown::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
}
.moviesTemplateMinTitle-right {
  float: right;
  /* width: 50%; */
}
.at-select__selection {
  margin-bottom: 3px;
  /* border: 1px solid #323333; */
  background-color: rgb(39, 39, 39) !important;
  border: 1px solid #3d3d3d !important;
}
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
  background-color: #3a3a3a;
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
  width: 280px;
  height: 280px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  flex: 1 1 auto;
  padding: 10px;
}

.homeCardDeep {
  width: 280px;
  height: 280px;
  background-color: rgb(39, 39, 39);
  border: 1px solid rgb(28, 28, 28);
  border-radius: 5px;
  margin: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  flex: 1 1 auto;
  padding: 10px;

  transition: transform 0.3s, box-shadow 0.3s !important;
}

.homeCardDeep:hover {
  /* box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); */

  /* transition-delay: 0s !important; */
  /* border: 1px solid #78a4fa; */

  /* transform: translateY(-10px)  !important; */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  /* animation: sparkle 0.5s infinite; */
}
@keyframes sparkle {
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
  /* padding: 10px; */
}

.Neworldscro {
  /* height: 430px; */
  overflow-y: auto;
}

.Neworldscro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 0px;
}

.Neworldscro::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(22, 22, 22, 0.2);
  background: #343435;
}

.Neworldscro::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #020202;
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
