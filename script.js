

document.getElementById("login").addEventListener('click',(e)=>{
    e.preventDefault()
    let userData = getUserData()
    console.log(userData)
    let hunger = document.getElementById("hunger")
    hunger.innerHTML = `Hi ${userData[0]} Feeling Hunger here is the best place`
})


function getUserData(){
    let username = document.getElementById("username").value 
    let useremail  = document.getElementById("useremail").value
    arr = [username,useremail]
    return arr
}
