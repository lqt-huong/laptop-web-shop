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
createCustomer();
createProduct();
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

// JS ADMIN Start

function hideAdminBar()
{
    document.querySelector('.apps__category-heading').style.display = "none";
    document.querySelector('.apps__category').style.width = "70px";
    document.getElementById('quanlysp').style.display = "none";
    document.getElementById('quanlynd').style.display = "none";
    document.getElementById('xulydonhang').style.display = "none";
    document.getElementById('thongkedoanhthu').style.display = "none";
    document.getElementById('managerProduct').style.textAlign = "center";
    document.getElementById('managerUser').style.textAlign = "center";
    document.getElementById('managerCart').style.textAlign = "center";
    document.getElementById('managerStatistic').style.textAlign = "center";
    document.querySelector('.apps__category-header').style.justifyContent = "center";
    document.getElementById('hideAdmin').style.display = "none";
    document.getElementById('displayAdmin').style.display = "block";
}

function displayAdminBar()
{
    document.querySelector('.apps__category-heading').style.display = "block";
    document.querySelector('.apps__category').style.width = "250px";
    document.getElementById('quanlysp').style.display = "inline";
    document.getElementById('quanlynd').style.display = "inline";
    document.getElementById('xulydonhang').style.display = "inline";
    document.getElementById('thongkedoanhthu').style.display = "inline";
    document.getElementById('managerProduct').style.textAlign = "left";
    document.getElementById('managerUser').style.textAlign = "left";
    document.getElementById('managerCart').style.textAlign = "left";
    document.getElementById('managerStatistic').style.textAlign = "left";
    document.querySelector('.apps__category-header').style.justifyContent = "space-between";
    document.getElementById('hideAdmin').style.display = "block";
    document.getElementById('displayAdmin').style.display = "none";
}

window.onload = () =>{
    if(sessionStorage.getItem("level") != 0)
    {
        window.location = "index.html";
    }
    checkSession();
    renderAdmin();
    renderPagination();
}

function displayModalAdd()
{
    document.querySelector('.modal__add-product').style.display = "block";
}

function displayModalUpdate()
{
    document.querySelector('.modal__add-product-header-heading').textContent = "Cập nhật";
    document.getElementById('btnadminadd').style.display = "none";
    document.getElementById('btnadminupdate').style.display = "block";
    document.querySelector('.modal__add-product').style.display = "block";
}

function hideModalAdd()
{
    document.querySelector('.modal__add-product').style.display = "none";
}

//Hàm tổng quát

function renderAdmin()
{
    var manager = getQueryVariable('manager') || "product";
    renderAdminTitle(manager);
    switch(manager)
    {
        case "product":
            /*renderMobileProduct();*/
            renderAdminProduct();
            break;
        case "user":
            renderAdminUser();
            /*renderUserMobile();*/
            break;
        case "handleproduct":
            /*renderHandleMobile();*/
            renderAdminProductHandle();
            break;
        case "benefits":
            /*renderBenefitMobile();*/
            renderAdminBenefits();
            break;
    }
}
//Product
function renderAdminProduct()
{
    document.querySelector('.apps__content-add-product').innerHTML = ` <button onclick="addAdminProduct();"><i class="fas fa-cart-plus"></i> Thêm mới</button>`;
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrProductPag = arrProduct.slice(begin,end);

    var listProduct = arrProductPag.map((product)=>{
        return ` <div class="apps__content-view">
        <div class="apps__content-view-id">
            <p>${product.id}</p>
        </div>

        <div class="apps__content-view-user">
            <p>ADMIN</p>
        </div>

        <div class="apps__content-view-name">
            <p>${product.name}</p>
        </div>

        <div class="apps__content-view-img">
            <img src="./assets/img/${product.img}" alt="">
        </div>

        <div class="apps__content-view-prices">
            <p>${product.prices}$</p>
        </div>

        <div class="apps__content-view-tools">
            <div class="apps__content-view-tools-update" onclick="updateAdminProduct(${product.id});">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-view-tools-delete" onclick="deleteAdminProduct(${product.id})">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`;
    });

    var htmls = listProduct.join('');
    document.querySelector('.apps__content-container-show').innerHTML = htmls;
}

function addAdminProduct()
{
    renderAddProduct();
    displayModalAdd();
}

function renderAddProduct()
{
    const arrID = arrProduct.map((product) => parseInt(product.id));
    const maxID = Math.max.apply(Math,arrID);
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="${(maxID+1)}" readonly id="txtadminid">`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" value="ADMIN" id="txtadminuser" readonly>`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="Tên sản phẩm ....." value="" id="txtadminname">`;
    document.querySelector('.modal__add-product-prices').innerHTML = ` <input type="text" placeholder="Giá sản phẩm" value="" id="txtadminprices">`;
    document.querySelector('.modal__add-product-img').innerHTML = `<input type="file" name="" id="fadminimg">`;
    document.getElementById('btnadminadd').innerHTML = `<button onclick="actionAddProduct();">Thêm mới</button>`;
    document.getElementById('btnadminadd').style.display = "block";
    document.getElementById('btnadminupdate').style.display ="none";
    document.querySelector('.modal__add-product-header-heading').textContent = "Thêm mới sản phẩm";
}

function actionAddProduct()
{
    swal({
        title:"Bạn có chắc muốn thêm sản phẩm?",
        text:"Khi bạn thêm dữ liệu sẽ được cập nhật",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then(willDelete => {
        if(willDelete){
            const fileUpload = document.getElementById('fadminimg');
            const uploadsImage = fileUpload.value.split("\\");
            const image = uploadsImage[uploadsImage.length - 1];
            var objProduct = {
                id: document.getElementById('txtadminid').value,
                img: image,
                name: document.getElementById('txtadminname').value,
                prices: document.getElementById('txtadminprices').value,
                type: document.getElementById('selectadminproduct').value
            }
            arrProduct.push(objProduct);
            localStorage.setItem("product",JSON.stringify(arrProduct));
            hideModalAdd();
            swal("Thêm thành công","Sản phẩm của bạn đã được thêm","success");
            renderAdmin();
        }
    });
}

function updateAdminProduct(id)
{

    var objProduct = arrProduct.filter(product => product.id == id);
    renderAdminModal(objProduct);
    displayModalUpdate();
}

function renderAdminModal(objProduct)
{
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="${objProduct[0].id}" readonly id="txtadminid">`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" value="${objProduct[0].user || "ADMIN"}" id="txtadminuser">`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="Tên sản phẩm ....." value="${objProduct[0].name}" id="txtadminname">`;
    document.querySelector('.modal__add-product-prices').innerHTML = ` <input type="text" placeholder="Giá sản phẩm" value="${objProduct[0].prices}" id="txtadminprices">`;
    document.getElementById('selectadminproduct').value =  objProduct[0].type;
    document.getElementById('btnadminupdate').innerHTML = `<button onclick="actionUpdateProduct(${objProduct[0].id})">Cập nhật</button>`;
   
}

function actionUpdateProduct(id)
{
    swal({
        title:"Bạn có chắc chắn muốn cập nhật?",
        text:"Khi cập nhật dữ liệu sẽ được thay đổi",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then(willDelete => {
        if(willDelete)
        {
            const fileUpload = document.getElementById('fadminimg');
            const uploadsImage = fileUpload.value.split("\\");
            const image = uploadsImage[uploadsImage.length - 1];
            var objProduct = {
                id: document.getElementById('txtadminid').value,
                img: image,
                name: document.getElementById('txtadminname').value,
                prices: document.getElementById('txtadminprices').value,
                type: document.getElementById('selectadminproduct').value
            }
            for(var index in arrProduct)
            {
                if(arrProduct[index].id == id)
                {
                    arrProduct[index] = objProduct;
                    localStorage.setItem("product",JSON.stringify(arrProduct));
                    break;
                }
            }
            hideModalAdd();
            swal("Cập nhật thành công","Dữ liệu đã được thay đổi","success");
            renderAdmin();
        }
    });
}

function deleteAdminProduct(id)
{
    swal({
        title: "Bạn có chắc chắn muốn xóa?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            for(var index in arrProduct)
            {
                if(arrProduct[index].id == id)
                {
                    arrProduct.splice(index,1);
                    break;
                }
            }

            for (var index in arrProduct)
            {
                arrProduct[index]["id"] = index;
            }
            console.log(arrProduct)
            localStorage.setItem("product",JSON.stringify(arrProduct));
            swal("Xóa thành công", "Đã xóa sản phẩm", "success");
            renderAdmin();
        }
      });
}

//User

function renderAdminUser()
{
    document.querySelector('.apps__content-add-product').innerHTML = ` <button onclick="addAdminUser();"><i class="fas fa-cart-plus"></i> Thêm mới</button>`;
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrCustomerPag = arrCustomer.slice(begin,end);
    var listCustomer = arrCustomerPag.map((customer)=>{
        return ` <div class="apps__content-view">
        <div class="apps__content-view-id">
            <p>${customer.level}</p>
        </div>

        <div class="apps__content-view-user">
            <p>${customer.user}</p>
        </div>

        <div class="apps__content-view-name">
            <p>${customer.password}</p>
        </div>

        <div class="apps__content-view-img">
            <p>${customer.email}<p>
        </div>

        <div class="apps__content-view-prices">
           <p>${customer.status}</p>
        </div>

        <div class="apps__content-view-tools">
            <div class="apps__content-view-tools-update" onclick="updateAdminUser('${customer.user}')">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-view-tools-delete" onclick="deleteAdminUser('${customer.user}')">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`;
    });
    var htmls = listCustomer.join('');
    document.querySelector('.apps__content-container-show').innerHTML = htmls;
}

function addAdminUser()
{
    renderRegisterModal();
    displayModalAdd();
}

function renderRegisterModal()
{
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="" id="txtadminid" placeholder="Level...">`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" id="txtadminuser" placeholder="Tài khoản...">`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="Mật khẩu..." id="txtadminpass">`
    document.querySelector('.modal__add-product-prices').innerHTML = ` <input type="text" placeholder="Email..." id="txtadminemail">`
    document.querySelector('.modal__add-product-img').style.display = "none";
    document.getElementById('btnadminadd').innerHTML = `<button onclick="actionAddUser();">Thêm mới</button>`;
    document.getElementById('btnadminupdate').style.display = "none";
    document.getElementById('btnadminadd').style.display = "block";
    document.querySelector('.modal__add-product-header-heading').textContent ="Thêm mới người dùng";
    document.getElementById('selectadminproduct').innerHTML =  `<option value="hoatdong">Hoạt động</option>
                                                                <option value="khoa">Khóa</option>`;
}

function actionAddUser()
{
    swal({
        title: "Bạn chắc chắn muốn thêm?",
        text: "Khi bạn đồng ý thì dữ liệu của bạn sẽ được thêm",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
    var status ='';
    if(document.getElementById('selectadminproduct').value == "hoatdong")
    {
        status = "Hoạt động";
    }
    else {
        status = "Bị khóa";
    }
    var objUserUpdate = {
        user:document.getElementById('txtadminuser').value,
        password:document.getElementById('txtadminpass').value,
        email:document.getElementById('txtadminemail').value,
        level:document.getElementById('txtadminid').value,
        status:status,
    }
        arrCustomer.push(objUserUpdate);
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
        hideModalAdd();
        swal("Cập nhật thành công", "Dữ liệu mới đã được update", "success");
        renderAdmin();
        
    
}
}); 
}

function updateAdminUser(user)
{
    var objUser = arrCustomer.filter(customer => customer.user == user);
    renderUserModal(objUser);
    document.getElementById('btnadminupdate').innerHTML = `<button onclick="actionUpdateUser('${user}')">Cập nhật</button>`;
    displayModalUpdate();
}

function renderUserModal(objUser)
{
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="${objUser[0].level}" id="txtadminid">`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" value="${objUser[0].user || "ADMIN"}" id="txtadminuser" placeholder="Tài khoản" readonly>`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="Mật khẩu" value="${objUser[0].password}" id="txtadminpass">`
    document.querySelector('.modal__add-product-prices').innerHTML = ` <input type="text" placeholder="Email..." value="${objUser[0].email}" id="txtadminemail">`
    document.querySelector('.modal__add-product-img').style.display = "none";
    document.getElementById('selectadminproduct').innerHTML =  `<option value="hoatdong">Hoạt động</option>
                                                                <option value="khoa">Khóa</option>`;
}

function actionUpdateUser(user)
{
    swal({
        title: "Bạn chắc chắn muốn cập nhật?",
        text: "Khi bạn đồng ý thì dữ liệu của bạn sẽ thay đổi",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
    var status ='';
    if(document.getElementById('selectadminproduct').value == "hoatdong")
    {
        status = "Hoạt động";
    }
    else {
        status = "Bị khóa";
    }
    var objUserUpdate = {
        user:document.getElementById('txtadminuser').value,
        password:document.getElementById('txtadminpass').value,
        email:document.getElementById('txtadminemail').value,
        level:document.getElementById('txtadminid').value,
        status:status,
    }
    for (var index in arrCustomer)
    {
        if(arrCustomer[index].user == user)
        {
            arrCustomer[index] = objUserUpdate;
            console.log(arrCustomer);
            localStorage.setItem('customer',JSON.stringify(arrCustomer));
            hideModalAdd();
            swal("Cập nhật thành công", "Dữ liệu mới đã được update", "success");
            renderAdmin();
            break;
        }
    }
}
}); 
}

function deleteAdminUser(user)
{
    swal({
        title: "Bạn có chắc chắn muốn xóa?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            for(var index in arrCustomer)
            {
                if(arrCustomer[index].user == user)
                {
                    arrCustomer.splice(index,1);
                    break;
                }
            }
            swal("Xóa thành công", "Đã xóa người dùng", "success");
            localStorage.setItem("customer",JSON.stringify(arrCustomer));
            renderAdmin();
        }
      });
}
//Handleproduct

function renderAdminProductHandle()
{
    document.querySelector('.apps__content-add-product').style.display = "none";
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrBillPag = arrBill.slice(begin,end);

    var listBill = arrBillPag.map((bill,index) => {
        return ` <div class="apps__content-view">
        <div class="apps__content-view-id">
            <p>${index}</p>
        </div>

        <div class="apps__content-view-user">
            <p>${bill.user}</p>
        </div>

        <div class="apps__content-view-name">
            <p>${bill.status}</p>
        </div>

        <div class="apps__content-view-prices">
           <button onclick="displayModalDetail('${bill.billID}')">Xem chi tiết</button>
        </div>

        <div class="apps__content-view-tools">
            <div class="apps__content-view-tools-update" onclick="updateHandleProduct('${bill.billID}')">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-view-tools-delete" onclick="deleteHandleProduct('${bill.billID}');">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`;
    });

    var htmls = listBill.join('');
    document.querySelector('.apps__content-container-show').innerHTML = htmls;

}

function displayModalDetail(billID)
{
    document.querySelector('.modal__detail-bill').style.display = "block";
    renderModalDetail(billID);
}

function renderModalDetail(billID)
{
    var objBill;
    for (var index in arrBill)
    {
        if(arrBill[index].billID == billID)
        {
            objBill = arrBill[index];
            break;
        }
    }
    document.querySelector('.modal__detail-bill-id').innerHTML = ` <p>Mã đơn hàng: ${objBill.billID}`;
    var arrOrder = objBill.arrOrder;
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
    var htmls = listOrder.join('');
    document.querySelector('.modal__detail-bill-product-content').innerHTML = htmls;
    document.querySelector('.modal__detail-bill-product-time').innerHTML = ` <p>Thời gian đặt hàng: ${objBill.curDate}</p>`;
    document.querySelector('.modal__detail-bill-product-total').innerHTML = ` <p>Tổng tiền : ${objBill.total}$</p>`;
   
    
}

function updateHandleProduct(billID)
{
    renderHandleModal(billID);
    displayModalUpdate();
}

function renderHandleModal(billID)
{
    var objBill;
    for (var index in arrBill)
    {
        if(arrBill[index].billID == billID)
        {
            objBill = arrBill[index];
            break;
        }
    }
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="${objBill.billID}" id="txtadminid" readonly>`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" value="${objBill.user}" id="txtadminuser" placeholder="Người mua" readonly>`;
    document.querySelector('.modal__add-product-img').style.display = "none";
    document.getElementById('btnadminupdate').innerHTML = `<button onclick="actionUpdateHandle('${objBill.billID}')">Cập nhật</button>`;
    document.getElementById('selectadminproduct').innerHTML =  `<option value="handling">Đang xử lý</option>
                                                                <option value="handled">Đã xử lý</option>`;
}

function actionUpdateHandle(billID)
{
    swal({
        title:"Bạn có chắc chắn muốn cập nhật?",
        text:"Khi cập nhật dữ liệu của bạn sẽ được thay đổi",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then(willDelete => {
        if(willDelete)
        {
            var objBill;
            for (var index in arrBill)
            {
                if(arrBill[index].billID == billID)
                {
                    objBill = arrBill[index];
                    break;
                }
            }
            var status;
            if(document.getElementById('selectadminproduct').value == "handling")
            {
                status = "Đang xử lý";
            }else {
                status = "Đã xử lý";
            }
            var objHandle = {
                arrOrder: objBill.arrOrder,
                billID: objBill.billID,
                status: status,
                total: objBill.total,
                user: objBill.user,
                curDate:objBill.curDate,
            }

           for (var index in arrBill)
            {
                if(arrBill[index].billID == billID)
                {
                    arrBill[index] = objHandle;
                    break;
                }
            }
            localStorage.setItem('listbill',JSON.stringify(arrBill));
            hideModalAdd();
            swal("Cập nhật thành công","Dữ liệu của bạn đã được thay đổi","success");
            renderAdmin();
        }
    });
}

function deleteHandleProduct(billID)
{
    swal({
        title:"Bạn có chắc chắn muốn xóa?",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then((willDelete) => {
        if(willDelete){

            for(var index in arrBill)
            {
                if(arrBill[index].billID == billID)
                {
                    arrBill.splice(index,1);
                    break;
                }
            }
            localStorage.setItem('listbill',JSON.stringify(arrBill));
            swal("Xóa thành công","Sản phẩm đã được xóa","success");
            renderAdmin();
        }
    });
}



















/*
function renderUserMobile()
{
    document.querySelector('.apps__content-add-product').innerHTML = ` <button onclick="addAdminUser();"><i class="fas fa-cart-plus"></i> Thêm mới</button>`;
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrCustomerPag = arrCustomer.slice(begin,end);
    var listCustomer = arrCustomerPag.map(customer => {
        return `<div class="apps__content-mobile-view">
        <div class="apps__content-mobile-view-id">
            <p><i class="fas fa-radiation-alt"></i> Level: <span>${customer.level}</span></p>
        </div>

        <div class="apps__content-mobile-view-user">
            <p><i class="fas fa-user"></i> Tài khoản: <span>${customer.user}</span> </p>
        </div>

        <div class="apps__content-mobile-view-name">
            <p><i class="fas fa-key"></i> Mật khẩu: <span>${customer.password}</span></p>
        </div>

        <div class="apps__content-mobile-view-img">
            <p><i class="fas fa-envelope"></i> Email: <span>${customer.email}</span> </p>
        </div>
        
        <div class="apps__content-mobile-view-prices">
            <p><i class="fas fa-battery-full"></i> Tình trạng: <span>${customer.status}</span></p>
        </div>

        <div class="apps__content-mobile-view-tools">
            <div class="apps__content-mobile-view-tools-update" onclick="updateAdminUser('${customer.user}')">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-mobile-view-tools-delete" onclick="deleteAdminUser('${customer.user}')">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`
        
});
    var htmls = listCustomer.join('');
    document.querySelector('.apps__content-mobile').innerHTML = htmls;
}

function renderHandleMobile()
{
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrBillPag = arrBill.slice(begin,end);
    var listBillPag = arrBillPag.map((bill,index) => {
        return `<div class="apps__content-mobile-view">
        <div class="apps__content-mobile-view-id">
            <p><i class="fas fa-radiation-alt"></i> STT: <span>${index}</span></p>
        </div>

        <div class="apps__content-mobile-view-user">
            <p><i class="fas fa-user"></i> Người mua: <span>${bill.user}</span> </p>
        </div>

        <div class="apps__content-mobile-view-name">
            <p><i class="fas fa-file-signature"></i> Tình trạng: <span>${bill.status}</span></p>
        </div>

        <div class="apps__content-mobile-view-img">
            <p><i class="fas fa-clock"></i> Hóa đơn: <span><button onclick="displayModalDetail('${bill.billID}')">Xem chi tiết</button></span></p>
        </div>
        
        <div class="apps__content-mobile-view-tools">
            <div class="apps__content-mobile-view-tools-update" onclick="updateHandleProduct('${bill.billID}')">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-mobile-view-tools-delete" onclick="deleteHandleProduct('${bill.billID}')">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`
        
});
    var htmls = listBillPag.join('');
    document.querySelector('.apps__content-mobile').innerHTML = htmls;
}
*/
function renderPagination()
{
    var product = getQueryVariable('manager') || "product";
    var page = getQueryVariable('page') || 1;
    var prePage = 1;
    if(page > 1) prePage = parseInt(page) - 1;
    else {
          prePage = 1 + "#";
    }
    var maxPage;
    if(product != "user")
    {
        if(arrProduct.length % 8 == 0)
        {
            maxPage = parseInt(arrProduct.length/8); 
        }
        else maxPage = parseInt(arrProduct.length/8) + 1; 
    } else if(product == "user"){
        if(arrCustomer.length % 8 == 0)
        {
            maxPage = parseInt(arrCustomer.length/8); 
        }
        else maxPage = parseInt(arrCustomer.length/8) + 1; 
    } else if(product == "handleproduct")
    {
        if(arrOrder.length % 8 == 0)
        {
            maxPage = parseInt(arrOrder.length/8); 
        }
        else maxPage = parseInt(arrOrder.length/8) + 1;
    }
    var nextPage;
    if(page >= maxPage)
    {
        nextPage = maxPage + "# ";
    } else {
        nextPage = parseInt(page) + 1;
    }

    if(product != null)
    {
       
        document.getElementById('prePage').href = 'admin.html?manager='+product+'&page='+prePage;
        document.getElementById('nextPage').href = 'admin.html?manager='+product+'&page='+nextPage;
        document.getElementById('page1').href = 'admin.html?manager='+product+'&page=1';
        document.getElementById('page2').href = 'admin.html?manager='+product+'&page=2';
        document.getElementById('page3').href = 'admin.html?manager='+product+'&page=3';
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

function renderAdminTitle(type)
{
    switch(type)
    {
        case "product":
            renderAdminTitleProduct();
            break;
        case "user":
            renderAdminTitleUser();
            break;
        case "handleproduct":
            renderAdminTitleHandle();
            break;
    }
}

function renderAdminTitleHandle()
{
    var htmls = ` <div class="apps__content-title">
    <div class="apps__content-title-id">
        <p>STT</p>
    </div>

    <div class="apps__content-title-user">
        <p>Người mua</p>
    </div>

    <div class="apps__content-title-name">
        <p>Tình trạng</p>
    </div>

    <div class="apps__content-title-prices">
        <p>Hóa đơn</p>
    </div>

    <div class="apps__content-title-tools">
       <p>Công cụ</p>
    </div>
</div>`;
    document.querySelector('.apps__content-container-title').innerHTML = htmls;
}


function hideModalDetail()
{
    document.querySelector('.modal__detail-bill').style.display = "none";
}


function renderAdminTitleProduct()
{
    var htmls = ` <div class="apps__content-title">
    <div class="apps__content-title-id">
        <p>ID</p>
    </div>

    <div class="apps__content-title-user">
        <p>Người bán</p>
    </div>

    <div class="apps__content-title-name">
        <p>Tên sản phẩm</p>
    </div>

    <div class="apps__content-title-img">
       <p>Ảnh sản phẩm</p>
    </div>

    <div class="apps__content-title-prices">
        <p>Giá bán</p>
    </div>

    <div class="apps__content-title-tools">
       <p>Công cụ</p>
    </div>
</div>`;
    document.querySelector('.apps__content-container-title').innerHTML = htmls;
}

function renderAdminTitleUser()
{
    var htmls = ` <div class="apps__content-title">
    <div class="apps__content-title-id">
        <p>Level</p>
    </div>

    <div class="apps__content-title-user">
        <p>Tài khoản</p>
    </div>

    <div class="apps__content-title-name">
        <p>Mật khẩu</p>
    </div>

    <div class="apps__content-title-img">
       <p>Email</p>
    </div>

    <div class="apps__content-title-prices">
        <p>Tình trạng</p>
    </div>

    <div class="apps__content-title-tools">
       <p>Công cụ</p>
    </div>
</div>`;
    document.querySelector('.apps__content-container-title').innerHTML = htmls;
}


/*function renderMobileProduct()
{
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrProductPag = arrProduct.slice(begin,end);
    var listProduct = arrProductPag.map(product => {
        return `<div class="apps__content-mobile-view">
        <div class="apps__content-mobile-view-id">
            <p><i class="fas fa-radiation-alt"></i> ID: <span>${product.id}</span></p>
        </div>

        <div class="apps__content-mobile-view-user">
            <p><i class="fas fa-user"></i> Người bán: <span>ADMIN</span> </p>
        </div>

        <div class="apps__content-mobile-view-name">
            <p><i class="fab fa-product-hunt"></i> Tên sản phẩm: <span>${product.name}</span></p>
        </div>

        <div class="apps__content-mobile-view-img">
           <div class="apps__content-mobile-view-img-content"><p><i class="far fa-image"></i> Ảnh: </p></div>

           <div class="apps__content-mobile-view-img-img">
                <img src="./assets/img/${product.img}" alt="">
           </div>
        </div>
        
        <div class="apps__content-mobile-view-prices">
            <p><i class="fas fa-dollar-sign"></i> Giá: <span>${product.prices}$</span></p>
        </div>

        <div class="apps__content-mobile-view-tools">
            <div class="apps__content-mobile-view-tools-update" onclick="updateAdminProduct(${product.id})">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-mobile-view-tools-delete" onclick="deleteAdminProduct(${product.id})">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`
    });
    var htmls = listProduct.join('');
    document.querySelector('.apps__content-mobile').innerHTML = htmls;
}
*/
function renderAdminBenefits()
{
    renderAdminBenefitsTitle();
    document.querySelector('.pagination').style.display = "none";
    var date = new Date();
    var curYear = date.getFullYear();
    var curMonth = date.getMonth() + 1;
    var curDay = date.getDate();
    var arrLoading = arrBill.filter(bill => {
        var curDate = bill.curDate.split('/');
        return (bill.status == "Đang xử lý" && curDate[2] == curYear && (curDate[1] - curMonth) <=1);
    });
    

    var productsLoad = arrLoading.map(load => load.arrOrder);
    var productLoad = [];
    for (var index in productsLoad)
    {
        for (var index1 in productsLoad[index])
        {
            productLoad.push(productsLoad[index][index1])
        }
    }

    var arrDone = arrBill.filter(bill => {
        var curDate = bill.curDate.split('/');
        return (bill.status == "Đã xử lý" && curDate[2] == curYear && (curDate[1] - curMonth) <=1);
    });
    var productsDone = arrDone.map(done => done.arrOrder);
    var productDone = [];
    for (var index in productsDone)
    {
        for (var index1 in productsDone[index])
        {
            productDone.push(productsDone[index][index1]);
        }
    }

    const loadApple = productLoad.filter(product => product.type =="apple");
    const doneApple = productDone.filter(product => product.type == "apple");
    const pricesApple = doneApple.map(apple => apple.prices);
    const sumDoneApple = pricesApple.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);

    const loadDell = productLoad.filter(product => product.type =="dell");
    const doneDell = productDone.filter(product => product.type == "dell");
    const pricesDell = doneDell.map(dell => dell.prices);
    const sumDoneDell = pricesDell.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);

    const loadAsus = productLoad.filter(product => product.type =="asus");
    const doneAsus = productDone.filter(product => product.type == "asus");
    const pricesAsus = doneAsus.map(asus => asus.prices);
    const sumDoneAsus = pricesAsus.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
  
    const loadKey = productLoad.filter(product => product.type =="keyboard");
    const doneKey = productDone.filter(product => product.type == "keyboard");
    const pricesKey = doneKey.map(keyboard => keyboard.prices);
    const sumDoneKey = pricesKey.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);

    const loadMou = productLoad.filter(product => product.type =="mouse");
    const doneMou = productDone.filter(product => product.type == "mouse");
    const pricesMou = doneAsus.map(mouse => mouse.prices);
    const sumDoneMou = pricesAsus.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
   
    var arrBenefit = [
        {
            type:"APPLE",
            loading:loadApple.length,
            done:doneApple.length,
            sumDone:sumDoneApple
        },

        {
            type:"DELL",
            loading:loadDell.length,
            done:doneDell.length,
            sumDone:sumDoneDell
        },

        {
            type:"ASUS",
            loading:loadAsus.length,
            done:doneAsus.length,
            sumDone:sumDoneAsus
        },
        
        {
            type:"KEYBOARD",
            loading:loadKey.length,
            done:doneKey.length,
            sumDone:sumDoneKey
        },

        {
            type:"MOUSE",
            loading:loadMou.length,
            done:doneMou.length,
            sumDone:sumDoneMou
        }
    ]
    
        // <div class="apps__content-view-name">
        //     <p>${benefit.summoney}$</p>
        // </div>
        
//     <div class="apps__content-title-user">
//     <p>Người dùng</p>
// </div>
    var listBenefit = arrBenefit.map(benefit => {
        return ` <div class="apps__content-view">
        <div class="apps__content-view-id">
            <p>${benefit.type}</p>
        </div>

        <div class="apps__content-view-img">
            <p>${benefit.loading}<p>
        </div>

        <div class="apps__content-view-prices">
           <p>${benefit.done}</p>
        </div>

        <div class="apps__content-view-tools">
           <p>${benefit.sumDone}$</p>
        </div>
    </div>`;
    });
    var htmls = listBenefit.join('');
    document.querySelector('.apps__content-container-show').innerHTML = htmls;
}

function renderAdminBenefitsTitle()
{
    document.querySelector('.apps__content-add-product').style.display = "none";
    var htmls = ` <div class="apps__content-title">
    <div class="apps__content-title-id">
        <p>Loại sản phẩm</p>
    </div>


    <div class="apps__content-title-img">
       <p>Đang xử lý</p>
    </div>

    <div class="apps__content-title-prices">
        <p>Đã xử lý</p>
    </div>

    <div class="apps__content-title-tools">
       <p>Tiền đã bán</p>
    </div>
</div>`;
    var date = new Date();
    var curDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var preDate = date.getDate() + "/" + (date.getMonth()) + "/" + date.getFullYear()
    document.querySelector('.apps__content-heading').innerHTML = `<p class="apps__content-heading-content"><i class="fas fa-signal"></i> Thống kê từ ${preDate} - ${curDate } </p>`
    document.querySelector('.apps__content-container-title').innerHTML = htmls;
}
/*
function renderBenefitMobile()
{
    document.querySelector('.pagination').style.display = "none";
    var date = new Date();
    var curYear = date.getFullYear();
    var curMonth = date.getMonth() + 1;
    var curDay = date.getDate();
    var arrLoading = arrBill.filter(bill => {
        var curDate = bill.curDate.split('/');
        return (bill.status == "Đang xử lý" && curDate[2] == curYear && (curDate[1] - curMonth) <=1);
    });
    

    var productsLoad = arrLoading.map(load => load.arrOrder);
    var productLoad = [];
    for (var index in productsLoad)
    {
        for (var index1 in productsLoad[index])
        {
            productLoad.push(productsLoad[index][index1])
        }
    }

    var arrDone = arrBill.filter(bill => {
        var curDate = bill.curDate.split('/');
        return (bill.status == "Đã xử lý" && curDate[2] == curYear && (curDate[1] - curMonth) <=1);
    });
    var productsDone = arrDone.map(done => done.arrOrder);
    var productDone = [];
    for (var index in productsDone)
    {
        for (var index1 in productsDone[index])
        {
            productDone.push(productsDone[index][index1]);
        }
    }

    const loadIphone = productLoad.filter(product => product.type =="iphone");
    const doneIphone = productDone.filter(product => product.type == "iphone");
    const pricesIphone = doneIphone.map(iphone => iphone.prices);
    const sumDoneIphone = pricesIphone.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);

    const loadIpad = productLoad.filter(product => product.type =="ipad");
    const doneIpad = productDone.filter(product => product.type == "ipad");
    const pricesIpad = doneIpad.map(ipad => ipad.prices);
    const sumDoneIpad = pricesIpad.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);

    const loadMac = productLoad.filter(product => product.type =="macbook");
    const doneMac = productDone.filter(product => product.type == "macbook");
    const pricesMac = doneMac.map(Mac => Mac.prices);
    const sumDoneMac = pricesMac.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
  
   
    var arrBenefit = [
        {
            type:"IPHONE",
            loading:loadIphone.length,
            done:doneIphone.length,
            sumDone:sumDoneIphone
        },

        {
            type:"IPAD",
            loading:loadIpad.length,
            done:doneIpad.length,
            sumDone:sumDoneIpad
        },

        {
            type:"MACBOOK",
            loading:loadMac.length,
            done:doneMac.length,
            sumDone:sumDoneMac
        }
    ]

    var listBenefits = arrBenefit.map(benefit => {
        return `<div class="apps__content-mobile-view">
        <div class="apps__content-mobile-view-id">
            <p><i class="fas fa-radiation-alt"></i> Loại sản phẩm: <span>${benefit.type}</span></p>
        </div>

        <div class="apps__content-mobile-view-img">
            <p><i class="fas fa-spinner"></i> Đang xử lý: <span>${benefit.loading}</span> </p>
        </div>
        
        <div class="apps__content-mobile-view-prices">
            <p><i class="fas fa-check-circle"></i> Đã xử lý: <span>${benefit.done}</span></p>
        </div>

        <div class="apps__content-mobile-view-tools">
          <p><i class="fas fa-comments-dollar"></i> Tiền đã bán: <span>${benefit.sumDone}$</span></p>
        </div>
    </div>`
        
});
    var htmls = listBenefits.join('');
    document.querySelector('.apps__content-mobile').innerHTML = htmls;
}
*/
function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);  
    return uuid.substr(uuid.lastIndexOf('/') + 1);
}

