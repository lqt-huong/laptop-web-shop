///search

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

            },
            {
                user: 'datisekai',
                password: 'bedatdz',
                email: 'lydatltd@gmail.com',
                level: 1,
            }
        ];
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
    } else{
        arrCustomer = JSON.parse(localStorage.getItem('customer'));
    }
}

createCustomer();
createProduct();
function searchInfo(id)
{
    txtSearch = document.getElementById(id).value;
    if(txtSearch != '')
    {
        if(txtSearch.toUpperCase().indexOf('IPH') != -1)
        {
            window.location = 'index.html?product=iphone';
        }
        else if(txtSearch.toUpperCase().indexOf('IPA') != -1)
        {
            window.location = 'index.html?product=ipad';
        }
        else if(txtSearch.toUpperCase().indexOf('MAC') != -1)
        {
            window.location = 'index.html?product=macbook';
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

function onCart()
{
    if(isLogin())
    {
        window.location = "cart.html";
    } else{
        displayLogin();
    }
}


function displayLogin()
{
    document.querySelector('.modal__login').style.display = "block";
}


function displayLogin()
{
    document.querySelector('.modal__login').style.display = "block";
}

function hideLogin()
{
    document.querySelector('.modal__login').style.display = "none";
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
            level: 1
           
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
        document.querySelector('action__comment').style.display = 'block';
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
    hideErrorEmail();
    hideErrorPass();
    hideErrorUser();
}

function isLogin()
{
    if(sessionStorage.getItem('user') != null) return true;
    return false;
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

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

// Info Product
function renderInfoProduct()
{
    const idProduct = getQueryVariable('id');
    var arrInfo = {};
    for (var index in arrProduct)
    {
        if(arrProduct[index].id == idProduct)
        {
            arrInfo = arrProduct[index];
            break;
        }
    }
    
    var html = ` <div class="view__product-left">

    <div class="view__product-img">
        <img src="./assets/img/${arrInfo.img}" alt="">
    </div>

    <div class="view__product-preview">
        <div class="view__product-preview-item">
            <img src="./assets/img/${arrInfo.img}" alt="">
        </div>
        <div class="view__product-preview-item">
            <img src="./assets/img/${arrInfo.img}" alt="">
        </div>
        <div class="view__product-preview-item">
            <img src="./assets/img/${arrInfo.img}" alt="">
        </div>
        <div class="view__product-preview-item">
            <img src="./assets/img/${arrInfo.img}" alt="">
        </div>
    </div>

    <div class="view__product-share">
        <div class="view__product-share-heading">
            Chia Sẻ:
        </div>

        <div class="view__product-share-icon">
            <div class="view__product-share-img">
                <img src="./assets/img/zalo.jpg" alt="">
            </div>

            <div class="view__product-share-img">
                <img src="./assets/img/facebook.png" alt="">
            </div>

            <div class="view__product-share-img">
                <img src="./assets/img/messenger.png" alt="">
            </div>

            <div class="view__product-share-img">
                <img src="./assets/img/twichter.png" alt="">
            </div>
        </div>
    </div>

</div>

<div class="view__product-right">

    <div class="view__product-right-heading">
        <p>${arrInfo.name}</p>
    </div>

    <div class="view__product-appreciate">
        <div class="view__product-appreciate-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        
        <div class="view__product-appreciate-quantify">
            40 Đánh giá
        </div>

        <div class="view__product-appreciate-done">
            467 Đã bán
        </div>
    </div>

    <div class="view__product-right-prices">
        <div class="view__product-right-prices-real">
            <p>${arrInfo.prices}$</p>
        </div>

        <div class="view__product-right-prices-sale">
            <p>5% Giảm</p>
        </div>
    </div>

    <div class="view__product-transport">
        <div class="view__product-transport-heading">
            <p>Vận chuyển tới</p>
        </div>

        <div class="view__product-select">
            <select name="" id="selectAddress">
                <option value="">An Giang</option>
                <option value="">Kiên Giang</option>
                <option value="">TP.HCM</option>
                <option value="">Bình Dương</option>
                <option value="">Bình Phước</option>
                <option value="">Bình Thuận</option>
            </select>
        </div>

        <div></div>
    </div>

    <div class="view__product-color">
        <div class="view__product-color-heading">
            <p>Màu sắc</p>
        </div>

        <div class="view__product-color-list">
            <button class="view__product-color-item">Trắng</button>
            <button class="view__product-color-item">Đỏ</button>
            <button class="view__product-color-item">Xanh</button>
            <button class="view__product-color-item">Tím</button>
        </div>

        <div></div>
    </div>

    <div class="view__product-quantify">
        <div class="view__product-quantify-heading">
            <p>Số lượng</p>
        </div>

        <div class="view__product-quantify-handle">
            <div class="quantify-handle-minus" onclick= "actionMinus();">
                <button>-</button>
            </div>

            <div class="quantify-handle">
                <input type="text" class="quantify-handle-input" value="1" readonly>
            </div>

            <div class="quantify-handle-plus" onclick = "actionPlus();">
                <button>+</button>
            </div>
        </div>

        <div></div>
    </div>

    <div class="view__product-btn">
        <div class="view__product-addcart" onclick= "addProductToCart(${idProduct});">
            <button><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
        </div>
        <div class="view__product-buynow" onclick = "goHome();">
            <button>Về trang chủ </button>
        </div>
    </div>

    <div class="view__product-description">
        <p>7 ngày miễn phí đổi trả</p>
        <p>Hàng chính hãng 100%</p>
    </div>
</div>`;
    document.querySelector('.view__product').innerHTML = html;
}

function goHome()
{
    window.location = "index.html";
}

window.onload = function()
{
    renderInfoProduct();
    renderComment();
    checkSession();
}

//Comment
var arrComment = [];
function createComment()
{

    if(localStorage.getItem('comment') == null)
    {

        arrComment = [
            {
                user:'admin',
                idProduct:'0',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'1',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'2',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'3',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'4',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            },
            {
                user:'admin',
                idProduct:'5',
                content:'Sản phẩm phù hợp cho mọi lứa tuổi.'
            }
            
        ];
        localStorage.setItem('comment',JSON.stringify(arrComment));
    } else{
        arrComment = JSON.parse(localStorage.getItem('comment'));
    }
}
createComment();
function renderComment()
{
    var html = "";
    const idSP = getQueryVariable('id');
    let arrRender = [];
    for (var index in arrComment)
    {
        if(arrComment[index].idProduct == idSP)
        {
            arrRender.push(arrComment[index]);
        }
    }
    for (var index in arrRender)
    {
        html += `<div class="comment__review-content-user">

            <div class="comment__review-author">
                <p><i class="fas fa-user"></i> ${arrRender[index].user}</p>
            </div>

            <div class="comment__review-description">
            <p>${arrRender[index].content}</p>
            </div>

        </div>`;

    }
    document.querySelector('.comment__review-content').innerHTML = html;
}


function submitComment()
{
    if(sessionStorage.getItem('user') != null)
    {

        const idProduct = getQueryVariable('id');
        const userSession = sessionStorage.getItem('user');
        const contentComment = document.getElementById('txtcomment').value;
        const objectCmt = {
            user:userSession,
            idProduct:idProduct,
            content:contentComment
        }
        arrComment.push(objectCmt);
        localStorage.setItem('comment',JSON.stringify(arrComment));
        document.getElementById('txtcomment').value = '';
        renderComment();
    } else {
        displayLogin();
    }
}


//End info

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
                swal("Thêm thành công!", "Nếu bạn muốn thanh toán, vui lòng vào giỏ hàng!", "success");
                quantifyCart = arrMyProduct.length;
                innerQuantify(quantifyCart);
            } else {
              
            }
          });
    } else {
       displayLogin();
    }
}
function innerQuantify(quantifyCart)
{
    document.getElementById('quantifyProductCart').textContent = quantifyCart;
}
