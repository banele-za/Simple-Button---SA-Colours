let index = 0;

function changeColours() {
    const colours = ["black","white","green","red","blue","yellow"];

    document.getElementsByTagName("body")[0].
    style.background = colours[index++];

    if (index > colours.length - 1)
        index = 0; 
}