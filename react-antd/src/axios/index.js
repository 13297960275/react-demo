import Jsonp from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {
	static jsonp(options) {
		return new Promise((resolve, reject) => {
			Jsonp(options.url, {
				param: 'callback'
			}, function(err, res) {
				if (!err) {
					resolve(res)
				} else {
					reject(err)
				}
			})
		})
	}

	static ajax(options) {
		let loading;
		if (options.data && options.data.isShowLoading !== false) {
			loading = document.getElementById('ajaxLoading');
			loading.style.display = 'block';
		}
		return new Promise((resolve, reject) => {
			axios({
				url: options.url,
				method: options.method || 'get',
				baseURL: options.baseUrl,
				timeout: 100000,
				params: (options.data && options.data.params) || ''
			}).then((response) => {
				if (options.data && options.data.isShowLoading !== false) {
					loading = document.getElementById('ajaxLoading');
					loading.style.display = 'none';
				}
				if (response.status == '200') {
					let res = response.data;
					if (res.code == options.code) {
						resolve(res);
					} else {
						Modal.info({
							title: "提示",
							content: res.message
						})
					}
				} else {
					loading = document.getElementById('ajaxLoading');
					loading.style.display = 'none';
					Modal.info({
						title: "提示",
						content: "请求失败"
					})
					reject(response.data);
				}
			})
		});
	}
}