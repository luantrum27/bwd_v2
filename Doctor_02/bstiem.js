var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var user_name = document.getElementById('user-name')
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// -------------------------modal
let yes = document.querySelector('.yes');
yes.onclick = function () {
    location.href = '../Doctor_02/phieutiem.html'
}

let no = document.querySelector('.no');
no.onclick = function () {
    location.href = '../Doctor_02/index.html'
}
// ---------------------------------
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
let khung = document.querySelector('.khung')
let timkiem = document.querySelector('.timkiem');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    khung.classList.toggle('active');
    // timkiem.classList.toggle('active');
    // search.classList.toggle('active');
}
let search = document.querySelector('.search');
// timkiem.onclick = function () {
//     search.classList.toggle('active');
// }
// add active class in selected list item
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}
// --------------------nhận dữ liệu
var nhandulieu = document.querySelector('.list');
var cccd = document.getElementById('socccd');
var ten = document.getElementById('ht');
var gt = document.getElementById('gt');
var ngaysinh  = document.getElementById('ns');
var sdt = document.getElementById('sdt');
var diachi = document.getElementById('dc');
var ngaytiem1 = document.getElementById('nt1');
var loai1 = document.getElementById('loai1');
var ngaytiem2 = document.getElementById('nt2');
var loai2 = document.getElementById('loai2');
var accountsAPI = 'http://localhost:3000/Accounts';
var usersAPI = 'http://localhost:3000/Users';
var dataNurse;
var idLogout;
const btnLogout = document.getElementById('btnLogout');
function logOut(id, url) {
    var option = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
           trangThai: false
        })
    }
     fetch(accountsAPI + '/' + id, option)
        .then(res => res.json())
        .then(() => {
          window.location = url
        })
}
btnLogout.onclick = () => {
    logOut(idLogout, '../Home/Home-Page/index.html')
}
fetch(accountsAPI)
    .then(res => res.json())
    .then(accounts => {
        accounts.forEach(account => {
            if(account.trangThai == true){
                dataNurse = account;
                idLogout = account.id;
                return;
            }
        })
    })
    .then(() => {
        const name = document.getElementById('account-name');
        const images = document.querySelectorAll('.account-image');
        const phone = document.getElementById('account-phone');
        
        name.innerHTML = dataNurse.ten;
        phone.innerHTML = dataNurse.sdt;
        console.log(images)
        images.forEach(image => {
            image.src = '../image/' + dataNurse.anhXacThuc;
        })
    })       
const root = document.getElementById('root')
var index = 1;
fetch(usersAPI)
    .then(res => res.json())
    .then(users => {
        var htmls = users.map(user => {
            if (user.trangThai == true) {
                return `
                    <li>${user.hoTen}</li>     
                `
            }
        })

        var html = htmls.join('')
        root.innerHTML = html
    })
