function getUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search)
    const paramsArray = []

    urlParams.forEach((value, key) => {
        paramsArray.push({ key: key, value: value })
    });

    return paramsArray
}

function stripHTMLRegex(html) {
    return html.replace(/<[^>]*>/g, "");
}

function security() {

    var parameters = getUrlParameters()

    if (parameters.length >= 1) {
        var parameter = parameters[0]

        var parameterKey = decodeURIComponent(parameter.key)
        var parameterValue = decodeURIComponent(parameter.value)

        // Thanks for checking out secretsnitch! It means a lot to me 🤧
        var openAiApiKey = "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";
        console.log(openAiApiKey)
        // Don't worry, the secret is fake

        if (parameterKey != "" && parameterValue == "") {
            window.alert("Where's the payload, dumbass?")
            return
        }

        document.getElementById('deadpool').innerHTML = parameterValue // the bad line

        document.getElementById('photo').src = "assets/images/ryanbeckford.gif"
        document.getElementById('name').innerText = "⚠️ Warning"
        document.getElementById('pgp').remove()
        document.getElementById('resume').remove()

        tagRegex = /<.{3,}>/
        filesystemRegex = /filesystem|dir|directory|path|page|file|resource|folder|filepath|resource|target|res|location|download|load|include|require|fetch|get|post|put|delete|patch|options|head|trace|connect|options|trace|source|source_path|file_path|file_location|file_target|file_resource|file_folder|file_filepath|file_resource|file_target|file_location|file_download|file_include|file_require|file_fetch|file_get|file_post|file_put|file_delete|file_patch|file_options|file_head|file_trace|file_connect|file_options|file_trace|file_source|file_source_path|file_file_path|file_file_location|file_file_target|file_file_resource|file_file_folder|file_file_filepath|file_file_resource|file_file_target|file_file_location|file_file_download|file_file_include|file_file_require|file_file_fetch|file_file_get|file_file_post|file_file_put|file_file_delete|file_file_patch|file_file_options|file_file_head|file_file_trace|file_file_connect|file_file_options|file_file_trace/
        filepathRegex = /..\/.*/
        
        if (tagRegex.test(parameterValue)) {
            easterEggTitle = "XSS attack detected. Please close this tab immediately!"
            easterEggDescription = `Nice, you found a cross-site scripting (XSS) vulnerability!<br>You provided the value "<code>${parameterValue.replace(/</gm, '‹').replace(/>/gm, '›')}</code>" for the parameter key "<code>${parameterKey}</code>", which the gif at the end of the page tries to load, using JavaScript's <code>innerHTML</code> property.<br><br>If your bank's website is vulnerable to this type of attack, an attacker can simply ask you for your password and save your response in a database.`
        } else {
            easterEggTitle = "Plaintext injection detected. Please close this tab immediately!"
            easterEggDescription = `Nice, you just performed plaintext injection!<br>You provided the value "<code>${parameterValue}</code>" for the parameter key "<code>${parameterKey}</code>". A lot of sites use this method for user interface customization and sending POST requests from UI elements, into which attackers inject fake links and image elements.<br><br>Want an XSS payload? Try: <br><code>&lt;svg/onload=prompt("Enter%E2%A0%80your%E2%A0%80banking%E2%A0%80password")&gt;</code><br><br>(This is a type of XSS called "reflected XSS")`
        }

        if (filesystemRegex.test(parameterKey)) {
            if (filepathRegex.test(parameterValue)) window.location.href = "assets/misc/directory.html"
            if (parameterValue == "lfi_successful") {
                easterEggTitle = "LFI attack detected. Please close this tab immediately!"
                easterEggDescription = `Nice, you found a local file inclusion (LFI) vulnerability!<br>You tried using the "<code>${parameterKey}</code>" query key and <code>../</code> as the value to access the parent directory.<br><br>If your server is vulnerable to this type of attack, an attacker can simply go through all directories and grab all files on your server.`
            }
        }

        document.getElementById('occupation').innerText = easterEggTitle
        document.getElementById('blurb').innerHTML = easterEggDescription + `<br><br>Visit <a href="https://github.com/swisskyrepo/PayloadsAllTheThings">github.com/swisskyrepo/PayloadsAllTheThings</a> for more payloads!`;
        
        return

    }

    setTimeout(function() {
        window.alert('Wanna play a little game?\nTry performing an XSS attack here!')
    }, 120000)
    
}
