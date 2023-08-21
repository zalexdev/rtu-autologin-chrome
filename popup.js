const loginInput = document.getElementById('loginInput');
const passwordInput = document.getElementById('passwordInput');
const toggleLogin = document.getElementById('toggleLogin');

function saveCurrentState() {
    const loginValue = loginInput.value;
    const passwordValue = passwordInput.value;
    const isEnabled = toggleLogin.checked;

    chrome.storage.sync.set({
        'rtuLogin': loginValue,
        'rtuPassword': passwordValue,
        'rtuEnabled': isEnabled
    });
}

loginInput.addEventListener('input', saveCurrentState);
passwordInput.addEventListener('input', saveCurrentState);
toggleLogin.addEventListener('change', saveCurrentState);

chrome.storage.sync.get(['rtuLogin', 'rtuPassword', 'rtuEnabled'], function(data) {
    if (data.rtuLogin) {
        document.getElementById('loginInput').value = data.rtuLogin;
    }
    if (data.rtuPassword) {
        document.getElementById('passwordInput').value = data.rtuPassword;
    }
    document.getElementById('toggleLogin').checked = data.rtuEnabled;
});
