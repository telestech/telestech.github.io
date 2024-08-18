isDark = false

dark_theme = {
    "--card-bg" : "#484343a2",
    "--text-color" : "#ffffff",     
    "--text-alt-color" : "black",
    "--foreground-color" : "#00eeff",
    "--bg-color" : "rgb(0, 0, 0)"
}

light_theme = {
    "--card-bg" : "#fff9eea2",
    "--text-color" : "#2c251f",     
    "--text-alt-color" : "white",
    "--foreground-color" : "#2c251f",
    "--bg-color" : "white"     
}

function setTheme() {
    theme = (isDark)? dark_theme : light_theme;
    var keys = Object.keys(theme);
    console.log(theme.size)
    for (i = 0; i < keys.length; i++) {
        console.log(i)
        document.documentElement.style.setProperty(keys[i], theme[keys[i]])
        console.log(keys[i])
        console.log(theme[keys[i]])
    }

    isDark = !isDark

    res = getStyleVariables()
    console.log(res)

}

function getStyleVariables() {
    var declaration = document.styleSheets[0].cssRules[0];
    var allVar = declaration.style.cssText.split(";")

    var result = {}
    for (var i = 0; i < allVar.length; i++) {
        var a = allVar[i].split(":");
        if (a[0] !== "")
            result[a[0].trim()] = a[1].trim()
    }

    return result
}


