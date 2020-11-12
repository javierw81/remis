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
var createButton = (text, className, fn) => {
    const button = document.createElement("BUTTON")
    button.innerHTML = text
    if (fn) {
        button.onclick = fn
    }
    button.className = className
    return button
}