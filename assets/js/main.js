var arrProduct = [];
function createProduct() {
    if (localStorage.getItem('product') == null) {

        arrProduct = [
            {
                id: "0",
                img: 'apple1.png',
                name: 'Macbook Air 13" 2020 - M1 256GB',
                prices: '900',
                type: "apple"
            },

            {
                id: "1",
                img: 'apple2.png',
                name: 'Macbook Air M2 13.6" 2022 - 512GB',
                prices: '1500',
                type: "apple"
            },

            {
                id: "2",
                img: 'apple3.png',
                name: 'Macbook Pro M2 13" 2022 - 256GB',
                prices: '1200',
                type: "apple"
            },

            {
                id: "3",
                img: 'apple4.png',
                name: 'Macbook Pro M2 13" 2022 - 512GB',
                prices: '1400',
                type: "apple"
            },

            {
                id: "4",
                img: 'apple5.png',
                name: 'Apple M1 - MacBook Pro 13" 256GB 2020',
                prices: '1100',
                type: "apple"
            },

            {
                id: "5",
                img: 'apple6.png',
                name: 'Macbook Pro 14" 2021 - M1 Pro 14 Core GPU/512GB',
                prices: '1900',
                type: "apple"
            },

            {
                id: "6",
                img: 'apple7.png',
                name: 'Macbook Pro 16" 2021 - M1 Max 32 Core GPU/1TB',
                prices: '3300',
                type: "apple"
            },

            {
                id: "7",
                img: 'apple8.png',
                name: 'Macbook Pro 16" 2021 - M1 Pro 16 Core GPU/512GB',
                prices: '2300',
                type: "apple"
            },

            {
                id: "8",
                img: 'dell1.png',
                name: 'Dell Inspiron 15 3511 P112F001FBL I5-1135G7/8GB/512GB/15.6',
                prices: '600',
                type: "dell"
            },


            {
                id: "9",
                img: 'dell2.png',
                name: 'Dell Inspiron 16 5620 i5P165W11SLU i5-1240P/16GB/512GB/Intel Iris Xe/16.0 inch FHD',
                prices: '900',
                type: "dell"
            },

            {
                id: "10",
                img: 'dell3.png',
                name: 'Dell Inspiron 16 5620-N6I7110W1, i7-1255U/8GB/512GB/16FHD',
                prices: '900',
                type: "dell"
            },

            {
                id: "11",
                img: 'dell4.png',
                name: 'Dell Inspiron 15 3520-71001747- i7-1255U/8GB/512GB SSD,/15.6"',
                prices: '850',
                type: "dell"
            },

            {
                id: "12",
                img: 'dell5.png',
                name: 'Dell Vostro 5620 V6I5001W1, i5-1240P/8GB/256GB/16FHD',
                prices: '800',
                type: "dell"
            },

            {
                id: "13",
                img: 'dell6.png',
                name: 'Dell Vostro 5620 P117F001AGR i7-1260P/16GB/512GB/Iris Xe Graphics/16 inch FHD',
                prices: '1000',
                type: "dell"
            },

            {
                id: "14",
                img: 'asus1.png',
                name: 'Asus Zenbook UX482EA-KA397W - (i5-1135G7/8GB/512GB/14.0" FHD/WiFi6/Win 11)',
                prices: '1100',
                type: "asus"
            },

            {
                id: "15",
                img: 'asus2.png',
                name: 'ASUS ZenBook 14 UX3402ZA-KM221W, i7-1260P/16GB/512GB/14OLED/Win11/Blue',
                prices: '1100',
                type: "asus"
            },

            {
                id: "16",
                img: 'asus3.png',
                name: 'ASUS ZenBook UP5401ZA-KN005W- i5-12500H/8GB/512GB/14WQ+_T/OLED/W11H/Xám',
                prices: '900',
                type: "asus"
            },

            {
                id: "17",
                img: 'asus4.png',
                name: 'Laptop Gaming Asus Rog Strix G15 G513RC HN038W - R7-6800H/8GB/512GB/4GB RTX3050/15.6 FHD/WIN11/XÁM',
                prices: '1000',
                type: "asus"
            },

            {
                id: "18",
                img: 'asus5.png',
                name: 'Laptop Gaming Asus Rog Strix G15 G513IM - HN008W - R7-4800H/16GB/512GB/RTX3060/15.6FHD/Win11/Xám',
                prices: '1100',
                type: "asus"
            },

            {
                id: "19",
                img: 'asus6.png',
                name: 'ASUS TUF Gaming A15 FA507RC-HN051W, R7-6800H/8GB/512GB/15.6FHD/144Hz/RTX3050/W11SL/Xám',
                prices: '900',
                type: "asus"
            },

            {
                id: "20",
                img: 'asus7.png',
                name: 'ASUS TUF Gaming FX506HM-HN366W, i7-11800H/8GB/512GB/RTX3060/15.6FHD144Hz/W11SL/Đen',
                prices: '1100',
                type: "asus"
            },

            {
                id: "21",
                img: 'asus8.png',
                name: 'ASUS Gaming TUF Dash F15 FX517ZE-HN045W (i5-12450H/8GB/512GB/3050Ti 4GB15.6inchFHD/ Win11',
                prices: '1000',
                type: "asus"
            },

            {
                id: "22",
                img: 'asus9.png',
                name: 'ASUS ZenBook 14 UX3402ZA-KM219W, i5-1240P/16GB/512GB/14.OLED.QWXGA/W11SL/Xanh',
                prices: '1000',
                type: "asus"
            },

            {
                id: "23",
                img: 'asus10.png',
                name: 'ASUS ZenBook Flip UX363EA-HP726W, i5-1135G7/8GB/512GB/Touch/Pen/Cáp/Túi/Win11/Xám ',
                prices: '800',
                type: "asus"
            },

            {
                id: "24",
                img: 'asus11.png',
                name: 'ASUS ProArt W7600Z3A-L2048W-i9-12900H/32GB/1TB/RTXA3000/16OLED4K/W11SL/Đen',
                prices: '3000',
                type: "asus"
            },

            {
                id: "25",
                img: 'asus12.png',
                name: 'ASUS ProArt H7600ZM-L2079W-i9-12900H/32GB/1TB/RTX3060/16OLED4K/W11SL/Đen',
                prices: '2500',
                type: "asus"
            },

            {
                id: "26",
                img: 'asus13.png',
                name: 'Asus TUF Gaming F15 FX507ZE - HN093W - i7 - 12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Xám',
                prices: '1100',
                type: "asus"
            },

            {
                id: "27",
                img: 'asus14.png',
                name: 'Asus TUF Gaming Dash FX517ZC-HN077W- i5-12450H/8GB/512GB/15.6FHD144Hz/W11SL/4GD6_RTX3050',
                prices: '950',
                type: "asus"
            },

            {
                id: "28",
                img: 'asus15.png',
                name: 'ASUS TUF Gaming F17 FX706HC-HX105W I5-11400H/8GB/512GB/VGA 4GB RTX3050/17.3 FHD 144HZ/WIN11/ĐEN',
                prices: '750',
                type: "asus"
            },

            {
                id: "29",
                img: 'asus16.png',
                name: 'ASUS TUF Gaming F15 FX506HC-HN144W, i5-11400H/8GB/512GB/RTX3050/15.6FHD144HZ/W11SL/Đen',
                prices: '800',
                type: "asus"
            },

            {
                id: "30",
                img: 'asus17.png',
                name: 'ASUS TUF Gaming A15 FA507RM-HN018W, R7-6800H/8GB/512GB/RTX3060/15.6FHD144Hz/W11SL/Xám',
                prices: '1100',
                type: "asus"
            },

            {
                id: "31",
                img: 'keyboard1.png',
                name: 'Bàn phím cơ AKKO 3098N Multi-modes Black & Cyan',
                prices: '120',
                type: "keyboard"
            },

            {
                id: "32",
                img: 'keyboard2.png',
                name: 'Bàn phím cơ AKKO PC75B Plus v2 Black Gold',
                prices: '120',
                type: "keyboard"
            },

            {
                id: "33",
                img: 'keyboard3.png',
                name: 'Bàn phím cơ Fuhlen H95S Panda 3 Mode Wireless',
                prices: '120',
                type: "keyboard"
            },

            {
                id: "34",
                img: 'keyboard4.png',
                name: 'Bàn phím cơ AKKO 3098N Multi-modes Black & Cyan',
                prices: '90',
                type: "keyboard"
            },

            {
                id: "35",
                img: 'keyboard5.png',
                name: 'Bàn phím iKBC CD87 Vintage',
                prices: '70',
                type: "keyboard"
            },

            {
                id: "36",
                img: 'keyboard6.png',
                name: 'Bàn phím Keychron K8 Pro Keycap Đen Khung Nhôm Led RGB',
                prices: '100',
                type: "keyboard"
            },

            {
                id: "37",
                img: 'keyboard7.png',
                name: 'Bàn phím Newmen GM840 Pro Hạc Vũ Ánh Trăng',
                prices: '75',
                type: "keyboard"
            },

            {
                id: "38",
                img: 'keyboard8.png',
                name: 'Bàn phím Newmen GM610 Pro Hạc Vũ Ánh Trăng',
                prices: '55',
                type: "keyboard"
            },

            {
                id: "39",
                img: 'keyboard9.png',
                name: 'Bàn phím cơ AKKO 3098S World Tour London',
                prices: '80',
                type: "keyboard"
            },

            {
                id: "40",
                img: 'keyboard10.png',
                name: 'Bàn phím Rapoo V500 Pro Multimode TKL',
                prices: '40',
                type: "keyboard"
            },

            {
                id: "41",
                img: 'mouse1.png',
                name: 'Chuột Logitech G102 Lightsync RGB White',
                prices: '15',
                type: "mouse"
            },

            {
                id: "42",
                img: 'mouse2.png',
                name: 'Chuột Logitech POP with Emoji Button Blast Yellow',
                prices: '20',
                type: "mouse"
            },

            {
                id: "43",
                img: 'mouse3.png',
                name: 'Chuột Logitech G402 Hyperion',
                prices: '25',
                type: "mouse"
            },

            {
                id: "44",
                img: 'mouse4.png',
                name: 'Chuột Razer DeathAdder V2',
                prices: '40',
                type: "mouse"
            },

            {
                id: "45",
                img: 'mouse1.png',
                name: 'Chuột Dare-U A918 Wireless - BLACK',
                prices: '20',
                type: "mouse"
            },

            {
                id: "46",
                img: 'mouse1.png',
                name: 'Chuột SteelSeries Aerox 3',
                prices: '20',
                type: "mouse"
            },

            {
                id: "47",
                img: 'mouse7.png',
                name: 'Chuột không dây Rapoo MT550',
                prices: '20',
                type: "mouse"
            },

            {
                id: "48",
                img: 'mouse8.png',
                name: 'Chuột gaming Corsair Harpoon Pro RGB',
                prices: '15',
                type: "mouse"
            },

            {
                id: "49",
                img: 'mouse9.png',
                name: 'Chuột ASUS ROG Keris Wireless',
                prices: '70',
                type: "mouse"
            },

            {
                id: "50",
                img: 'mouse10.png',
                name: 'Chuột Asus ROG Strix Impact II Gundam Edition',
                prices: '50',
                type: "mouse"
            },

        ];
        localStorage.setItem('product', JSON.stringify(arrProduct));
    } else {
        arrProduct = JSON.parse(localStorage.getItem('product'));
    }
}

var arrCustomer = [];
function createCustomer()
{

    if(localStorage.getItem('customer') == null)
    {
        arrCustomer = [
            {
                user: 'admin',
                password: 'admin',
                email: 'lydatltd@gmail.com',
                level: 0,
                comment:[],
                status:"Hoạt động"
            },
            {
                user: 'datisekai',
                password: 'bedatdz',
                email: 'lydatltd@gmail.com',
                level: 1,
                comment:[],
                status:"Hoạt động"
            }
        ];
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
    } else{
        arrCustomer = JSON.parse(localStorage.getItem('customer'));
    }
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);//bat dau tu 1
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {// ma hoa
            return decodeURIComponent(pair[1]);
        }
    }
}

createProduct();
createCustomer();

function displayLogin()
{
    document.querySelector('.modal__login').style.display = "block";
}

function hideLogin()
{
    document.querySelector('.modal__login').style.display = "none";// chọn thứ mình muốn thay đổi tương tự dùng cssquerySelector
    hideErrorUser();
    hideErrorPass();
    hideErrorEmail();
}
function onLogin()
{
    window.sessionStorage;
    var admin = false;
    var level = 1;
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    var flag = -1;
    if(username == "")
    {
        document.getElementById('errorUser').textContent = "Username không được bỏ trống";
        flag = 0;
    }
    if(password == "")
    {
        document.getElementById('errorPass').textContent = "Password không được bỏ trống";
        flag = 0;
    }
    for(var index in arrCustomer)
    {
        if(arrCustomer[index].user.toUpperCase() == username.toUpperCase())
        {
            if(arrCustomer[index].status == "Bị khóa")
            {
                flag = -2;
                break;
            }
        }
    }

    for (var i=0;i<arrCustomer.length;i++)
    {
        if (username.toUpperCase() == arrCustomer[i].user.toUpperCase() && password == arrCustomer[i].password && arrCustomer[i].status !="Bị khóa")
        {
            flag = 1;
            if(arrCustomer[i].level == 0) {
                level = arrCustomer[i].level; admin = true;
            }
            break;
        }
    }

    if (flag==1){
        sessionStorage.setItem('user',username);
        sessionStorage.setItem('level',level)
        hideLogin();
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('hasLogin').style.display = 'flex';
        document.getElementById('userLogin').textContent = username;
        swal("Đăng nhập thành công!", "Bạn đã có thể mua hàng!", "success");
        hideErrorUser();
        hideErrorPass();
        hideErrorEmail();
        if (admin == 1) document.getElementById('admin').style.display = "";
        else {
            document.getElementById('admin').style.display = "none";
        }
        
    }
    else if(flag == -1){
        document.getElementById('errorLogin').textContent = "Username hoặc Password không chính xác!";
    } 
    else if(flag == -2)
    {
        document.getElementById('errorLogin').textContent = "Tài khoản của bạn đã bị khóa.";
    }
    
}

// Require jQuery
function scrollSmoothToBottom() 
{
    window.scrollTo(0, document.body.scrollHeight);
}


function hideErrorUser()
{
    document.getElementById('errorUser').textContent = "";
    document.getElementById('errorLogin').textContent = "";
}

function hideErrorPass()
{
    document.getElementById('errorPass').textContent = "";
    document.getElementById('errorLogin').textContent = "";
}

function hideErrorEmail()
{
    document.getElementById('errorEmail').textContent = "";
}


function onRegister()
{
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var flag = 1;
    if(username == "" || username.length < 5)
    {
        document.getElementById('errorUser').textContent = "Username phải lớn hơn 5 kí tự";
        flag = 0;
    }
    if(password == "" || password.length < 5)
    {
        document.getElementById('errorPass').textContent = "Password phải lớn hơn 5 kí tự";
        flag = 0;
    }
    if(email == "" || email.length < 5 || email.indexOf('@') == -1)
    {
        document.getElementById('errorEmail').textContent = "Email phải có @ và lớn hơn 5 kí tự";
        flag = 0;
    }
    if(username != "" && password != "" && email != "")
    {
        for (var i=0;i<arrCustomer.length;i++)
        {
            if(username.toUpperCase() == arrCustomer[i].user.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Username đã tồn tại";
                flag = -1;
                break;
            }
            if(email.toUpperCase() == arrCustomer[i].email.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Email đã tồn tại";
                flag = -1;
                break;
            }
        }
    }

    if(flag == 1)
    {
        var customer = {
            user: username,
            password: password,
            email: email,
            level: 1,
            status:"Hoạt động"
        };
        arrCustomer.push(customer);;
        swal("Đăng ký thành công!", "Vui lòng đăng nhập", "success");
        onSignIn();
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
        console.log(arrCustomer);
    }

}

function checkSession()
{
    if(sessionStorage.getItem('user') != null)
    {
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('userLogin').textContent = sessionStorage.getItem('user');
        document.getElementById('hasLogin').style.display = 'flex';
    }
    if(parseInt(sessionStorage.getItem('level')) == 0)
    {
        document.getElementById('admin').style.display = "";
    }
    else{
        document.getElementById('admin').style.display = "none";
    }
}

function isLogin()
{
    if(sessionStorage.getItem('user') != null) return true;
    return false;
}

function onLogOut()
{
    swal({
        title: "Bạn muốn đăng xuất?",
        text: "Khi muốn mua hàng, bạn sẽ phải đăng nhập lại!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('level');
            window.location = "index.html";
        }
      });
    
}


function onSignUp()
{
    document.querySelector('.modal__content-heading').textContent = "REGISTER";
    document.getElementById('modal__email').style.display = "block";
    document.getElementById('register').style.display = "";
    document.getElementById('login').style.display = "none";
    document.getElementById('modal-signup').style.display = "none";
    document.getElementById('modal-signin').style.display = "";
    /*document.querySelector('.modal__content-login-other').style.display = 'none';*/
    /*document.querySelector('.modal__content-social').style.display = 'none';*/
    hideErrorEmail();
    hideErrorPass();
    hideErrorUser();
}

function onSignIn()
{
    document.querySelector('.modal__content-heading').textContent = "LOGIN";
    document.getElementById('modal__email').style.display = "none";
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "";
    document.getElementById('modal-signup').style.display = "";
    document.getElementById('modal-signin').style.display = "none";
    // document.querySelector('.modal__content-login-other').style.display = 'block';
    // document.querySelector('.modal__content-social').style.display = 'flex';
    hideErrorEmail();
    hideErrorPass();
    hideErrorUser();
}

//Slider
sliderRunning();
function sliderRunning()
{

    var counter = 1;
        setInterval(function(){
          document.getElementById('radio' + counter).checked = true;
          counter++;
          if(counter > 4)
          {
            counter = 1;
          }
        }, 3000);
}

// Render product
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
    
}
function getQueryVariable2(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    if (decodeURIComponent(vars[0]) == variable)
            return true;
    return null;
}
//xuly modal bars
function displayModalBars()
{
    document.getElementById('barsOverlay').style.display = "block";
    document.getElementById('barsContent').style.display = "block";
}

function hideModalBars()
{
    document.getElementById('barsOverlay').style.display = "none";
    document.getElementById('barsContent').style.display = "none";
    hideCategoryBars();
}

function displayCategoryBars()
{
    document.getElementById('barsCategoryItem').style.display = "block";
    document.getElementById('barCategoryClose').style.display = "block";
}

function hideCategoryBars()
{
    document.getElementById('barsCategoryItem').style.display = "none";
    document.getElementById('barCategoryClose').style.display = "none";
}


//xuly modal product
var btnProductClose = document.querySelector('.modal__product-close');
var modalProduct = document.querySelector('.modal__product');
var modalProductOverlay = document.querySelector('.modal__product-overlay');

modalProductOverlay.addEventListener('click',onProDuctClose)


btnProductClose.addEventListener('click', onProDuctClose);


function onProDuctClose()
{
    modalProduct.style.display = "none";
}

var minusProduct = document.querySelector('.minus');
var plusProduct = document.querySelector('.plus');
var quantifyProduct = document.querySelector('.quatify');
var quantify = 1;

plusProduct.addEventListener('click', function()
{
    quantify++;
    quantifyProduct.value = quantify;
});

minusProduct.addEventListener('click', function(){
    if(quantify == 1) quantify = 1;
    else {
        quantify--;
        quantifyProduct.value = quantify;
    }
});


function showModal(id)
{
    var arrModal;
    for (var i=0;i<arrProduct.length;i++)
    {
        if(arrProduct[i].id == id)
        {
            arrModal = arrProduct[i]; break;
        }
    }
    document.getElementById('modalProduct').style.display = "flex"; 
    var imgProduct = '<img src="./assets/img/'+arrModal.img+'" alt="">';
    document.getElementById("imgModalProduct").innerHTML = imgProduct;

    var nameProduct = '<h3 id="textModalProduct">'+arrModal.name+'</h3>';
    document.getElementById("nameModalProduct").innerHTML = nameProduct;

    var pricesProduct = '<p>Giá sản phẩm: <span>$'+arrModal.prices+'</span></p>';
    document.getElementById("pricesModalProduct").innerHTML = pricesProduct;

    document.getElementById('btnCart').innerHTML = '<input type="button" value="Thêm vào giỏ" id="addcart" onclick="addProductToCart('+id+')">';
    document.querySelector('.quatify').value = 1;
    document.querySelector('.btn__buynow').innerHTML = '<input type="button" value="Xem chi tiết" id="buynow" onclick="jumpToInfo('+id+')">'
}

function jumpToInfo(id)
{
    window.location = 'info.html?id='+id+'';
}

function getID()
{
    return id;
}

function showAlert()
{
   alert('datisekai');
}

function filterrange(){
    var min = document.getElementById("input-min").value;
    var max = document.getElementById("input-max").value;
    window.location = "index.html?min=" + min +"&max=" + max;
}

function renderProduct(arrProduct)
{
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrProductPag = arrProduct.slice(begin,end);
    sessionStorage.setItem('begin',begin);
    sessionStorage.setItem('end',end);
    var k = 0;
    var s = "";
    while (k<arrProductPag.length)
    {   
        
        s = s + '<div class="col l-3 m-4 c-12"> <div class="home__product-item" onclick="showModal('+arrProductPag[k].id+')"><div class="home__product-item-img"> <img src="./assets/img/'+arrProductPag[k].img+'" alt=""> </div>'+
                ' <div class="home__product-item-description"><h4>'+arrProductPag[k].name+'</h4></div>' + 
                '<div class="home__product-item-appreciate"><div class="appreciate-item"> <i class="appreciate-item-btn fas fa-star"></i> </div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' + ' <span>(1 Reviewer)</span>' + '</div>' + 
                '<div class="home__product-item-prices"><h4>$'+arrProductPag[k].prices+'</h4> </div>'+
                '<div class="home__product-item-btn"><button>View Info</button></div>' +
                '</div> </div>';  
                k++; 
    }
    document.getElementById('display_product').innerHTML = s;
}

function renderProduct1(arrProduct)
{
    var k = 0;
    var s = "";
    while (k<arrProduct.length)
    {   
        
        s = s + '<div class="col l-3 m-4 c-12"> <div class="home__product-item" onclick="showModal('+arrProduct[k].id+')"><div class="home__product-item-img"> <img src="./assets/img/'+arrProduct[k].img+'" alt=""> </div>'+
                ' <div class="home__product-item-description"><h4>'+arrProduct[k].name+'</h4></div>' + 
                '<div class="home__product-item-appreciate"><div class="appreciate-item"> <i class="appreciate-item-btn fas fa-star"></i> </div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' + ' <span>(1 Reviewer)</span>' + '</div>' + 
                '<div class="home__product-item-prices"><h4>$'+arrProduct[k].prices+'</h4> </div>'+
                '<div class="home__product-item-btn"><button>View Info</button></div>' +
                '</div> </div>';  
                k++; 
    }
    document.getElementById('display_product').innerHTML = s;
}

/*function pricerange(arrProduct){
    var min = getQueryVariable2('min');
    var max = getQueryVariable2('max');
    var arrSearch = [];
    var d = 0;
    for (var i=0;i<arrProduct.length;i++) {
        if(arrSearch.prices > min && arrSearch.prices < max) {
            arrSearch[d] = arrProduct[i];
            d++;
        }
    }
    return arrSearch;
}
*/
function renderDisplayProduct()
{
    var arrSearch = [];
    var d = 0;
    var count = 0;
    if(getQueryVariable2('product') != null) {
        for (var i=0;i<arrProduct.length;i++) {
            var array = arrProduct[i].type;  
            if(array == "apple" || array == "dell" || array == "asus") {
                arrSearch[d] = arrProduct[i];
                d++;
            }
        }
        renderProduct(arrSearch);
        }
        else {
            if(getQueryVariable2('accessory') != null) {
            for (var i=0;i<arrProduct.length;i++) { 
                var array = arrProduct[i].type;  
                if(array == "mouse" || array == "keyboard"){
                    arrSearch[d] = arrProduct[i];
                    d++;
                }
            }
            renderProduct(arrSearch);
            }
           else {
            if(getQueryVariable('product') !=null) {
                var product = getQueryVariable('product');
                for (var i=0;i<arrProduct.length;i++)
                {
                    if(arrProduct[i].type == product){
                        arrSearch[d] = arrProduct[i];
                        d++;
                    }
                }
                renderProduct(arrSearch);
            } else { 
                    if(getQueryVariable('accessory') !=null) {
                        var accessory = getQueryVariable('accessory');
                        for (var i=0;i<arrProduct.length;i++)
                        {
                            if(arrProduct[i].type == accessory){
                                arrSearch[d] = arrProduct[i];
                                d++;
                            }
                        }
                        renderProduct(arrSearch);
                    }
                    else {
                        if(getQueryVariable('min') !=null) {
                            var min = parseInt(getQueryVariable('min'));
                            var max = parseInt(getQueryVariable('max'));
                            for (var i=0;i<arrProduct.length;i++) {
                                if((arrProduct[i].prices > min) && arrProduct[i].prices < max) {
                                    arrSearch[d] = arrProduct[i];
                                    d++;
                                }
                            }
                            console.log(arrSearch);
                            renderProduct(arrSearch);
                        }
                        else {
                            sessionStorage.setItem('arrSearch',JSON.stringify(arrProduct));
                            renderProduct(arrProduct);
                            return arrProduct.length;
                        }
                    }
                }
            }
        }
        sessionStorage.setItem('arrSearch',JSON.stringify(arrSearch));
        return d;
}

function renderVQMM()
{
    var event = getQueryVariable('event');
    if(event == 'vqmm')
    {
        document.querySelector('.home__product').style.display = "none";
        document.querySelector('.select__search').style.display = "none";
        document.getElementById('header__search').style.display = "none";
       
        var s = '<h1 class="luckyheading">VÒNG QUAY</h1><div align="center" class=""><table >  <tr> <td><div class="power_controls">' +
        ' </div></td><td width="90%" height="auto" class="the_wheel" align="center" valign="center">' +
        '<canvas id="canvas" width="300" height="300"><p style="{color: white}" align="center"></p>' +
        '</canvas></td></tr></table>'+'<div class="spinlucky"><input type="button" value="Quay" id="spin_button" onclick="startSpin();"></br></br>' +
        '<p onclick="resetWheel(); return false;" id="playagain">Chơi lại</p><br /></div>' + '</div>';
        document.getElementById('content').innerHTML = s;
    }
}
renderVQMM();

//VQMM
let theWheel = new Winwheel({
    'numSegments'  : 8,    
    'outerRadius'  : 144,  
    'textFontSize' : 18,  
    'textFillStyle':'black',  
    'textFontFamily':'san-serif',
    'segments'     :   
    [
       {'fillStyle' : '#eae56f', 'text' : 'Mã Sale 5%'},
       {'fillStyle' : '#89f26e', 'text' : 'Mã Sale 10%'},
       {'fillStyle' : '#7de6ef', 'text' : 'Mã Sale 15%'},
       {'fillStyle' : '#e7706f', 'text' : 'Mã Sale 20%'},
       {'fillStyle' : '#eae56f', 'text' : 'Mã Sale 30%'},
       {'fillStyle' : '#89f26e', 'text' : 'Mã Sale 40%'},
       {'fillStyle' : '#7de6ef', 'text' : 'Mã Sale 50%'},
       {'fillStyle' : '#e7706f', 'text' : 'Mã Sale 70%'}
    ],
    'animation' :          
    {
        'type'     : 'spinToStop',
        'duration' : 5,    
        'spins'    : 8,     
        'callbackFinished' : alertPrize
    }
});
var arrSale = [];
function createIDSale()
{
        theWheel.segments[1]['keySale'] = "shopit5%";
        theWheel.segments[2]['keySale'] = "shopit10%";
        theWheel.segments[3]['keySale'] = "shopit15%";
        theWheel.segments[4]['keySale'] = "shopit20%";
        theWheel.segments[5]['keySale'] = "shopit30%";
        theWheel.segments[6]['keySale'] = "shopit40%";
        theWheel.segments[7]['keySale'] = "shopit50%";
        theWheel.segments[8]['keySale'] = "shopit70%";
        
        theWheel.segments[1]['valueSale'] = "0.05";
        theWheel.segments[2]['valueSale'] = "0.1";
        theWheel.segments[3]['valueSale'] = "0.15";
        theWheel.segments[4]['valueSale'] = "0.2";
        theWheel.segments[5]['valueSale'] = "0.3";
        theWheel.segments[6]['valueSale'] = "0.4";
        theWheel.segments[7]['valueSale'] = "0.5";
        theWheel.segments[8]['valueSale'] = "0.7";
        arrSale = theWheel.segments;
        localStorage.setItem('sale',JSON.stringify(arrSale));
}
createIDSale();
function startSpin()
{
    swal({
        title: "Bạn có chắc chắn muốn quay?",
        text: "Khi quay bạn sẽ nhận được mã khuyến mãi bất kì!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            theWheel.startAnimation();
        }
      });
   
}

function resetWheel()
{
    theWheel.stopAnimation(false);  
    theWheel.rotationAngle = 0;     
    theWheel.draw();                
    wheelSpinning = false;  
}

function alertPrize(indicatedSegment)
{
    swal("Bạn đã trúng " + indicatedSegment.text, "Mã giảm giá: " + indicatedSegment.keySale, "success");
    localStorage.setItem(sessionStorage.getItem('user') + 'sale',JSON.stringify(indicatedSegment));
}

function renderPagination(amount1)
{
    var product = getQueryVariable('product');
    var product2 = getQueryVariable2('product');
    var page = getQueryVariable('page') || 1;
    var prePage = 1;
    if(page > 1) prePage = parseInt(page) - 1;
    else {
          prePage = 1 + "#";
    }
    var maxPage;
    if(amount1 % 8 == 0)
    {
        maxPage = parseInt(amount1/8); 
    }
    else maxPage = parseInt(amount1/8) + 1; 
    var nextPage;
    if(page >= maxPage)
    {
        nextPage = maxPage + "# ";
    } else {
        nextPage = parseInt(page) + 1;
    }

    if(product2 != null) {
        document.getElementById('prePage').href = 'index.html?product'+'&page='+prePage;
        document.getElementById('nextPage').href = 'index.html?product'+'&page='+nextPage;
        document.getElementById('page1').href = 'index.html?product'+'&page=1';
        document.getElementById('page2').href = 'index.html?product'+'&page=2';
        document.getElementById('page3').href = 'index.html?product'+'&page=3';
    } else if(product != null) {
        document.getElementById('prePage').href = 'index.html?product='+product+'&page='+prePage;
        document.getElementById('nextPage').href = 'index.html?product='+product+'&page='+nextPage;
        document.getElementById('page1').href = 'index.html?product='+product+'&page=1';
        document.getElementById('page2').href = 'index.html?product='+product+'&page=2';
        document.getElementById('page3').href = 'index.html?product='+product+'&page=3';
    } else {
        document.getElementById('prePage').href = 'index.html?page='+prePage;
        document.getElementById('nextPage').href = 'index.html?page='+nextPage;
        document.getElementById('page1').href = 'index.html?page=1';
        document.getElementById('page2').href = 'index.html?page=2';
        document.getElementById('page3').href = 'index.html?page=3';
    }

    if(page ==1 )
    {
        document.getElementById('page1').style.backgroundColor = "#FCB35F";
        document.getElementById('page1').style.color = "white";
    } 
    else if(page == 2)
    {
        document.getElementById('page2').style.backgroundColor = "#FCB35F";
        document.getElementById('page2').style.color = "white";
    }
    else if(page == 3)
    {
        document.getElementById('page3').style.backgroundColor = "#FCB35F";
        document.getElementById('page3').style.color = "white";
    }
}
function renderPagination1(amount1)
{
    var accessory = getQueryVariable('accessory');
    var accessory2 = getQueryVariable2('accessory');
    var page = getQueryVariable('page') || 1;
    var prePage = 1;
    if(page > 1) prePage = parseInt(page) - 1;
    else {
          prePage = 1 + "#";
    }
    var maxPage;
    if(amount1 % 8 == 0)
    {
        maxPage = parseInt(amount1/8); 
    }
    else maxPage = parseInt(amount1/8) + 1; 
    var nextPage;
    if(page >= maxPage)
    {
        nextPage = maxPage + "# ";
    } else {
        nextPage = parseInt(page) + 1;
    }

    if(accessory2 != null) {
        document.getElementById('prePage').href = 'index.html?accessory'+'&page='+prePage;
        document.getElementById('nextPage').href = 'index.html?accessory'+'&page='+nextPage;
        document.getElementById('page1').href = 'index.html?accessory'+'&page=1';
        document.getElementById('page2').href = 'index.html?accessory'+'&page=2';
        document.getElementById('page3').href = 'index.html?accessory'+'&page=3';
    } else  if(accessory != null) { 
        document.getElementById('prePage').href = 'index.html?accessory='+accessory+'&page='+prePage;
        document.getElementById('nextPage').href = 'index.html?accessory='+accessory+'&page='+nextPage;
        document.getElementById('page1').href = 'index.html?accessory='+accessory+'&page=1';
        document.getElementById('page2').href = 'index.html?accessory='+accessory+'&page=2';
        document.getElementById('page3').href = 'index.html?accessory='+accessory+'&page=3';
    } else {
        document.getElementById('prePage').href = 'index.html?page='+prePage;
        document.getElementById('nextPage').href = 'index.html?page='+nextPage;
        document.getElementById('page1').href = 'index.html?page=1';
        document.getElementById('page2').href = 'index.html?page=2';
        document.getElementById('page3').href = 'index.html?page=3';
    }
    if(page ==1 )
    {
        document.getElementById('page1').style.backgroundColor = "#FCB35F";
        document.getElementById('page1').style.color = "white";
    } 
    else if(page == 2)
    {
        document.getElementById('page2').style.backgroundColor = "#FCB35F";
        document.getElementById('page2').style.color = "white";
    }
    else if(page == 3)
    {
        document.getElementById('page3').style.backgroundColor = "#FCB35F";
        document.getElementById('page3').style.color = "white";
    }
}
function renderPagination2(amount1)
{
    var min = getQueryVariable('min');
    var max = getQueryVariable('max');
    var page = getQueryVariable('page') || 1;
    var prePage = 1;
    if(page > 1) prePage = parseInt(page) - 1;
    else {
          prePage = 1 + "#";
    }
    var maxPage;
    if(amount1 % 8 == 0)
    {
        maxPage = parseInt(amount1/8); 
    }
    else maxPage = parseInt(amount1/8) + 1; 
    var nextPage;
    if(page >= maxPage)
    {
        nextPage = maxPage + "# ";
    } else {
        nextPage = parseInt(page) + 1;
    }

    if(min != null) {
        document.getElementById('prePage').href = 'index.html?min='+min+'&max='+max+'&page='+prePage;
        document.getElementById('nextPage').href = 'index.html?min='+min+'&max='+max+'&page='+nextPage;
        document.getElementById('page1').href = 'index.html?min='+min+'&max='+max+'&page=1';
        document.getElementById('page2').href = 'index.html?min='+min+'&max='+max+'&page=2';
        document.getElementById('page3').href = 'index.html?min='+min+'&max='+max+'&page=3';
    } else {
        document.getElementById('prePage').href = 'index.html?page='+prePage;
        document.getElementById('nextPage').href = 'index.html?page='+nextPage;
        document.getElementById('page1').href = 'index.html?page=1';
        document.getElementById('page2').href = 'index.html?page=2';
        document.getElementById('page3').href = 'index.html?page=3';
    }
    if(page == 1)
    {
        document.getElementById('page1').style.backgroundColor = "#FCB35F";
        document.getElementById('page1').style.color = "white";
    } 
    else if(page == 2)
    {
        document.getElementById('page2').style.backgroundColor = "#FCB35F";
        document.getElementById('page2').style.color = "white";
    }
    else if(page == 3)
    {
        document.getElementById('page3').style.backgroundColor = "#FCB35F";
        document.getElementById('page3').style.color = "white";
    }
}
/*
function renderContainerHeading()
{
    var product = getQueryVariable('product');
    if(product != null)
    {
        document.getElementById('containerHeading').textContent = product;
        document.querySelector('.container__heading').style.width = "150px";
    }
    else {
        document.getElementById('containerHeading').textContent = "LATEST PRODUCTS";
        document.querySelector('.container__heading').style.width = "260px";
    }
}
*/
function renderEmptyProduct()
{
    document.getElementById('display_product').innerHTML = '<div id="errorSearch">Không tìm thấy sản phẩm</div>'
}

window.onload = function()
{
    var amount1 = renderDisplayProduct();
    if(getQueryVariable("product") != null)
        renderPagination(amount1);
    else{
        if(getQueryVariable("accessory") != null) {
            renderPagination1(amount1);
        }
        else  renderPagination2(amount1);
    }
    /*renderContainerHeading();*/
    innerQuantify(quantifyCart);
    if(getQueryVariable('min') != null){
        var minVal = getQueryVariable('min');
        var maxVal = getQueryVariable('max');
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100  + "%";
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100  + "%";
    }
}


checkSession();

///search
function searchInfo(id)
{
    txtSearch = document.getElementById(id).value;
    if(txtSearch != '')
    {
        if(txtSearch.toUpperCase().indexOf('APP') != -1)
        {
            window.location = 'index.html?product=apple';
        }
        else if(txtSearch.toUpperCase().indexOf('DEL') != -1)
        {
            window.location = 'index.html?product=dell';
        }
        else if(txtSearch.toUpperCase().indexOf('ASU') != -1)
        {
            window.location = 'index.html?product=asus';
        }
        else if(txtSearch.toUpperCase().indexOf('KEY') != -1)
        {
            window.location = 'index.html?product=keyboard';
        }
        else if(txtSearch.toUpperCase().indexOf('MOU') != -1)
        {
            window.location = 'index.html?product=mouse';
        }
        else {
            renderEmptyProduct();
        }
    }
}

function preLoading()
{
    var preLoader = document.getElementById('preLoader');
    window.addEventListener('load', hideLoading);
}

function hideLoading()
{
    setTimeout(function(){
        preLoader.style.display = "none";
    },0);
}

preLoading();

function onSort()
{

    var sort = document.getElementById('sortPrices');
    switch(sort.value)
    {
        case '1':
            sortAscending();
            break;
        case '2':
            sortDescending();
            break;
    }
}


function sortAscending()
{
    var arrSearch = JSON.parse(sessionStorage.getItem('arrSearch'));
    var begin = parseInt(sessionStorage.getItem('begin'));
    var end = parseInt(sessionStorage.getItem('end'));
    var arrSearch1 = arrSearch.slice(begin,end);
    console.log(arrSearch1);
    var arrAscending = arrSearch1.sort(function(begin,end){
        return begin.prices - end.prices;
    });
    renderProduct1(arrAscending);
}

function sortDescending()
{
    var arrSearch = JSON.parse(sessionStorage.getItem('arrSearch'));
    var begin = parseInt(sessionStorage.getItem('begin'));
    var end = parseInt(sessionStorage.getItem('end'));
    var arrSearch1 = arrSearch.slice(begin,end);
    var arrDescending = arrSearch1.sort(function(begin,end){
        return end.prices - begin.prices;
    });
    renderProduct1(arrDescending);
}

//Cart

var arrMyProduct = [];
if(localStorage.getItem(sessionStorage.getItem('user')) == null)
{
    arrMyProduct == [];
} else{
    arrMyProduct = JSON.parse(localStorage.getItem(sessionStorage.getItem('user')));
}
var quantifyCart = arrMyProduct.length;
function addProductToCart(id)
{
    if(isLogin())
    {
        var userSession = sessionStorage.getItem('user');
        swal({
            title: "Bạn muốn thêm vào giỏ hàng?",
            text: "Bạn có thể tiếp tục mua hàng và thanh toán sau!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                var date = new Date();
                var curTime = date.getHours() + ":" + date.getMinutes();
                var curDate = curTime + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                if(localStorage.getItem(userSession)!=null)
                {
        
                    arrMyProduct.push(arrProduct[id]);
                    arrMyProduct[arrMyProduct.length -1]['quantify'] = 1;
                    arrMyProduct[arrMyProduct.length -1]['currentTime'] = curDate;
                }
                else{
                    arrMyProduct.push(arrProduct[id]);
                    arrMyProduct[0]['quantify'] = 1;
                    arrMyProduct[0]['currentTime'] = curDate;
                }
                
                localStorage.setItem(userSession,JSON.stringify(arrMyProduct));
                document.getElementById('modalProduct').style.display = "none";
                swal("Thêm thành công!", "Nếu bạn muốn thanh toán, vui lòng vào giỏ hàng!", "success");
                quantifyCart = arrMyProduct.length;
                innerQuantify(quantifyCart);
            } else {
              
            }
          });
    } else {
       document.getElementById('modalProduct').style.display = "none";
       displayLogin();
    }
}


function innerQuantify(quantifyCart)
{
    document.getElementById('quantifyProductCart').textContent = quantifyCart;
}



function onCart()
{
    if(isLogin())
    {
        window.location = "cart.html";
    } else{
        displayLogin();
    }
}

const rangeInput = document.querySelectorAll(".range-input input");
progress = document.querySelector(".frames .progress");
priceInput = document.querySelectorAll(".price-input input");

let priceGap = 500;

priceInput.forEach(input =>{
    input.addEventListener("input", a =>{
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);
        if((maxVal - minVal >= priceGap) && maxVal <= 4000){
            if(a.target.className === "input-min"){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100  + "%";
            }else {
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100  + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", a =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if(maxVal - minVal < priceGap){
            if(a.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else {
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100  + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100  + "%";
            console.log(minVal, maxVal)
        }
    });
});
