function getUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search)
    const paramsArray = []

    urlParams.forEach((value, key) => {
        paramsArray.push({ key: key, value: value })
    });

    return paramsArray
}

function security() {

    var parameters = getUrlParameters()

    if (parameters.length >= 1) {
        var parameter = parameters[0]

        var parameterKey = decodeURIComponent(parameter.key)
        var parameterValue = decodeURIComponent(parameter.value)

        if (parameterKey != "" && parameterValue == "") {
            window.alert("Where's the payload, dumbass?")
            return
        }

        document.getElementById('deadpool').innerHTML = parameterValue // the bad line

        document.getElementById('photo').src = "assets/images/ryanbeckford.gif"
        document.getElementById('name').innerText = "⚠️ Warning"
        document.getElementById('occupation').innerText = "This site is being attacked. Please close this tab immediately!"
        document.getElementById('pgp').hidden = true

        tagRegex = /<.{3,}>/

        if (tagRegex.test(parameterValue)) {
            easterEggDescription = `Nice, you found an XSS vulnerability!
            You provided the value\n
            ⠀⠀${parameterValue}\n
            for the parameter key "${parameterKey}", which the gif at the end of the page tries to load, 
            using JavaScript's "innerHTML" property.\nNow try the following payload:\n
            ⠀⠀<svg/onload=alert(prompt("Enter%E2%A0%80your%E2%A0%80banking%E2%A0%80password"))>\n
            If your bank's website is vulnerable to this type of attack, an attacker can simply 
            ask you for your password and save your response in a database.\n
            Visit https://github.com/payloadbox/xss-payload-list for more payloads!\n`
        } else {
            easterEggDescription = `Nice, you just performed plaintext injection!
            You provided the value "${parameterValue}" for the parameter key "${parameterKey}". 
            A lot of sites use this method for user interface customization and 
            sending POST requests from UI elements, into which attackers inject 
            fake links and image elements.\n
            Want an XSS payload? Try:\n
            ⠀⠀<svg/onload=prompt(name)>\n
            (This is a type of XSS called "reflected XSS")\n`
        }

        document.getElementById('description').innerText = easterEggDescription

        return

    }

    setTimeout(function() {
        window.alert('Wanna play a little game?\nTry performing an XSS attack here!')
    }, 120000)
    
}
