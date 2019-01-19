let i = 1
function createImg(num) {
  let img = document.createElement('img')
  img.src = './imgaes/swiper' + num + '.jpg'
  console.log(img.src)
  return img
}
function beforeMove(num) {
  let content = document.querySelector('.content')
  content.appendChild(createImg(num))
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
function whichImg() {
  i +=1
  let ret = 0
  switch (i % 3) {
    case 1:
      ret = 1;
      break;
    case 2:
      ret = 2;
      break;
    default:
      ret = 3;
  }
  return ret
}
function moveControl() {
  if (document.querySelector('.noTran') != null) {
    document.querySelector('.noTran').className = 'content'
  }
  let num = whichImg()
  beforeMove(num)
  move()
  setTimeout(function () {
    afterMove()
  }, 4000)
}
setInterval(function () {
  console.log('interval')
  moveControl()
}, 5000)
