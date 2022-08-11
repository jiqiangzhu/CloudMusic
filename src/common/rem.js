function remLayOut () {
    let screenWidth = document.documentElement.clientWidth || window.innerWidth
    if (screenWidth >= 750) {
        screenWidth = 750
    }
    if (screenWidth <= 320) {
        screenWidth = 320
    }
    document.documentElement.style.fontSize = (screenWidth / 7.5) + 'px'

    document.querySelector('body').style.fontSize = '0.3rem'

}
remLayOut()
window.onresize = () => {
    remLayOut()
}