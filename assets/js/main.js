var arrProduct = [];
function createProduct()
{
    if(localStorage.getItem('product') == null)
    {

        arrProduct = [
            {
                id: "0",
                img:'macbook1.jpg',
                name: 'Macbook',
                prices: '1200',
                type: "macbook"
            },
        
            {
                id: "1",
                img: '13promax.jpg',
                name: 'IPHONE 13 Pro max new',
                prices: '2000',
                type: "iphone"
            },
        
            { 
                id: "2",
                img: '13.jpg',
                name: 'IPHONE 13 64GB new',
                prices: '1000',
                type: "iphone"
            },
        
            {
                id: "3",
                img: '131mobile1.jpg',
                name: 'IPHONE 13 mini new',
                prices: '800',
                type: "iphone"
            },
        
            {
                id: "4",
                img: '131mobile2.jpg',
                name: 'IPHONE 13 mini new',
                prices: '900',
                type: "iphone"
            },
            
            {
                id: "5",
                img: '131mobile3.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1000',
                type: "iphone"
            },
        
            {
                id: "6",
                img: '131mobile4.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1100',
                type: "iphone"
            },
        
            {
                id: "7",
                img: '131mobile5.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1200',
                type: "iphone"
            },
        
            {
                id: "8",
                img: '13mini.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1300',
                type: "iphone"
            },
        
            
            {
                id: "9",
                img: 'macbook1.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '2400',
                type: "macbook"
            },
        
            {
                id: "10",
                img: 'macbook2.jpg',
                name: 'MacBook Pro 16" 2019 Touch Bar 2.6GHz Core i7 512GB',
                prices: '2600',
                type: "macbook"
            },
        
            {
                id: "11",
                img: 'macbook3.jpg',
                name: 'MacBook Air 13" 2020 M1 16GB/256GB',
                prices: '2900',
                type: "macbook"
            },
        
            {
                id: "12",
                img: 'macbook4.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 16GB/256GB',
                prices: '1900',
                type: "macbook"
            },
        
            {
                id: "13",
                img: 'macbook5.jpg',
                name: 'MacBook Pro 14" 2021 M1 Pro',
                prices: '1399',
                type: "macbook"
            },
        
            {
                id: "14",
                img: 'macbook6.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar 2.0GHz Core i5 512GB',
                prices: '1499',
                type: "macbook"
            },
        
            {
                id: "15",
                img: 'macbook7.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '999',
                type: "macbook"
            },
        
            {
                id: "16",
                img: 'macbook7.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '1099',
                type: "macbook"
            },
        
            {
                id: "17",
                img: 'ipad1.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1000',
                type: "ipad"
            },
        
            {
                id: "18",
                img: 'ipad2.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1400',
                type: "ipad"
            },
        
            {
                id: "19",
                img: 'ipad3.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1600',
                type: "ipad"
            },
        
            {
                id: "20",
                img: 'ipad4.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1700',
                type: "ipad"
            },
        
            {
                id: "21",
                img: 'ipad5.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2100',
                type: "ipad"
            },
        
            {
                id: "22",
                img: 'ipad6.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2000',
                type: "ipad"
            },
        
            {
                id: "23",
                img: 'ipad7.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 128GB (2021)',
                prices: '2400',
                type: "ipad"
            },

            {
                id: "24",
                img: '131mobile6.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1600',
                type: "iphone"
            },

            {
                id: "25",
                img: '131mobile7.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1700',
                type: "iphone"
            },

            {
                id: "26",
                img: '131mobile8.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1800',
                type: "iphone"
            },

            {
                id: "27",
                img: '131mobile9.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "28",
                img: '131mobile10.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "29",
                img: '131mobile11.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "30",
                img: '131mobile12.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "31",
                img: '131mobile12.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },

            {
                id: "32",
                img: '131mobile13.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1900',
                type: "iphone"
            },
            
        
            ];
            localStorage.setItem('product',JSON.stringify(arrProduct));
    } else{
        arrProduct = JSON.parse(localStorage.getItem('product'));
    }
}