import {fillzero} from './fillzero';
/* 
export const date=(time)=>{
  var d=new Date();
  d.setTime(time);
  return `${d.getFullYear()}年/${fillzero(d.getSeconds())}`;
}; */
export const date=(time)=>{
  let str=time.join("/");
  return str;
};