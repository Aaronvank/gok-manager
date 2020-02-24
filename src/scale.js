let deviceWidth = ''

function setHtmlFont() {
    deviceWidth = document.documentElement.clientWidth
    document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 19.2 + 'px !important'
}
setHtmlFont()

if (window.addEventListener) {
    window.addEventListener(
        'resize',
        function() {
            setHtmlFont()
            // 强制刷新（因为某些ant组件没有及时resize）
            //  this.location.reload();
        },
        false
    )
}
