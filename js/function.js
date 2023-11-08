const node_for_click = document.getElementById("for_click0")

function find_edit(){
    const surname  = document.getElementsByTagName('div')[3]
    console.log(surname.innerHTML)
    surname.innerHTML = 'Kharzhavina'
}

node_for_click.addEventListener("click",find_edit)


const node_for_click1 = document.getElementById("for_click1")

function find_edit_1(){
    const name  = document.getElementsByTagName('div')[4]
    console.log(name.innerHTML)
    name.innerHTML = 'Eva'
}

node_for_click1.addEventListener("click",find_edit_1)


const node_for_click2 = document.getElementById("for_click2")

function find_edit_2(){
    const da = document.getElementsByTagName('div')[5]
    console.log(da.innerHTML)
    da.innerHTML = 'Vladimirovna'
}

node_for_click2.addEventListener("click",find_edit_2)