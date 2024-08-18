isDark = true

function clickMe() {
    if (isDark) {
        document.documentElement.style.setProperty('--text-color', 'black')
        document.documentElement.style.setProperty('--bg-color', 'white')
    }
    else {
        document.documentElement.style.setProperty('--text-color', 'white')
        document.documentElement.style.setProperty('--bg-color', 'black')
    }
    isDark = !isDark
}