function security() {

    var param = location.search.split('id=')[1];

    if (param.length > 1) {
        param = decodeURIComponent(param);

        document.getElementById('deadpool').innerHTML = param;

        document.getElementById('name').innerText = "Ȟ̵̤̩̉̀̊Ä̵̠̣̲̤́̎C̶̨̢̟̠͊̎́K̴͓̥̀̓̾̾E̸͈͉̺͋͆̎Ȑ̴̨́M̴̖̈́̄̈́͜Á̶͓̊͌̈́͜͜N̵̺͖̬͌̈̔";

        document.getElementById('photo').src = "assets/ryanbeckford.gif";

        document.getElementById('description').innerText = "⚠️ Warning: this site is being attacked and may be malicious. Please close this tab immediately!";

        if (/<.{3,}>/.test(param)) {
            easterEggDescription = `\nNice, you found an XSS vulnerability!\nYou typed: ${param}\n\nWant more payloads? Visit https://github.com/payloadbox/xss-payload-list`;

        } else {
            easterEggDescription = `\Nice, you just performed plaintext injection!\nYou typed: ${param}\n\nWant an XSS payload? Try:\n⠀⠀<svg/onload=prompt(name)>\n\n(This is a type of XSS called "reflected XSS" 😉)`;
        }

        document.getElementById('occupation').innerText = easterEggDescription;

    } else {
        window.alert("I think you forgot the payload 😂")
    }
}

function challenge() {
    setTimeout(function() {
        window.alert('Wanna play a little game?\nTry performing an XSS attack here!');
    }, 60000);
}