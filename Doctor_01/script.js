let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
let bangsangloc = document.querySelector('.bangsangloc')
let timkiem = document.querySelector('.timkiem');
var btn = document.getElementById("myBtn");
var usersAPI = 'http://localhost:3000/Users';


// btn.onclick = setTimeout(function(){
//     location.replace("../Form-SignUp/index.html");
// });
var idUser;
const btnSuccess = document.querySelector('#success');

function editUsers(id, url) {
  var option = {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
         trangThai: true
      })
  }
   fetch(usersAPI + '/' + id, option)
      .then(res => res.json())
      .then(() => {
        window.location = 'index.html';
      })
}

btnSuccess.onclick = () => {
    editUsers(idUser)
}
function logOut(id, url) {
    console.log('đã vào đây');
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
var listUsers;
const root = document.getElementById('root')
fetch(usersAPI)
    .then(res => res.json())
    .then(users => {
        listUsers = users;
        var htmls = users.map(user => {
            if (user.trangThai !== true) {
                return `
                    <li id="btn-${user.id}">${user.hoTen}</li>     
                `
            }
        })

        var html = htmls.join('')
        root.innerHTML = html
        listUsers.map(user => {
            if (user.trangThai !== true) {
                let btn = document.querySelector(`#btn-${user.id}`);
                btn.onclick = () => {
                    let newHTML = `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../image/av4.jpg" alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">${user.hoTen}</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    `
                    idUser = user.id;
                    root.innerHTML = newHTML;
                }
            }
            
        })
    })

    
     
var accountsAPI = 'http://localhost:3000/Accounts';
        var dataNurse;
        var idLogout;
        const btnLogout = document.getElementById('btnLogout');
        function logOut(id, url) {
            console.log('đã vào đây');
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
                images.forEach(image => {
                    image.src = '../image/' + dataNurse.anhXacThuc;
                })
            })




menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    bangsangloc.classList.toggle('active');
    timkiem.classList.toggle('active');
    search.classList.toggle('active');
}

let search = document.querySelector('.search');
timkiem.onclick = function () {
    search.classList.toggle('active');
}
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

var btn = document.getElementById("hoanthanh");
btn.onclick = function () {
    location.href = '/index.html'
}

function myFunction(){
    location.href = 'http://www.hyperlinkcode.com/button-links.php'
    // mở tab mới 
    // window.open("http://www.hyperlinkcode.com/button-links.php");
    // window.focus();
}



