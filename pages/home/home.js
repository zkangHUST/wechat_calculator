// pages/home/home.js
import {evalMath} from "./eval-math.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [
      'C', '(',')', '/',
      '7', '8', '9', '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '%', '='
    ],
    curResult: "",
    curValue: ""
  },
  isOperator(item) {
    // return true[lp.;]
    // if (item == '(') {
      // return true
    // }
    return ['(', ')', '=', 'CE', '/', '*', '-', '+'].includes(item)
  },
  getClassName(item) {
    if (['C', '(', ')'].includes(item)) {
      return 'oper_type1'
    } else if (['/', '*', '-', '+', '='].includes(item)) {
      return 'oper_type0'
    }
    return 'button'
  },
  onClick(event) {
    // console.log(event)
    const key = event.currentTarget.dataset.key
    console.log(this.isOperator(key))


    if (key === '=') {
      this.setData({
        curResult: this.data.curValue + '=' 
      })
      const res = evalMath(this.data.curValue)
      this.setData({
        curValue: res
      })
    } else if (key === 'C') {
      this.setData({
        curResult:'',
        curValue:''
      })
    } else {
      this.setData({
        curValue: this.data.curValue + key
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      const buttons = this.data.buttons.map(item => ({
        value: item,
        className: this.getClassName(item)
      }));
      this.setData({ buttons });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})