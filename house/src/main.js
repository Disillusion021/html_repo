import Vue from 'vue';
import router from '../common/router';
import http from '../common/http';
import common from '../common/common';
import App from './App.vue';
import Mock from '../common/mock.js'; 
import RouterTab from 'vue-router-tab';
import ViewUI from 'view-design';
import message from '../common/message.js';
import 'vue-router-tab/dist/lib/vue-router-tab.css';
import 'view-design/dist/styles/iview.css';
import './assets/bootstrap.min.css';
import './assets/main.css';
import local from '../common/_local.js';

Vue.use(RouterTab);
Vue.use(ViewUI);
Vue.prototype.http = http;
Vue.prototype.common = common;
Vue.prototype.message = message;
Vue.prototype.local = local;

if (process.env.NODE_ENV === "local") {
	require('../common/mock.js');
}
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
