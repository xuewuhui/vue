/* golbal params*/
const domain = location.href.indexOf(':80') >= 0 ? "http://test.mlpplus.gikoo.cn" : ""
const host = location.href.indexOf(':80') >= 0 ? "test" : window.location.host.split(".")[0]
const api_perfix_1 = '/api/v1/'
const api_perfix_2 = '/api/v2/'
const api_perfix_3 = '/api/custom/'
const PARAMETER = {
	domain: domain,
  ENCRYPT_MAGIC_CODE: 'gikoo@2013',
  QINIU_DOMAIN: 'http://iap-bucket.qiniudn.com/',
}

const URL = {
  uptoken_url: domain + api_perfix_1 + 'util/uptoken/',
	
	

	


  
}

export default {
	PARAMETER,
	URL,
	host,
}
