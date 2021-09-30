function getItems() {
    const item = document.getElementsByTagName("input");
    
    createItem(item);
    
    return item;
};

function createItem(item) {
    const list_item = document.createElement("li");
    const node = document.createTextNode(item.food.value);
    list_item.appendChild(node);
    addItemToList(list_item);
}

function addItemToList(list_item) {
    const element = document.getElementById("ol_list");
    element.appendChild(list_item);
    const item2 = document.getElementsByTagName("input");
    item2[0].value = "";
}