import React from "react";
import { Select } from "antd";
const Option = Select.Option;
export default {
  formateDate(time, isWeek, isDateTime, isDate, isTime) {
    if (!time) return "";
    let weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    let date = new Date(time);
    let months = date.getMonth() + 1;
    let days = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dateStr = `${date.getFullYear()}-${(months >= 10 ? months : "0" + months)}-${(days >= 10 ? days : "0" + days)}`
    let timeStr = (hours >= 10 ? hours : "0" + hours) +
      ":" +
      (minutes >= 10 ? minutes : "0" + minutes) +
      ":" +
      (seconds >= 10 ? seconds : "0" + seconds)
    let weekStr = weekday[date.getDay()]
    let str = dateStr + ' ' + timeStr + (isWeek ? (' ' + weekStr) : '')

    return str;
  },
  pagination1(page, callback) {
    return {
      onChange: current => {
        callback(current);
      },
      current: parseInt(page.current),
      pageSize: parseInt(page.size),
      total: parseInt(page.total),
      showTotal: () => {
        return `共${page.total}条`;
      },
      showQuickJumper: true
    };
  },

  pagination(data, callback) {
    return {
      onChange: current => {
        callback(current);
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total_count,
      showTotal: () => {
        return `共${data.result.total_count}条`;
      },
      showQuickJumper: true
    };
  },

  // 格式化金额,单位:分(eg:430分=4.30元)
  formatFee(fee, suffix = "") {
    if (!fee) {
      return 0;
    }
    return Number(fee).toFixed(2) + suffix;
  },
  // 格式化公里（eg:3000 = 3公里）
  formatMileage(mileage, text) {
    if (!mileage) {
      return 0;
    }
    if (mileage >= 1000) {
      text = text || " km";
      return Math.floor(mileage / 100) / 10 + text;
    } else {
      text = text || " m";
      return mileage + text;
    }
  },
  // 隐藏手机号中间4位
  formatPhone(phone) {
    phone += "";
    return phone.replace(/(\d{3})\d*(\d{4})/g, "$1***$2");
  },
  // 隐藏身份证号中11位
  formatIdentity(number) {
    number += "";
    return number.replace(/(\d{3})\d*(\d{4})/g, "$1***********$2");
  },
  getOptionList(data) {
    if (!data) {
      return [];
    }
    let options = []; //[<Option value="0" key="all_key">全部</Option>];
    data.map(item => {
      options.push(
        <Option value={item.id} key={item.id}>
          {item.name}
        </Option>
      );
    });
    return options;
  },
  /**
   * ETable 行点击通用函数
   * @param {*选中行的索引} selectedRowKeys
   * @param {*选中行对象} selectedItem
   */
  updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      });
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      });
    }
  }
};
