window.onload = loadProducts

function loadProducts(){
    for(i=0;i<localStorage.length;i++){
        var data=JSON.parse(localStorage.getItem(localStorage.key(i)))
        var table = document.getElementById("products_list")
        var row = document.createElement("tr")
        
        row.innerHTML = `
                        <td>${i+1}</td>
                        <td>${data.name}</td>
                        <td>${data.unit}</td>
                        <td>${data.desc}</td>
                        <td>${data.price}</td>
                        <td><button class="btn-edit" onclick="location.href='index.html'">Edit</button></td>
                        <td><button id="${data.name}" class="btn-delete">Delete</button></td>
                        `
        table.appendChild(row)

        var deleteBtn = document.getElementById(`${data.name}`)
        
        deleteBtn.addEventListener("click",()=>{
            localStorage.removeItem(data.name)        
        })
    }
}





