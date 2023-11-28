/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-11 17:40:56
 * @LastEditTime: 2021-12-05 19:59:01
 * @LastEditors: MArio
 */
module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                productName:"瑟契",
                copyright:"Copyright @ 2023 Mario-er",
                // options placed here will be merged with default configuration and passed to electron-builder
                win: {
                    icon: 'build/icons/icon.ico'
                  },
                  nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true
                  },
            }
        }
    },
}