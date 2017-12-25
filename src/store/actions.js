//处理组件发送的请求，并进行相应的业务逻辑，commit给mutations做突变
import * as types from "./types"; //types.INCREM..
import axios from "axios";
import router from "vue-router";

let actions={
    /* [types.INCREMENT]:({commit,state},payload)=>{
        console.log("actions接受到的数据:",payload);  
        let newObj = Object.assign({},state.data,payload); //合并对象
        commit(types.INCREMENT,newObj);  //建议提交给mutations的数据是新的 或者是copy一份的
    },
    jia:({commit,state},payload)=>{
        console.log("actions接受到的数据:",payload);
        let newObj = Object.assign({},state.data,payload);
        commit(types.INCREMENT,newObj); //请求类型，携带数据  actions-->mutations
    }, */

    //显示loading加载条
    showLoading:({commit,state})=>{commit(types.SHOW_LOADING);},
    //隐藏loading加载条
    hideLoading:({commit,state})=>{commit(types.HIDE_LOADING);},

    //显示公共头部
    showNav:({commit,state})=>{commit(types.SHOW_NAV)},
    //隐藏公共头部
    hideNav:({commit,state})=>{commit(types.HIDE_NAV)},
    //点击显示头部  更多下拉框
    showNavList:({commit,state})=>{commit(types.SHOW_NAV_LIST)},
    //页面跳转时 隐藏下拉框
    hideNavList:({commit,state})=>{commit(types.HIDE_NAV_LIST)},
    //当前页面 延迟5秒下拉框消失
    hideNavList2:({commit,state})=>{
        setTimeout(()=>{
            commit(types.HIDE_NAV_LIST2)
        },5000);
    },
    //公共头部  右侧图标，like页面时 显示刷新图标
    uiBtnRefresh:({commit,state})=>{commit(types.UI_BTN_REFRESH)},
    //公共头部  右侧图标，除like页面 显示home图标
    uiBtnHome:({commit,state})=>{commit(types.UI_BTN_HOME)},
    //右侧图标load到首页或刷新
    HeadLoad:({commit,state})=>{commit(types.HEAD_LOAD)},
    //分享显示/隐藏蒙版
    showOverLay:({commit,state})=>{commit(types.SHOW_OVERLAY)},
    hideOverLay:({commit,state})=>{commit(types.HIDE_OVERLAY)},
    //点击上一页，如果当前页>1,  -1
    prePage:({commit,state})=>{
        if(state.currentpage>1){
            state.currentpage--;
        }else{
            state.currentpage=1;
        }
        //前一页码
        commit(types.PRE_PAGE,state.currentpage);
        
        let newList = state.photoList.slice((state.currentpage-1)*3,3);
        //前一页
        commit(types.PRE_LIST,newList);
    },
    //点击下一页，如果当前页<总页数1,  +1
    nextPage:({commit,state})=>{
        if(state.currentpage<state.pages){
            state.currentpage++;
        }else{
            state.currentpage=state.pages;
        }
        //后一页码
        commit(types.NEXT_PAGE,state.currentpage);
        //截取前页的list数据,获取剩余的list
        let newList = state.photoList.slice((state.currentpage-1)*3);
        //如果剩余数据大于三条，显示三条数据
        if(newList.length>=3){
            newList.splice(0,3);
        }
        // console.log(newList);
        //后一页
        commit(types.NEXT_LIST,newList);
    },
    //发送axios请求，获取mongodb中的photolist数据
    getPhotoData:({commit,state})=>{
        axios({
            url:"http://localhost:3000/photo",
              method:"get",
              params:{}
        }).then((res)=>{
          //   console.log(res,"axios",res.data);
          //  console.log([...this.getPhotoList]);  //[]  空
            let data = res.data;
            //将拿到的数据存放在state中
            commit(types.PHOTO_LIST,data);
            //计算页数
            const pages = Math.ceil(data.length/3);
            commit(types.TOTAL_PAGES,pages);
            //第一页的数据列表
            const list = data.slice(0,3);
            // console.log(list);
            commit(types.CURRENT_LIST,list);
        }).catch((res)=>{
            console.log(res,"photo数据请求错误")
        })
    },
    //在state中存放 当前点击的商品id,渲染相应的详情页面
    setDetailNum:({commit,state},payload)=>{
        let num = Number(payload);
        // console.log(num);
        num=num-1;
        commit(types.SET_DETAIL_NUM,num);
    },

    //加入购物车，将该项数据存入state中的shopcar数组
    addItem:({commit,state},payload)=>{
        //payload 是相应id的数据
        // console.log(state.detailNum); //数组中的下标
        //如果商品list中存在当前加入的，则num++，否则,添加一项
        let add = false;
        state.shopcar.forEach((item,index) => {
            if(item.id==payload.id){
                item.number++; //+1
                // item.totalPrice=Number(item.price*item.number);
                add=true;
            }
        });
        if(!add){
            payload.number=1;    //数量为1
            // item.totalPrice=item.price;
            state.shopcar.push(payload);
        }
    },
    //商品数量++/--
    changeItem:({commit,state},payload)=>{
        state.shopcar.forEach((item,index)=>{
            if(item.id==payload.id){
                if(item.number<1){
                    item.number=1;
                }else{
                    item.number+=payload.num;
                }
                // item.totalPrice=Number(item.price*item.number);
            }
        });
        //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
        commit(types.CHANGE_ITEM,[...state.shopcar]);
    },
    //删除某项商品
    delItem:({commit,state},payload)=>{
        state.shopcar.forEach((item,index)=>{
            if(item.id==payload.id){
                state.shopcar.splice(index,1);
            }
        });
        commit(types.DEL_ITEM,[...state.shopcar]);
    },
    //清空购物车
    clearBuycar:({commit,state},payload)=>{
        state.shopcar=[];
        commit(types.CLEAR_BUYCAR,[...state.shopcar]);
    },

    //注册设置用户名、密码
    setUname:({commit,state},payload)=>{
        // console.log("name",payload);
        if(	/^[a-zA-Z_]([\u2E80-\u9FFF]|\w){3,16}$/.test(payload)){ 
            //设置state中的userName值为当前注册的name
            commit(types.SET_UNAME,payload);
            //隐藏注册姓名错误提示
            commit(types.HIDE_NAME_SPAN);
        }else{
            let str="";
            // console.log("xingming");
            //设置state中的userName值为空
            commit(types.SET_UNAME,str);
            // alert("用户名输入错误");
            //显示注册姓名错误提示
            commit(types.SHOW_NAME_SPAN);
            return;
        }
    },
    setPsd:({commit,state},payload)=>{
        // console.log("psd",payload);
        if(/^[a-z0-9_-]{6,18}$/.test(payload)){
            //设置state中的passWord值为当前注册的psd
            commit(types.SET_PSD,payload);
            //隐藏注册密码错误提示
            commit(types.HIDE_PSD_SPAN);
        }else{
            let str="";
            // console.log("123");
            //设置state中的passWord值为空
            commit(types.SET_UNAME,str);
            // alert("请输入6-18位密码");
            //显示注册密码错误提示
            commit(types.SHOW_PSD_SPAN);
            return;
        };
    },
    //发送axios注册请求
    regist:({commit,state},payload)=>{
        // console.log(payload);
        axios({
            url:"http://localhost:3000/regist",
            method:"get",
            params:payload
        }).then((res)=>{
            // 01/00      1已存在    2为空
            // console.log("hengheng",res.data);
            if(res.data.error==0){
                //注册成功            
                commit(types.REG_SUCCESS);
                // this.$router.push({path:"/login",params:{},query:{}});
            }else if(res.data.error==1){
                //用户名已存在
                commit(types.REG_ERROR);
            }else{
                //error=2
                //用户名或密码不能为空
                commit(types.REG_ERROR_TWO);  
            }
            //隐藏姓名或密码错误提示
            commit(types.HIDE_NAME_SPAN);
            commit(types.HIDE_PSD_SPAN);   
            
        }).catch((res)=>{
            console.log(res,"注册请求错误");
        })
    }, 
    //设置state中的userName为当前输入的name
    setIptName:({commit,state},payload)=>{
        commit(types.SET_LOGIN_NAME,payload);
    },
    //设置state中的passWord为当前输入的psd
    setIptPsd:({commit,state},payload)=>{
        commit(types.SET_LOGIN_PSD,payload);
    },
    //发送axios登录请求
    login:({commit,state},payload)=>{
        // console.log(payload);
        axios({
            url:"http://localhost:3000/login",
            method:"get",
            params:payload
        }).then((res)=>{
            // 01/00      1不存在   2用户名或密码不能为空 
            // console.log("hengheng",res.data);
            if(res.data.error==0){
                // console.log('1010202')
                commit(types.LOGIN_SUCCESS);
                //登录成功,将用户姓名存入state,并在购物车中显示
                let obj = {name:payload.loginName,showName:true};
                let newObj = Object.assign({},state.myname,obj)
                commit(types.SHOW_MYNAME,newObj);   
            }else if(res.data.error==1){
                commit(types.LOGIN_ERROR);
                //用户名不存在，登录失败
                let obj = {name:payload.loginName,showName:false};
                let newObj = Object.assign({},state.myname,obj)
                commit(types.HIDE_MYNAME,newObj); 
            }else{
                //error=2
                //用户名或密码不能为空 
                commit(types.LOGIN_ERROR_TWO); 
                let obj = {name:payload.loginName,showName:false};
                let newObj = Object.assign({},state.myname,obj)
                commit(types.HIDE_MYNAME,newObj); 
            }

        }).catch((res)=>{
            console.log(res,"登录请求错误");
        })
    },

    //登录注册状态页面，点击取消
    cancel:({commit,state},payload)=>{
        commit(types.CANCEL);
    }
};

export default actions;