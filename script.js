

document.querySelector("#submit").addEventListener('click',submit)

function submit()
{

    let dataEntered = retriveData()
    console.log(dataEntered)
    let readData = insertRecord(dataEntered)
    let hname = document.getElementById("hname")
    let hrole = document.getElementById("hrole")
    let hcompany = document.getElementById("hcompany")
    hname.innerHTML = dataEntered[0]
    hrole.innerHTML = dataEntered[1]
    hcompany.innerHTML = dataEntered[2]
}

function retriveData(){
    let name = document.querySelector("#sname").value
    let role = document.querySelector("#srole").value 
    let company = document.querySelector("#scompany").value
    arr = [name,role,company]
    return arr
}

function insertRecord(dataEntered){
    let table = document.getElementById("myTable")
    // for(let i=0;i<dataEntered.length;i++){
        // console.log(dataEntered[i])
        let row = `<tr><td>${dataEntered[0]}</td><td>${dataEntered[1]}</td><td>${dataEntered[2]}</td></tr>`
x
        table.innerHTML += row 
    // }
}

