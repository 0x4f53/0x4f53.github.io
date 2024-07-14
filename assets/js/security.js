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

        //window.alert(`Key: ${parameterKey}  |  Value: ${parameterValue}`)

        if (parameterKey != "" && parameterValue == "") {
            window.alert("Where's the payload, dumbass?")
            return
        }

        document.getElementById('deadpool').innerHTML = parameterValue // the bad line

        document.getElementById('photo').src = "assets/ryanbeckford.gif"

        document.getElementById('description').innerText = "⚠️ Warning: this site is being attacked and may be malicious. Please close this tab immediately!"

        if (/<.{3,}>/.test(parameterValue)) {
            easterEggDescription = `Nice, you found an XSS vulnerability!\n\nYou provided the value\n\n⠀⠀${parameterValue}\n\nfor the parameter key "${parameterKey}", which the gif at the end of the page tries to load, using JavaScript's "innerHTML" property.\n\nNow try the following payload:\n\n⠀⠀<svg/onload=alert(prompt("Enter%E2%A0%80your%E2%A0%80email%E2%A0%80address"))>\n\nIf your bank's website is vulnerable to this type of attack, an attacker can simply ask you for your password and save your response in a database.\n\nVisit https://github.com/payloadbox/xss-payload-list for more payloads!`
        } else {
            easterEggDescription = `Nice, you just performed plaintext injection!\n\nYou provided the value "${parameterValue}" for the parameter key "${parameterKey}". A lot of sites use this method for user interface customization and sending POST requests from UI elements, into which attackers inject fake links and image elements.\n\nWant an XSS payload? Try:\n\n⠀⠀<svg/onload=prompt(name)>\n\n(This is a type of XSS called "reflected XSS")`
        }

        document.getElementById('occupation').innerText = easterEggDescription

        return

    }

    setTimeout(function() {
        window.alert('Wanna play a little game?\nTry performing an XSS attack here!')
    }, 120000)
    
}
