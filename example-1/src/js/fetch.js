import 'whatwg-fetch';
var headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
}
var getItem = (name) => {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}
}
export default {
	get: (url, successFunc, failFunc) => {
		var token = getItem("token");
		if (token) {
			headers.Authorization = "Token " + token;
		}

		//timastamp
		url += url.indexOf('?') > -1 ? '&' : '?';
		url += 'gk_ajax_timestamp='+Date.parse(new Date())+'';
		
		fetch(url, {
				method: 'get',
				headers: headers
			})
			.then((res) => {
				if (res.ok) {
					res.json().then((data) => {

						if (successFunc !== null && typeof(successFunc) === 'function') successFunc(data);
					});
				} else {
					if (failFunc !== null && typeof(failFunc) === 'function') failFunc(res);
				}
			})

	},
	post: (url, data, successFunc, failFunc) => {
		var token = getItem("token");
		if (token) {
			headers.Authorization = "Token " + token;
		}
		fetch(url, {
				method: 'post',
				headers: headers,
				body: data === null ? null : JSON.stringify(data)
			})
			.then((res) => {
				if (res.ok) {
					res.json().then((data) => {
						if (successFunc !== null) successFunc(data);
					});
				} else {
					if (failFunc !== null) failFunc(res);
				}
			})
	},
	isWeiXin: () => {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	},
	getParam: (name) => {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},
	get_broswer_info: () => {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/weibo/i) == "weibo") { //weibo
			return 10;
		} else if (ua.indexOf('qq/') != -1) { //qq
			return 9;
		} else if (ua.match(/MicroMessenger/i) == 'micromessenger') { //wechat
			return 3;
		}
		return 4;
	},
	//写cookies
	setItem: (name, value, day) => {
		var Days = day || 36500;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	},
	//读取cookies
	getItem: getItem,
	//删除cookies
	removeItem: (name) => {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getItem(name);
		if (cval != null) {
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}
	},
	getSearchParamOnJson: ()=> {
		var search = w.location.search;
		if (search) {
			return JSON.parse("{" + window.location.search.toString().replace("?", "\"").replace(new RegExp(/&/g), '\",\"').replace(new RegExp(/=/g), '\":\"') + "\"}");
		}
		return null;
	}
}