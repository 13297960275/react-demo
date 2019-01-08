export default {
	formateDate(time) {
		if (!time) return '';
		let weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
		let date = new Date(time);
		let months = (date.getMonth() + 1)
		let days = date.getDate()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()
		return date.getFullYear() + '-' +
			(months > 10 ? months : ('0' + months)) + '-' +
			(days > 10 ? days : ('0' + days)) + ' ' +
			(hours > 10 ? hours : ('0' + hours)) + ':' +
			(minutes > 10 ? minutes : ('0' + minutes)) + ':' +
			(seconds > 10 ? seconds : ('0' + seconds)) + ' ' +
			weekday[date.getDay()]
	}
}