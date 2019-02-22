import "./../mock";

import Jsonp from "jsonp";
import axios from "axios";
import { Modal } from "antd";

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(
        options.url,
        {
          param: "callback"
        },
        function(err, res) {
          if (!err) {
            resolve(res);
          } else {
            reject(err);
          }
        }
      );
    });
  }

  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById("ajaxLoading");
      loading.style.display = "block";
    }
    let baseApi = "https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api";
    return new Promise((resolve, reject) => {
      let req = {
        url: options.url,
        method: options.method || "get",
        baseURL: options.baseUrl || baseApi,
        timeout: 8000,
        params: (options.data && options.data.params) || "",
        data: (options.data && options.data.params) || ""
      };
      axios(req)
        .then(response => {
          if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById("ajaxLoading");
            loading.style.display = "none";
          }
          if (response.status === 200) {
            let res = response.data;
            if (
              res.code === 0 ||
              res.code === options.code ||
              res.code === "0"
            ) {
              resolve(res);
            } else {
              Modal.info({
                title: "提示",
                content: res.message
              });
            }
          } else {
            Modal.info({
              title: "提示",
              content: "请求失败"
            });
            reject(response.data);
          }
        })
        .catch(error => {
          Modal.info({
            title: "提示",
            content: error
          });
          reject(error);
        });
    });
  }
}
