function easterEgg() {
    var message = location.search.split('message=')[1];

    if (message.length > 1) {
        message = decodeURIComponent(message);
        document.getElementById('name').innerHTML = "Ȟ̵̤̩̉̀̊Ä̵̠̣̲̤́̎C̶̨̢̟̠͊̎́K̴͓̥̀̓̾̾E̸͈͉̺͋͆̎Ȑ̴̨́M̴̖̈́̄̈́͜Á̶͓̊͌̈́͜͜N̵̺͖̬͌̈̔";
        var easterEggDescription = "";

        if (/<.{3,}>/.test(message))
            easterEggDescription = "\nNice, you found an XSS injection vulnerability!";

        else {
            easterEggDescription = "\nNice, you found an plaintext injection!";
            document.getElementById('pgpkey').innerText = "😉 Want a payload? Try: <img%20src/onerror=prompt(8)>";
        }

        document.getElementById('occupation').innerText = easterEggDescription;
        document.getElementById('photo').src = "assets/ryanbeckford.gif";
    }
}