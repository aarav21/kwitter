function login(){
    window.location="main.html";
    userName =  document.getElementById("txt-name").value;
    localStorage.setItem("user_name", userName);
    
}