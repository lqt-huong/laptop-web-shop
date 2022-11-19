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
var arrBill = [];

function createBill()
{
    if(localStorage.getItem('listbill') == null)
    {
        arrBill = [{
            billID:uuid(),
            arrOrder: [{
                currentTime: "10:7 2/12/2021",
                id: "0",
                quantify: 1,
                status: "Đang xử lý",
                user: "admin",
                img: 'apple1.png',
                name: 'Macbook Air 13" 2020 - M1 256GB',
                prices: '900',
                type: "apple"
            }],
            user:"admin",
            total:1200,
            curDate:"2/11/2021",
            status:"Đang xử lý"
        }]
        localStorage.setItem('listbill',JSON.stringify(arrBill));
    } else{
        arrBill = JSON.parse(localStorage.getItem('listbill'));
    }
}

createBill();
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

function scrollSmoothToBottom() 
{
    window.scrollTo(0, document.body.scrollHeight);
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

window.onload = () =>{
    checkSession();
    renderOrderMobile();
    renderMyOrder();
}



function hideModalDetail()
{
    document.querySelector('.modal__detail-bill').style.display = "none";
}

function renderMyOrder()
{
    var arrMyOrder = [];
    for (var index in arrBill)
    {
        if(arrBill[index].user == sessionStorage.getItem('user'))
        {
            arrMyOrder.push(arrBill[index]);
        }
    }
    var listOrder = arrMyOrder.map((order,index) =>{
        return `   <div class="container__order-product-view-content">
        <div class="container__order-product-view-content-id">
            <p>${index}</p>
        </div>

        <div class="container__order-product-view-content-time">
            <p>${order.curDate}</p>
        </div>

        <div class="container__order-product-view-content-bill">
            <button onclick="displayModalDetail('${order.billID}')">Xem chi tiết</button>
        </div>

        <div class="container__order-product-view-content-status">
            <p>${order.status}</p>
        </div>
    </div>`;
    })
    var htmls = listOrder.join('');
    document.querySelector('.container__order-product-view').innerHTML = htmls;
}

function displayModalDetail(billID)
{
    document.querySelector('.modal__detail-bill').style.display = "block";
    renderModalOrder(billID);
}

function renderModalOrder(billID)
{
    var objOrder;
    for (var index in arrBill)
    {
        if(arrBill[index].billID == billID)
        {
            objOrder = arrBill[index];
            break;
        }
    }

    document.querySelector('.modal__detail-bill-id').innerHTML = ` <p>Mã đơn hàng: ${objOrder.billID}`;
    var arrOrder = objOrder.arrOrder;
    var listOrder = arrOrder.map((order,index)=>{
        return `<div class="modal__detail-product-view">
    
        <div class="modal__detail-bill-product-id">
            <p>${index}</p>
        </div>

        <div class="modal__detail-bill-product-name">
            <p>${order.name}</p>
        </div>

        <div class="modal__detail-bill-product-img">
            <img src="./assets/img/${order.img}" alt="">
        </div>

        <div class="modal__detaill-bill-product-prices">
            <p>${order.prices}$</p>
        </div>

        <div class="modal__detaill-bill-product-quantify">
            <p>${order.quantify}</p>
        </div>
    </div>`;
    });

    var arrPrices = arrOrder.map(order => (order.prices));
    var total = arrPrices.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0)
    var htmls = listOrder.join('');
    document.querySelector('.modal__detail-bill-product-content').innerHTML = htmls;
    document.querySelector('.modal__detail-bill-product-time').innerHTML = ` <p>Thời gian đặt hàng: ${objOrder.curDate}</p>`;
    document.querySelector('.modal__detail-bill-product-total').innerHTML = ` <p>Tổng tiền : ${objOrder.total}$</p>`;
}

function renderOrderMobile()
{
    var arrMyOrder = [];
    for (var index in arrBill)
    {
        if(arrBill[index].user == sessionStorage.getItem('user'))
        {
            arrMyOrder.push(arrBill[index]);
        }
    }
    var listOrder = arrMyOrder.map((order,index) => {
        return `     <div class="container__order-product-view-mobile-content">
        <div class="container__order-product-view-mobile-id">
            <p><i class="fas fa-indent"></i> STT: <span>${index}</span></p>
        </div>

        <div class="container__order-product-view-mobile-time">
            <p><i class="fas fa-history"></i> Thời gian: <span>${order.curDate}</span></p>
        </div>

        <div class="container__order-product-view-mobile-bill">
            <p><i class="fas fa-money-bill"></i> Hóa đơn: <button onclick= "displayModalDetail('${order.billID}')">Xem chi tiết</button></p>
        </div>

        <div class="container__order-product-view-mobile-status">
            <p><i class="fas fa-battery-half"></i> Tình trạng: <span>${order.status}</span></p>
        </div>
    </div>`;
    });
    var htmls = listOrder.join('');
    document.querySelector('.container__order-product-view-mobile').innerHTML = htmls;
}