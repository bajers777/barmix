const element = document.querySelectorAll('.faq__element');

element.forEach(item=>{
    item.addEventListener("click", e=>{
        const target = e.currentTarget.children[1];
        if(target.className == "hidden"){
           return target.className = "show_element";
        }
        target.className = "hidden";
    })
})