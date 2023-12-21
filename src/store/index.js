/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-28 20:43:07
 * @LastEditTime: 2023-12-20 17:34:35
 * @LastEditors: KeHan
 */


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        view: 'No2On',
        url: '',
        hurl: '',
        backCard: 'Yes'
    },
    getters: {
        getView: state => {
            return state.view;
        },
        getUrl: state => {
            return state.url;
        },
        getHurl: state => {
            return state.hurl;
        },
        getBackCard: state => {
            return state.backCard;
        }
    },
    mutations: {
        SET_VIEW: (state, payload) => {
            state.view = payload;
        },
        SET_URL: (state, payload) => {
            state.url = payload;
        },
        SET_HURL: (state, payload) => {
            state.hurl = payload;
        },
        SET_BACKCARD: (state, payload) => {
            state.backCard = payload;
        }
    }
});