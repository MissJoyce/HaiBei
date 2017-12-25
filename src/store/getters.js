//组件通过getter拿到state数据

let getters={
    bLoading(state){return state.showLoad;},
    getNav(state){return state.getNav;}, //控制header数据
    navList(state){return state.navList;}, //控制header的navList
    uiBtn(state){return state.uiBtn;},
    overLay(state){return state.overLay},
    headload(state){return state.headload},
    // getPhotoList(state){return state.photoList},
    getCurrentList(state){return state.currentlist},
    currentpage(state){return state.currentpage},
    getPages(state){return state.pages},
    getDetailNum(state){return state.detailNum},
    getDetail(state){return state.photoList[state.detailNum]},
    getShopcar(state){return state.shopcar},
    getTotalPrice(state){
        let sum = 0;
        state.shopcar.forEach((item,index)=> {
            sum+=item.price*item.number;
        });
        return sum;
    },
    getUname(state){return state.userName;},
    getPsd(state){return state.passWord;},
    showNameSpan(state){return state.showNameSpan},
    showPsdSpan(state){return state.showPsdSpan},
    
    loginName(state){return state.userName;},
    loginPsd(state){return state.passWord;},
    
    loginSuc(state){return state.loginSuc;},
    loginErr(state){return state.loginErr;},
    loginErrTwo(state){return state.loginErrTwo;},
    regSuc(state){return state.regSuc;},
    regErr(state){return state.regErr;},
    regErrTwo(state){return state.regErrTwo;},
    Myname(state){return state.myname}
};
export default getters; 