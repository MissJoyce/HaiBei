let state={
    showLoad:false, //显示加载条
    getNav:true, //显示head组件
    navList:false, //下拉框
    uiBtn:"ui-btn-right_home", //head 图标切换
    overLay:false,  //分享的蒙版
    headload:"/home", //head 图标导向home/refresh
    photoList:[],  //相册总列表
    currentlist:[], //当前页
    currentpage:1,  //当前页码
    pages:-1,  //总的数量
    detailNum:-1,  //当前详情的id
    shopcar:[],   //购物车中的列表
    userName:"",   //注册页name
    passWord:"",  //注册页password
    showNameSpan:false, //注册姓名错误
    showPsdSpan:false, //注册姓名错误
    //登录和注册各状态
    loginSuc:false, 
    loginErr:false,
    loginErrTwo:false,
    regSuc:false,
    regErr:false,
    regErrTwo:false,

    myname:{name:"",showName:false},//登录成功时，购物车页面显示用户名,


};
export default state;