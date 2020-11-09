var createTr = () => {
    return document.createElement("TR")
}
var createTd = (text) => {
    const td = document.createElement("TD")
    if (text) {
        td.innerHTML = text
    }
    return td
}
var createButton = (text, className) => {
    const button = document.createElement("BUTTON")
    button.innerHTML = text
    button.className = className
    return button
}