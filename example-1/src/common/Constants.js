const USERINFO = {
	LEVEL : ['金','银','铜'],
	GENDER : ['男','女'],
}

/**
*测试环境/生产环境
**/
const DOMAIN_DEV = 'http://consultant.mps5dev.gikoo.cn/';
const DOMAIN_JOB = 'http://consultant.mlp5plus.gikoo.cn/';
const API_PREFIX = 'api/v1/';
//const API_PREFIX_2 = 'api/v2/';
const DOMAIN_TEST = window.location.href.indexOf('localhost') > -1 ? DOMAIN_DEV : DOMAIN_JOB;


const URLS = {
	LOGIN_URL: DOMAIN_TEST + API_PREFIX + 'user/login/', //登录
	LOGOUT_URL: DOMAIN_TEST + API_PREFIX + 'user/logout/', //登出
	CONTRACTS_URL: DOMAIN_TEST + API_PREFIX + 'consultant_task/position/my/', //合同列表
	CONTRACTS_DETAIL_URL: DOMAIN_TEST + API_PREFIX + 'consultant_task/position/', //合同详情
	CANDIDATES_URL: DOMAIN_TEST + API_PREFIX + 'consultant/candidate/my/', //成员列表
	CANDIDATE_DETAIL_URL: DOMAIN_TEST + API_PREFIX + 'consultant/candidate/', //成员详情
}

export default {
	USERINFO,
	URLS
}

