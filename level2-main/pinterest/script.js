let arr = [
    {name: "Petals of rose",images: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXxlbnwwfHwwfHx8MA%3D%3D"},

    {name: "Space",images: "https://images.unsplash.com/photo-1707058665477-560297ffe913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"},

    {name: "Glaciers melting",images: "https://images.unsplash.com/photo-1707090804388-7e9d7c6d6ab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "Mountains of desert",images: "https://images.unsplash.com/photo-1707343846292-0c11438d145f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"},

    {name: "Beach side",images: "https://images.unsplash.com/photo-1706108582795-c89426e3357d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D"},

    {name: "Minaimal waterfall",images: "https://images.unsplash.com/photo-1707143900043-6f9f22be629c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D"},

    {name: "Petals of rose",images: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXxlbnwwfHwwfHx8MA%3D%3D"},

    {name: "Space",images: "https://images.unsplash.com/photo-1707058665477-560297ffe913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"},

    {name: "Glaciers melting",images: "https://images.unsplash.com/photo-1707090804388-7e9d7c6d6ab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "Mountains of desert",images: "https://images.unsplash.com/photo-1707343846292-0c11438d145f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"},

    {name: "Beach side",images: "https://images.unsplash.com/photo-1706108582795-c89426e3357d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D"},

    {name: "Minaimal waterfall",images: "https://images.unsplash.com/photo-1707143900043-6f9f22be629c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D"}
];




function showTheCards(){
    var clutter = ""
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.images}" alt="image">
        <div class="caption">Lorem ipsum</div>
        </div>`
    })
    console.log(clutter);
    document.querySelector('.container').innerHTML = clutter
}

let input = document.querySelector('#searchinput')

function handleSearchFunctionality(){
    input.addEventListener('focus',function(){
        document.querySelector('.overlay').style.display = "block"
    })

    input.addEventListener('blur',function(){
        document.querySelector('.overlay').style.display = "none"
    })

    input.addEventListener('input',function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value))
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class='res flex px-8 py-3'>
                        <i class='ri-search-line font-semibold mr-5'></i>
                        <h3 class='font-semibold'>${obj.name}</h3>
            </div>`

        })
        

              document.querySelector('.searchdata').style.display = 'block'
        document.querySelector('.searchdata').innerHTML = clutter;
    })
}

handleSearchFunctionality()
showTheCards()