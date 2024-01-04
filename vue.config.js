/*
 * @职业: 自由 开发者
 * @Description: 
 * @Author: KeHan
 * @Date: 2023-12-03 18:01:30
 * @LastEditTime: 2023-12-20 18:33:08
 * @LastEditors: KeHan
 */

module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                productName:"果汁番剧",
                copyright:"Copyright @ 2024 Mario-er",
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