function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")  
    window.location = "index.html"
}

username = localStorage.getItem("username")
roomname = localStorage.getItem("room_name")

document.getElementById("intro").innerHTML = "chat in "+ roomname;