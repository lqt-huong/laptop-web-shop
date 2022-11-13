
var d = 1;

function displayMessage()
{
    ++d;
    if(d%2 == 0)
    {
        document.getElementById('box-messenger').style.display = "block";
    } else {
        document.getElementById('box-messenger').style.display = "none";
    }
}


function hideMessage()
{ 
    document.getElementById('box-messenger').style.display = "none";
}


var arrReview = [
    {
        video: "https://www.youtube.com/embed/-9v2IQVoBX8",
        title: "Trên tay Dell XPS 13 Plus: siêu tối giản!!"
    },

    {
        video: "https://www.youtube.com/embed/039mJSEMPdw",
        title: "Đây mới là Laptop sáng tạo - Macbook Pro 16 Killer! | Asus Zenbook Pro 16X Oled"
    },

    {
        video: "https://www.youtube.com/embed/-KN8hApyh2o",
        title: "ASUS Zenbook 14X OLED: Đẹp mê ly, nhiều tính năng xịn sò !!!"
    },

    {
        video: "https://www.youtube.com/embed/Q7w50fG-GsM",
        title: "Nên mua MacBook nào? Air, Pro 13, Pro 14 hay Pro 16?"
    }

]

renderReview();
function renderReview()
{
    
    var html = `<div class="sub-container__content-left">
    <div class="left-content1" id="left-content1">
        <iframe class="sub-clip" src=${arrReview[0].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="left-content2">
        <p style="font-size: 15px;">${arrReview[0].title}</p>
    </div>
</div>
<div class="sub-container__content-right">
    <div class="right-content1" onclick = "changeVideo1();">
        <iframe width="120" height="88" src=${arrReview[1].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>${arrReview[1].title}</p>
    </div>
    <hr class="under">
    <div class="right-content2" onclick = "changeVideo2();">
        <iframe width="120" height="88" src=${arrReview[2].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>${arrReview[2].title}</p>
    </div>
    <hr class="under">
    <div class="right-content3" onclick = "changeVideo3();">
        <iframe width="120" height="88" src=${arrReview[3].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>${arrReview[3].title}</p>
    </div>  
</div>`;
    document.getElementById('videoReview').innerHTML = html;
}

function changeVideo1()
{
    var temp = arrReview[0];
        arrReview[0] = arrReview[1];
        arrReview[1] = temp;
    renderReview();
}

function changeVideo2()
{
    var temp = arrReview[0];
        arrReview[0] = arrReview[2];
        arrReview[2] = temp;
    renderReview();
}

function changeVideo3()
{
    var temp = arrReview[0];
        arrReview[0] = arrReview[3];
        arrReview[3] = temp;
    renderReview();
}
