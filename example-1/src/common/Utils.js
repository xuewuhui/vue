export default {

	/**
   * 截取文字(包括中文和英文)
   */
  subString(str, len, hasDot){
    if (str === null) {
        return '';
    }
    var newLength = 0;
    var newStr = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = '';
    var strLength = str.replace(chineseRegex, '**').length;
    for(var i = 0; i < strLength; i++) {
        singleChar = str.charAt(i).toString();
        if(singleChar.match(chineseRegex) != null) {
            newLength += 2;
        } else {
            newLength++;
        } if(newLength > len) {
            break;
        }
        newStr += singleChar;
    }

    if(hasDot && strLength > len) {
        newStr += "...";
    }
    return newStr;
  },

  /*
   * 功能:
   * 1)去除字符串前后所有空格
   * 2)去除字符串中所有空格(包括中间空格,需要设置第2个参数为:g)
   */
  trim (str, is_global) {
    if(str === 'undefined' || str === '' || str === null) {
        return '';
    }
    var result = str.replace(/(^\s+)|(\s+$)/g, "");
    if(is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
  },

  /*
   * 空字符转换
   */
  formatString(str){
    // 数字类型转成字符类型后返回
    if (typeof str === 'number') {
        return '' + str;
    }
    // 布尔类型转成字符'0'或'1'后返回
    // 取值判断时，需调用 parseInt() 方法
    if (typeof str === 'boolean') {
        if (str) {
            return '1';
        } else {
            return '0';
        }
    }
    // 判断是否是空字符串
    if (str === null || str === undefined || str === 'undefined' || str.toLowerCase() === 'null') {
        return '';
    }
    return str;
  },

  //2016-3-20 13:00:00 => 2016-3-20
  formatDateToDays(time){
    if(time !== null && time !== undefined) {
        if(time.indexOf('T') > 0){
            return time.split('T')[0];
        }
        return time.split(' ')[0];
    } else {
        return '';
    }
  },

  //验证参数是否为空
  checkRequired(name, val) {
    if (!val || val.length === 0) {
        alert(name + ' 不能为空');
        return false
    }
    return true
  },

  //验证参数是否为-1，表示未做选择
  checkSelected(name, val) {
    if (val < 0) {
        alert(' 请选择' + name);
        return false
    }
    return true
  },

  //验证邮箱格式
  isEmail(str){
    var reg = /^(?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i;
    return reg.test(str);
  },

  //验证手机号码
  isPhone(str){
    var reg = /^0?(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/;
    return reg.test(str);
  },

  //获取已选
  getCheckedSelected(id,name){
    var $list = $(id).find('input[name='+name+']:checked'),
        c_ids=[];
    $.each($list, function(i, e){
        c_ids.push($(e).attr('aid') && parseInt($(e).attr('aid')));
    });
    return c_ids;
  },

	

}
