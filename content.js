
chrome.storage.sync.get(['rtuLogin', 'rtuPassword', 'rtuEnabled'], function(data) {

    if (data.rtuEnabled) {

        const login = data.rtuLogin;
        const password = data.rtuPassword;

        if (login && password) {

            let usernameInput = document.querySelector("#IDToken1");
            let passwordInput = document.querySelector("#IDToken2");
            let loginButton = document.querySelector('input[name="Login.Submit"]');

            if (usernameInput && passwordInput) {
                usernameInput.value = login;
                passwordInput.value = password;

                loginButton.click();
            } else {
                console.error("Username or password input field not found.");
            }
        }
    }
});
