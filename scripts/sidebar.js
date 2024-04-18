let headings = document.querySelectorAll('.project-item-heading');
let list = document.getElementById("project-content-of-table");

for (let index = 0; index < headings.length; index++) {
    let li = document.createElement("li");
    let heading_number = index+1
    li.setAttribute("class", "list-element")
    li.setAttribute("id", "list-element-" + heading_number)
    li.appendChild(document.createTextNode(headings[index].innerHTML));
    list.appendChild(li)
}

let list_items = document.querySelectorAll(".list-element");
list_items.forEach(function(list_item) {
    list_item.addEventListener("click", function() {
        if (list_item.id == "list-element-1") {
            const heading = document.getElementById("project-heading-1")  

            if (heading) {
                const headingTop = heading.offsetTop;
                window.scrollTo({
                    top: headingTop,
                    behavior: "smooth"
                });
            }

        } else if (list_item.id == "list-element-2") {
            const heading = document.getElementById("project-heading-2")  

            if (heading) {
                const headingTop = heading.offsetTop;
                window.scrollTo({
                    top: headingTop,
                    behavior: "smooth"
                });
            }
        } else if (list_item.id == "list-element-3") {
            const heading = document.getElementById("project-heading-3")  

            if (heading) {
                const headingTop = heading.offsetTop;
                window.scrollTo({
                    top: headingTop,
                    behavior: "smooth"
                });
            }
        }
    })
})