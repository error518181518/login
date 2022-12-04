/*bài 1*/
function student01(name, age, address) {
    dataStudent = [name= "2 Thư", age= 13, address= "Ho Chi Minh"];
    console.log(dataStudent);
}

/*phones*/
var smartphones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];

function getprice() {
    prc_data = []
    for (i = 0; i<smartphones.length;i++) {
        prc_data.push(smartphones[i].price)
    }
    console.log(prc_data);
}

/*Sign in*/
let user = [

    {
        username: "toan",
        password: "123"
    },

    {
        name: "2 bạn Thư",
        username: "Thu",
        password: "456"
    },

    {
        name: "2 bạn Thư",
        username: "2 Thu",
        password: "789"
    },
]

/*sign in*/

let subm = (link) => {
    var username = document.getElementById("name").value
    var password = document.getElementById("pass").value

    for (i = 0; i < user.length; i++) {
        if (username == user[i].username && password == user[i].password) {
                console.log(link.value)
                location.href = 'https://error518181518.github.io/Chrblog/index.html'
                alert(username + " logged in")
            return
        } else {   
             alert("incorrect! Check agin.")
             login = false;
    }
        }
    }
