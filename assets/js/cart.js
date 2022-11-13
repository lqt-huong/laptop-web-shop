
var arrProduct = [];
function createProduct() {
    if (localStorage.getItem('product') == null) {

        arrProduct = [
            {
                id: "0",
                img: 'apple1.png',
                name: 'Macbook Air 13" 2020 - M1 256GB',
                prices: '22490000',
                type: "apple"
            },

            {
                id: "1",
                img: 'apple2.png',
                name: 'Macbook Air M2 13.6" 2022 - 512GB',
                prices: '36590000',
                type: "apple"
            },

            {
                id: "2",
                img: 'apple3.png',
                name: 'Macbook Pro M2 13" 2022 - 256GB',
                prices: '30490000',
                type: "apple"
            },

            {
                id: "3",
                img: 'apple4.png',
                name: 'Macbook Pro M2 13" 2022 - 512GB',
                prices: '35190000',
                type: "apple"
            },

            {
                id: "4",
                img: 'apple5.png',
                name: 'Apple M1 - MacBook Pro 13" 256GB 2020',
                prices: '27890000',
                type: "apple"
            },

            {
                id: "5",
                img: 'apple6.png',
                name: 'Macbook Pro 14" 2021 - M1 Pro 14 Core GPU/512GB',
                prices: '45990000',
                type: "apple"
            },

            {
                id: "6",
                img: 'apple7.png',
                name: 'Macbook Pro 16" 2021 - M1 Max 32 Core GPU/1TB',
                prices: '82590000',
                type: "apple"
            },

            {
                id: "7",
                img: 'apple8.png',
                name: 'Macbook Pro 16" 2021 - M1 Pro 16 Core GPU/512GB',
                prices: '57590000',
                type: "apple"
            },

            {
                id: "8",
                img: 'dell1.png',
                name: 'Dell Inspiron 15 3511 P112F001FBL I5-1135G7/8GB/512GB/15.6',
                prices: '14990000',
                type: "dell"
            },


            {
                id: "9",
                img: 'dell2.png',
                name: 'Dell Inspiron 16 5620 i5P165W11SLU i5-1240P/16GB/512GB/Intel Iris Xe/16.0 inch FHD',
                prices: '22590000',
                type: "dell"
            },

            {
                id: "10",
                img: 'dell3.png',
                name: 'Dell Inspiron 16 5620-N6I7110W1, i7-1255U/8GB/512GB/16FHD',
                prices: '22490000',
                type: "dell"
            },

            {
                id: "11",
                img: 'dell4.png',
                name: 'Dell Inspiron 15 3520-71001747- i7-1255U/8GB/512GB SSD,/15.6"',
                prices: '21390000',
                type: "dell"
            },

            {
                id: "12",
                img: 'dell5.png',
                name: 'Dell Vostro 5620 V6I5001W1, i5-1240P/8GB/256GB/16FHD',
                prices: '19390000',
                type: "dell"
            },

            {
                id: "13",
                img: 'dell6.png',
                name: 'Dell Vostro 5620 P117F001AGR i7-1260P/16GB/512GB/Iris Xe Graphics/16 inch FHD',
                prices: '25990000',
                type: "dell"
            },

            {
                id: "14",
                img: 'asus1.png',
                name: 'Asus Zenbook UX482EA-KA397W - (i5-1135G7/8GB/512GB/14.0" FHD/WiFi6/Win 11)',
                prices: '27990000',
                type: "asus"
            },

            {
                id: "15",
                img: 'asus2.png',
                name: 'ASUS ZenBook 14 UX3402ZA-KM221W, i7-1260P/16GB/512GB/14OLED/Win11/Blue',
                prices: '28790000',
                type: "asus"
            },

            {
                id: "16",
                img: 'asus3.png',
                name: 'ASUS ZenBook UP5401ZA-KN005W- i5-12500H/8GB/512GB/14WQ+_T/OLED/W11H/Xám',
                prices: '23290000',
                type: "asus"
            },

            {
                id: "17",
                img: 'asus4.png',
                name: 'Laptop Gaming Asus Rog Strix G15 G513RC HN038W - R7-6800H/8GB/512GB/4GB RTX3050/15.6 FHD/WIN11/XÁM',
                prices: '24490000',
                type: "asus"
            },

            {
                id: "18",
                img: 'asus5.png',
                name: 'Laptop Gaming Asus Rog Strix G15 G513IM - HN008W - R7-4800H/16GB/512GB/RTX3060/15.6FHD/Win11/Xám',
                prices: '27490000',
                type: "asus"
            },

            {
                id: "19",
                img: 'asus6.png',
                name: 'ASUS TUF Gaming A15 FA507RC-HN051W, R7-6800H/8GB/512GB/15.6FHD/144Hz/RTX3050/W11SL/Xám',
                prices: '22990000',
                type: "asus"
            },

            {
                id: "20",
                img: 'asus7.png',
                name: 'ASUS TUF Gaming FX506HM-HN366W, i7-11800H/8GB/512GB/RTX3060/15.6FHD144Hz/W11SL/Đen',
                prices: '27890000',
                type: "asus"
            },

            {
                id: "21",
                img: 'asus8.png',
                name: 'ASUS Gaming TUF Dash F15 FX517ZE-HN045W (i5-12450H/8GB/512GB/3050Ti 4GB15.6inchFHD/ Win11',
                prices: '24190000',
                type: "asus"
            },

            {
                id: "22",
                img: 'asus9.png',
                name: 'ASUS ZenBook 14 UX3402ZA-KM219W, i5-1240P/16GB/512GB/14.OLED.QWXGA/W11SL/Xanh',
                prices: '24790000',
                type: "asus"
            },

            {
                id: "23",
                img: 'asus10.png',
                name: 'ASUS ZenBook Flip UX363EA-HP726W, i5-1135G7/8GB/512GB/Touch/Pen/Cáp/Túi/Win11/Xám ',
                prices: '20490000',
                type: "asus"
            },

            {
                id: "24",
                img: 'asus11.png',
                name: 'ASUS ProArt W7600Z3A-L2048W-i9-12900H/32GB/1TB/RTXA3000/16OLED4K/W11SL/Đen',
                prices: '75890000',
                type: "asus"
            },

            {
                id: "25",
                img: 'asus12.png',
                name: 'ASUS ProArt H7600ZM-L2079W-i9-12900H/32GB/1TB/RTX3060/16OLED4K/W11SL/Đen',
                prices: '63890000',
                type: "asus"
            },

            {
                id: "26",
                img: 'asus13.png',
                name: 'Asus TUF Gaming F15 FX507ZE - HN093W - i7 - 12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Xám',
                prices: '27890000',
                type: "asus"
            },

            {
                id: "27",
                img: 'asus14.png',
                name: 'Asus TUF Gaming Dash FX517ZC-HN077W- i5-12450H/8GB/512GB/15.6FHD144Hz/W11SL/4GD6_RTX3050',
                prices: '23790000',
                type: "asus"
            },

            {
                id: "28",
                img: 'asus15.png',
                name: 'ASUS TUF Gaming F17 FX706HC-HX105W I5-11400H/8GB/512GB/VGA 4GB RTX3050/17.3 FHD 144HZ/WIN11/ĐEN',
                prices: '18990000',
                type: "asus"
            },

            {
                id: "29",
                img: 'asus16.png',
                name: 'ASUS TUF Gaming F15 FX506HC-HN144W, i5-11400H/8GB/512GB/RTX3050/15.6FHD144HZ/W11SL/Đen',
                prices: '20290000',
                type: "asus"
            },

            {
                id: "30",
                img: 'asus17.png',
                name: 'ASUS TUF Gaming A15 FA507RM-HN018W, R7-6800H/8GB/512GB/RTX3060/15.6FHD144Hz/W11SL/Xám',
                prices: '27990000',
                type: "asus"
            },

            {
                id: "30",
                img: 'asus17.png',
                name: 'MOUSE TUF Gaming A15 FA507RM-HN018W, R7-6800H/8GB/512GB/RTX3060/15.6FHD144Hz/W11SL/Xám',
                prices: '27990000',
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
createBill();
var billDetail = [];
createBillDetail();
var arrMyProduct = [];
var arrCart = [];
var userSession = sessionStorage.getItem('user');
var userSale = JSON.parse(localStorage.getItem(userSession + 'sale')) || "";
var valueSale = 0;
var keySale = userSale.keySale;
function createMyProduct()
{
    if(localStorage.getItem(userSession) != null)
    {
        arrCart = JSON.parse(localStorage.getItem(userSession));
    }
}
createMyProduct();
createProduct();
createCustomer();

function renderMyProduct(){
 
    var s = '';
    
    for (var index in arrCart){
       
            
            s = s + '<tr> <td data-th="Product"> <div class="row">' + 
                '<div class="col-sm-2"><img src="./assets/img/'+arrCart[index].img+'" alt="Sản phẩm 1" class="img-responsive" width="100">' +
                    '</div> <div class="col-sm-10"> <h4 class="nomargin">'+arrCart[index].name+'</h4>' +
                        '</p></div> </div> </td><td data-th="Price" class="text-center Price">'+arrCart[index].prices+'$</td> ' +
                        '<td data-th="Quantity" class="quatify__icon"><div class="quatify__icon-item"><i class="btn-icon far fa-minus-square minus" onclick="minusOfProduct('+arrCart[index].id+')" style="cursor: pointer"></i>'+
                            '<input class="form-control text-center-1 productx" type="text" readonly value="'+arrCart[index].quantify+'">' +
                            '<i class="btn-icon far fa-plus-square plus productx" onclick="plusOfProduct('+arrCart[index].id+')" style="cursor: pointer"></i>' +
                            '</div></td> <td data-th="Subtotal" class="text-center" id="sum_product">'+sumOfProduct(arrCart[index].prices,arrCart[index].quantify)+'$</td>'+
                                '<td class="actions" data-th=""><button class="btn btn-info btn-sm" onclick="deleteProductOfCart('+index+')"><i class="far fa-trash-alt"></i></button>'+
                                    '<button title = "'+arrCart[index].currentTime+'" class="btn btn-info-1 btn-sm"><i class="fas fa-calendar-times"></i></button></td>  </tr> ';                                                             
        
                                    }
    document.getElementById('itemProduct').innerHTML = s;
}
function renderFooterProduct()
{
    var s = '<tr> <td><a href="index.html" class="btn  btn-warning" style="color:white; font-family:san-serif; font-size:15px;">Tiếp tục mua hàng</a></td><td colspan="1" class=""><input type="text" class="form" placeholder="Nhập vào mã giảm giá ........." id="txtsale">'+
    '</td><td><button class="button_addsale" onclick="renderSale();">Sử dụng mã</button></td><td class=" text-center"><strong style="font-family:san-serif; font-size:16px; color:black;">Tổng tiền: '+totalProducts()+'$ </strong></td> <td onclick="onPay();"><a href="#" class="btn btn-success" style="color:white; font-family:san-serif; font-size:15px;">Thanh toán</a></td></tr> '; 
    document.getElementById('footerProduct').innerHTML = s;
}

function totalProducts()
{
    var s = 0;
    for (var index in arrCart)
    {
        s += (parseInt(arrCart[index].prices)*arrCart[index].quantify);
    }
    s = s*(1-valueSale);
    return parseInt(s);
}



function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);  
    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}


function deleteProductOfCart(id)
{
    swal({
        title: "Bạn có chắc chắn muốn xóa?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            arrCart.splice(id,1);
            localStorage.setItem(userSession,JSON.stringify(arrCart));
            renderMyProduct();
            renderFooterProduct();
        }
      });
   
}

function renderSale()
{
    if(document.getElementById('txtsale').value!= "" && document.getElementById('txtsale').value == keySale)
    {
        swal({
            title: "Bạn muốn sử dụng " + userSale.text,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                valueSale = parseFloat(userSale.valueSale);
                renderFooterProduct();
            }
          });
       
    }else{
        swal("Sử dụng mã thất bại!", "Không tìm thấy mã khuyến mãi này!", "error");
        valueSale = 0;
    }
    renderFooterProduct();
}



function createBill()
{
    if(localStorage.getItem('listbill') == null)
    {
        arrBill = [{
            billID:uuid(),
            arrOrder: [{
                currentTime: "10:7 2/12/2021",
                id: "0",
                img: "iphone13.png",
                name: "IPHONE 13 pro max",
                prices: "1200",
                quantify: 1,
                status: "Đang xử lý",
                type: "macbook",
                user: "admin"
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

function createBillDetail()
{
    if(localStorage.getItem('billdetail') == null)
    {
        billDetail = [
            {
                billID:arrBill[0].billID,
                arrOrder: [{
                    currentTime: "10:7 2/12/2021",
                    id: "0",
                    img: "iphone13.png",
                    name: "IPHONE 13 pro max",
                    prices: "1200",
                    quantify: 1,
                    status: "Đang xử lý",
                    type: "macbook",
                    user: "admin"
                }],
            }
        ]
        localStorage.setItem('billdetail',JSON.stringify(billDetail));
    } else {
         billDetail = JSON.parse(localStorage.getItem('billdetail'));
    }
}
function onPay()
{
    swal({
        title: "Bạn chắc chắn muốn thanh toán?",
        text: "Số tiền bạn phải trả là " + totalProducts() + "$",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            var listOrder = [];
            var date = new Date();
            // var year = date.getFullYear();
            var curDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            for (var index in arrCart)
            {
                listOrder[index] = arrCart[index];
                listOrder[index]["user"] = userSession;
                listOrder[index]["status"] = "Đang xử lý";
            }

            var total = 0;
            for (var index in arrCart)
            {
                total += parseInt(arrCart[index].prices) * parseInt(arrCart[index].quantify);
            }

            var billID = uuid();
            var objBill = {
                billID:billID,
                arrOrder:listOrder,
                user:userSession,
                total:total,
                curDate:curDate,
                status:"Đang xử lý"
            };

            var objBillDetail = {
                billID:billID,
                arrOrder:listOrder
            }
          
            arrCart = [];
            localStorage.setItem(userSession,JSON.stringify(arrCart));
            swal("Thanh toán thành công!", "Vui lòng chuẩn bị tiền để nhận hàng!", "success");
            userSale = [];
            localStorage.setItem(userSession + "sale",JSON.stringify(userSale));
            arrBill.push(objBill);
            billDetail.push(objBillDetail);
            localStorage.setItem("listbill",JSON.stringify(arrBill));
            localStorage.setItem("billdetail",JSON.stringify(billDetail));
            renderMyProduct();
            renderFooterProduct();
        }
      });   
}

function plusOfProduct(id)
{
    for (var index in arrCart)
    {
        if(arrCart[index].id == id)
        {
            ++arrCart[index].quantify;
            renderMyProduct(); 
            renderFooterProduct();
            break;
        }
    }
    
    
}

function minusOfProduct(id)
{
    for (var index in arrCart)
    {
        if(arrCart[index].id == id)
        {
            if(arrCart[index].quantify > 1)
            {

                --arrCart[index].quantify;
                renderMyProduct(); 
                renderFooterProduct();
                break;
            }
        }
    }
  
}


function sumOfProduct(a,b)
{
   return parseInt(a)*parseInt(b);
}

function sumOfProducts(a,b,value)
{
    return (a+b)*value;
}

window.onload = function()
{
    renderMyProduct();
    renderFooterProduct();
    checkSession();

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

//xuly modal bar
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


function renderEmptyProduct()
{
    document.getElementById('display_product').innerHTML = '<div id="errorSearch">Không tìm thấy sản phẩm</div>'
}

console.log(arrCart)