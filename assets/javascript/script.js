// Hiển thị bảng bán vé
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalShow = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

//Hàm hiển thị bảng mua vé (thêm class open ở .modal)
function showBuyTicket(){
  modalShow.classList.add('open')
}

//Hàm đóng bảng mua vé (xóa class open ở .modal)

function closeBuyTicket(){
  modalShow.classList.remove('open')
}

// Lặp qua từng nút bấm check xem có sự kiện click không 
for(const buyBtn of buyBtns){
  buyBtn.addEventListener('click',showBuyTicket)
}

// Nghe hành vi click vào button close
modalClose.addEventListener('click',closeBuyTicket)
modalShow.addEventListener('click',closeBuyTicket)
modalContainer.addEventListener('click', function(event){
  event.stopPropagation()
})


// Hiển thị menu navbar in moblie 

var header = document.getElementById('header')
var mobileMenu = document.getElementById('moblie-menu-button')
var headerHeight = header.clientHeight


//Đóng mở mobile Menu

function getMenu(){
  var isClosed = header.clientHeight === headerHeight
  if(isClosed){
    header.style.height = 'auto';
  }else{
    header.style.height = null;
  }}
  mobileMenu.addEventListener('click',getMenu)

// Tự động đóng khi click menu
var menuItems = document.querySelectorAll('#navbar li a[href*="#"]');

for(var i = 0; i < menuItems.length; i++){
  var menuItem = menuItems[i];



  menuItem.onclick = function(event){
    var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if(isParent){
      event.preventDefault();
    }else{
      header.style.height = null;
    }

  }
    

  
};



