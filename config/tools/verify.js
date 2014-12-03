function verify(str){
	var re= new RegExp();
}

//用户注册页面非法字符检测
function userVerify(str){
	if(typeof str!='string') return false;
    if(/^[0-9]/.test(str)) return false;
    var re = new RegExp('^[\u4E00-\u9FA5a-zA-Z0-9_]{2,12}$');
    if(!re.test(str)) return false;
    return true;
}//用户注册验证,只能使用数字,字母,汉字,和下划线,且不能全为数字,也不能以数字开头
function idVerify(str){
    if (typeof str!='string') return false;
    var re = /^[0-9a-zA-Z]{24}$/;//判断是否Id格式
    return re.test(str);
}
exports.userVerify = userVerify;
exports.idVerify = idVerify;