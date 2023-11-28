<template>
  <div
      id="titleBlock"
      :style="backCard == 'No' ? '' : 'background-color:#2d2d2d;'"
  >
    <div class="titleName">
      <div class="iconTitle">
        <svg t="1701165116119" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4611" width="16" height="16"><path d="M512 40.96C251.904 40.96 40.96 251.904 40.96 512s210.944 471.04 471.04 471.04 471.04-210.944 471.04-471.04S772.096 40.96 512 40.96z m0 612.352a141.312 141.312 0 1 1 141.312-141.312 141.312 141.312 0 0 1-141.312 141.312z" fill="#C15100" p-id="4612"></path><path d="M962.99008 472.33024c-21.504-45.44512-25.64096-77.5168-26.3168-84.35712a13.80352 13.80352 0 0 1 0-2.60096c9.66656-120.832-53.92384-76.86144-66.84672-137.8304a112.20992 112.20992 0 0 0-61.44-78.47936 14.97088 14.97088 0 0 1-6.26688-5.61152c-19.5584-31.51872-45.056-39.6288-56.91392-41.71776A15.33952 15.33952 0 0 1 735.232 115.3024c-23.1424-33.50528-86.75328-33.64864-104.448-32.99328a14.99136 14.99136 0 0 1-8.76544-2.43712c-92.03712-60.02688-63.95904 17.03936-150.34368-13.57824-58.38848-20.70528-92.69248-0.4096-109.07648 15.42144a47.104 47.104 0 0 1-32.0512 12.92288c-23.69536 0.43008-35.57376 11.03872-41.472 20.5824a49.54112 49.54112 0 0 1-24.3712 20.25472C242.62656 143.95392 235.52 156.34432 235.52 156.34432c-34.05824 62.58688-24.33024 19.12832-74.38336 60.14976a124.25216 124.25216 0 0 0-44.6464 75.22304 74.26048 74.26048 0 0 1-17.67424 36.352c-37.90848 42.76224-34.59072 83.39456-28.672 104.73472a43.74528 43.74528 0 0 1-3.70688 31.96928C30.72 532.1728 80.4864 534.7328 70.144 596.7872c-11.14112 66.74432 20.02944 58.85952 28.83584 76.47232s-15.0528 61.17376 25.4976 79.48288c35.24608 15.91296 59.53536 51.2 65.31072 60.23168a15.17568 15.17568 0 0 1 1.88416 4.34176c19.18976 72.51968 67.584 21.97504 102.68672 77.7216 27.70944 44.01152 86.016 48.5376 110.14144 48.41472a29.42976 29.42976 0 0 1 18.432 6.4512c35.36896 28.11904 77.824 16.896 100.92544 7.168a46.55104 46.55104 0 0 1 32.768-1.6384c53.5552 17.89952 110.592-11.20256 136.27392-27.25888a79.17568 79.17568 0 0 1 28.18048-10.52672c39.50592-7.08608 75.9808-47.5136 93.81888-70.41024a67.95264 67.95264 0 0 1 27.36128-20.64384c49.60256-20.84864 61.91104-85.11488 64.45056-105.3696 2.78528-22.24128 64.65536-60.47744 52.14208-120.95488s28.4672-76.4928 4.13696-127.93856z m-373.82144 162.01728c-6.26688 1.39264-36.37248 24.12544-80.52736 34.9184-47.104 11.50976-98.4064-57.83552-114.36032-62.99648-23.40864-7.5776-60.66176-48.35328-32.8704-106.06592a98.44736 98.44736 0 0 0 9.0112-32.19456c1.78176-16.85504 7.92576-41.32864 27.91424-52.06016 31.98976-17.14176 64.2048-62.44352 110.592-62.34112 44.60544 0.12288 92.69248 51.3024 128.73728 65.35168 33.75104 13.18912 15.9744 74.752 20.15232 87.61344s55.93088 100.08576-68.64896 127.77472z" fill="#F888B8" p-id="4613"></path><path d="M380.928 277.17632a374.62016 374.62016 0 0 1 239.16544-36.61824c37.08928 6.59456 56.77056-42.53696 25.088-62.93504a322.8672 322.8672 0 0 0-497.664 258.4576c-1.51552 37.66272 49.99168 49.80736 65.92512 15.6672A374.784 374.784 0 0 1 380.928 277.17632z" fill="#F7CDE2" p-id="4614"></path><path d="M575.73376 698.7776a262.59456 262.59456 0 0 1-169.3696-7.92576c-24.576-9.64608-44.89216 21.38112-25.94816 39.79264a226.28352 226.28352 0 0 0 377.67168-108.78976c6.144-25.66144-27.46368-41.12384-43.13088-19.8656a262.71744 262.71744 0 0 1-139.22304 96.78848z" fill="#FFA9D0" p-id="4615"></path><path d="M565.248 229.86752m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4616"></path><path d="M559.43168 220.40576m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4617"></path><path d="M674.87744 195.56352m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4618"></path><path d="M669.06112 186.10176m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4619"></path><path d="M663.98208 289.01376m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4620"></path><path d="M658.18624 279.552m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4621"></path><path d="M773.2224 293.74464m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4622"></path><path d="M767.40608 284.28288m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4623"></path><path d="M702.60736 387.91168m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4624"></path><path d="M696.81152 378.44992m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4625"></path><path d="M850.61632 408.02304m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4626"></path><path d="M844.82048 398.5408m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4627"></path><path d="M776.0896 494.01856m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4628"></path><path d="M770.29376 484.53632m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4629"></path><path d="M828.68224 596.72576m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4630"></path><path d="M822.8864 587.24352m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4631"></path><path d="M724.54144 606.18752m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4632"></path><path d="M718.7456 596.72576m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4633"></path><path d="M647.12704 741.23264m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#E9C19D" p-id="4634"></path><path d="M641.3312 731.7504m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4635"></path><path d="M553.79968 779.40736m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4636"></path><path d="M548.00384 769.9456m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4637"></path><path d="M454.30784 715.48928m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4638"></path><path d="M448.49152 706.00704m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4639"></path><path d="M373.59616 799.49824m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4640"></path><path d="M367.77984 790.03648m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4641"></path><path d="M457.19552 882.11456m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4642"></path><path d="M451.39968 872.6528m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4643"></path><path d="M734.02368 814.98112m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4644"></path><path d="M728.22784 805.51936m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4645"></path><path d="M333.55776 675.28704m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4646"></path><path d="M327.76192 665.8048m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4647"></path><path d="M232.67328 695.37792m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4648"></path><path d="M226.87744 685.91616m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4649"></path><path d="M288.13312 766.0544m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4650"></path><path d="M282.33728 756.59264m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4651"></path><path d="M285.24544 561.13152m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4652"></path><path d="M279.42912 551.66976m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4653"></path><path d="M165.1712 556.40064m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4654"></path><path d="M159.37536 546.93888m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4655"></path><path d="M150.44608 464.44544m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4656"></path><path d="M144.65024 454.9632m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4657"></path><path d="M248.23808 375.41888m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4658"></path><path d="M242.44224 365.95712m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4659"></path><path d="M330.6496 284.28288m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4660"></path><path d="M324.85376 274.80064m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4661"></path><path d="M345.84576 403.29216m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4662"></path><path d="M340.04992 393.80992m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4663"></path><path d="M386.12992 175.47264m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4664"></path><path d="M380.33408 165.9904m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4665"></path><path d="M482.03776 155.36128m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4666"></path><path d="M476.24192 145.89952m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4667"></path><path d="M204.94336 259.44064m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4668"></path><path d="M199.12704 249.97888m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4669"></path><path d="M484.92544 298.47552m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4670"></path><path d="M479.1296 289.01376m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4671"></path><path d="M834.47808 690.64704m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4672"></path><path d="M828.68224 681.18528m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4673"></path><path d="M625.19296 902.22592m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#02A6CC" p-id="4674"></path><path d="M619.39712 892.74368m-24.84224 0a24.84224 24.84224 0 1 0 49.68448 0 24.84224 24.84224 0 1 0-49.68448 0Z" fill="#FFE309" p-id="4675"></path></svg>
      </div>
      <div class="titleText" :style="backCard == 'No' ? '' : 'color:#eaeaea;'">
        优秀APP
      </div>
    </div>
    <div class="ternarySetUp">
      <div class="ternarySetUpIcon" @click="onBlockTitleButton()">
        <svg t="1701165278803" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13791" width="20" height="20"><path d="M512 65.290005c-246.708891 0-446.708971 200.00008-446.708971 446.708972S265.291109 958.707948 512 958.707948c246.712985 0 446.708971-200.00008 446.708971-446.708971S758.712985 65.290005 512 65.290005zM396.941498 424.678212c33.555234 0 61.514006 25.625634 61.514005 60.166311 0 34.548864-27.958772 61.291948-61.514005 61.291948-33.55114 0-61.509912-25.628704-61.509913-60.177567 0-34.537608 27.958772-61.280692 61.509913-61.280692z m370.32121 134.887107v111.462604c0 16.08228-13.044084 29.126364-29.126364 29.126364-16.078187 0-29.126364-13.044084-29.126365-29.126364v-47.752584H314.991044v47.752584c0 16.08228-13.044084 29.126364-29.126364 29.126364-16.078187 0-29.126364-13.044084-29.126365-29.126364V352.971054c0-16.078187 13.048177-29.126364 29.126365-29.126365 16.08228 0 29.126364 13.048177 29.126364 29.126365v212.051557h162.332179v-111.478978c0-16.08228 13.048177-29.126364 29.126364-29.126364h144.021138c64.419172 0 116.791983 52.368718 116.791983 116.791983v18.356067z" fill="#040000" p-id="13792"></path></svg>
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
      <at-input v-model="inputValue" placeholder="输入本番名"></at-input>
    </at-modal>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

const {ipcRenderer} = require("electron");
import axios from "axios";

export default {
  name: "titleBlock",
  data() {
    return {
      buttonTitle: false,
      offet: true,
      modal1: false,
      inputValue: ""
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
    },
    onClickViewOn1on2() {
      this.modal1 = true;
    },
    handleConfirm() {
      //https://hanime1.me/comics/search?query=this.inputValue
      if (this.inputValue) {
        this.hurl = "https://hanime1.me/comics/search?query=" + this.inputValue;
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
  background-color: #f4c8d8;
}
</style>
