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

        ];
        localStorage.setItem('product', JSON.stringify(arrProduct));
    } else {
        arrProduct = JSON.parse(localStorage.getItem('product'));
    }
}