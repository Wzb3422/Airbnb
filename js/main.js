let i = 1
function beforeMove(obj) {
  let content = document.querySelector('.content')
  let item = createDiv('item')
  let img = document.createElement('img')
  img.src = obj.imgURL
  item.appendChild(img)
  let itemText = createDiv('itemText')
  itemText.innerText = obj.itemText
  item.appendChild(itemText)
  let itemBtn = createDiv('itemButton')
  itemBtn.innerText = obj.itemBtn
  item.appendChild(itemBtn)
  content.appendChild(item)
}
function move() {
  let content = document.querySelector('.content')
  content.style.left = '-100%'
}
function afterMove() {
  let content = document.querySelector('.content')
  content.removeChild(content.firstElementChild)
  content.className = 'noTran'
  let noTran = document.querySelector('.noTran')
  noTran.style.left = '0%'
}
function whichObj() {
  let obj1 =  {
    id: 1,
    imgURL: './imgaes/swiper1.jpg',
    itemText: '爱彼迎新春特惠\n缤纷礼包,尽兴旅行',
    itemBtn: '领取千元礼包'
  }
  let obj2 = {
    id: 2,
    imgURL: './imgaes/swiper2.jpg',
    itemText: '大理慢生活\n留下全家的温暖回忆',
    itemBtn: '查看合集'
  }
  let obj3 = {
    id: 3,
    imgURL: './imgaes/swiper3.jpg',
    itemText: '住进「山水间」\n在民居中亲近自然',
    itemBtn: '查看指南'
  }
  i +=1
  let ret = null
  switch (i % 3) {
    case 1:
      ret = obj1;
      break;
    case 2:
      ret = obj2;
      break;
    default:
      ret = obj3;
  }
  return ret
}
function moveControl() {
  if (document.querySelector('.noTran') != null) {
    document.querySelector('.noTran').className = 'content'
  }
  let obj = whichObj()
  showLoadingBar(obj.id)
  beforeMove(obj)
  move()
  setTimeout(function () {
    afterMove()
  }, 4000)
}
showLoadingBar(1)
setInterval(function () {
  moveControl()
}, 8000)
function createDiv(className) {
  let div = document.createElement('div')
  div.className = className
  return div
}
function showLoadingBar(id) {
  let selector = '#bar' + id.toString()
  let bar = document.querySelector(selector)
  let innerBar = createDiv('loadingBar')
  innerBar.classList.add('animated', 'slideInLeft')
  bar.appendChild(innerBar)
  setTimeout(function () {
    bar.removeChild(bar.firstChild)
  }, 8000)
}
