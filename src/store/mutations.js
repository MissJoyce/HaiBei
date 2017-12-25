// import {INCREMENT} from "./types";
import * as types from "./types"
let mutations={
    /* [INCREMENT]:(state,payload)=>{
        console.log("mutations接受到的负载:",payload);
        state.data=payload;
    }, */
//loading
    [types.SHOW_LOADING]:(state)=>{state.showLoad=true;},
    [types.HIDE_LOADING]:(state)=>{state.showLoad=false;},
//head
    [types.SHOW_NAV]:(state)=>{state.getNav=true},
    [types.HIDE_NAV]:(state)=>{state.getNav=false},
    [types.SHOW_NAV_LIST]:(state)=>{state.navList=true},
    [types.HIDE_NAV_LIST]:(state)=>{state.navList=false},
    [types.HIDE_NAV_LIST2]:(state)=>{state.navList=false},
    [types.UI_BTN_REFRESH]:(state)=>{state.uiBtn="ui-btn-right"},
    [types.UI_BTN_HOME]:(state)=>{state.uiBtn="ui-btn-right_home"},
    
    [types.HEAD_LOAD]:(state,payload)=>{state.headload="/like"},
//share
    [types.SHOW_OVERLAY]:(state)=>{state.overLay=true},
    [types.HIDE_OVERLAY]:(state)=>{state.overLay=false},
//photo页
    [types.PHOTO_LIST]:(state,payload)=>{state.photoList=payload;},
    [types.CURRENT_LIST]:(state,payload)=>{state.currentlist=payload;},    
    [types.TOTAL_PAGES]:(state,payload)=>{state.pages=payload},

    [types.PRE_PAGE]:(state,payload)=>{state.currentpage=payload},
    [types.NEXT_PAGE]:(state,payload)=>{state.currentpage=payload},  
    [types.PRE_LIST]:(state,payload)=>{state.currentlist=payload},
    [types.NEXT_LIST]:(state,payload)=>{state.currentlist=payload},

    [types.SET_DETAIL_NUM]:(state,payload)=>{state.detailNum=payload},
//购物车
    [types.CHANGE_ITEM]:(state,payload)=>{state.shopcar = payload},
    [types.DEL_ITEM]:(state,payload)=>{state.shopcar = payload},
    [types.CLEAR_BUYCAR]:(state,payload)=>{state.shopcar = payload},
    [types.SHOW_MYNAME]:(state,payload)=>{
        state.myname=payload;
    },
    [types.HIDE_MYNAME]:(state,payload)=>{
        state.myname=payload;
    },
    
//注册设置用户名、密码
    [types.SET_UNAME]:(state,payload)=>{state.userName=payload},
    [types.SHOW_NAME_SPAN]:(state,payload)=>{state.showNameSpan=true},
    [types.HIDE_NAME_SPAN]:(state,payload)=>{state.showNameSpan=false},
    
    [types.SET_PSD]:(state,payload)=>{state.passWord=payload},
    [types.SHOW_PSD_SPAN]:(state,payload)=>{state.showPsdSpan=true},    
    [types.HIDE_PSD_SPAN]:(state,payload)=>{state.showPsdSpan=false},
//登录注册状态页
    [types.REG_SUCCESS]:(state,payload)=>{
        state.regSuc=true;
        state.regErr=false;
        state.regErrTwo=false;
        state.loginSuc=false;
        state.loginErr=false;
        state.loginErrTwo=false;
    },
    [types.REG_ERROR]:(state,payload)=>{
        state.regSuc=false;
        state.regErr=true;
        state.regErrTwo=false;
        state.loginSuc=false;
        state.loginErr=false;
        state.loginErrTwo=false;
    },
    [types.REG_ERROR_TWO]:(state,payload)=>{
        state.regSuc=false;
        state.regErr=false;
        state.regErrTwo=true;
        state.loginSuc=false;
        state.loginErr=false;
        state.loginErrTwo=false;
    },
    [types.LOGIN_SUCCESS]:(state,payload)=>{
        state.regSuc=false;
        state.regErr=false;
        state.regErrTwo=false;
        
        state.loginSuc=true;
        state.loginErr=false;
        state.loginErrTwo=false;
    },
    [types.LOGIN_ERROR]:(state,payload)=>{
        state.regSuc=false;
        state.regErr=false;
        state.regErrTwo=false;
        state.loginSuc=false;
        state.loginErr=true;
        state.loginErrTwo=false;
    },
    [types.LOGIN_ERROR_TWO]:(state,payload)=>{
        state.regSuc=false;
        state.regErr=false;
        state.regErrTwo=false;
        state.loginSuc=false;
        state.loginErr=false;
        state.loginErrTwo=true;
    },

    [types.SET_LOGIN_NAME]:(state,payload)=>{state.userName=payload},
    [types.SET_LOGIN_PSD]:(state,payload)=>{state.passWord=payload},
//  
    [types.CANCEL]:(state,payload)=>{
        state.regSuc=false;
        state.regErr=false;
        state.regErrTwo=false;
        state.loginSuc=false;
        state.loginErr=false;
        state.loginErrTwo=false;
    }
};
export default mutations;