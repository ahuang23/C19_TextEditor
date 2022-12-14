const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    prompt = event;

});

let installed = false;
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    prompt.prompt();
    let result = await that.prompt.userChoice;
    if (result&&result.outcome === 'accepted') {
        installed = true;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.style.display = 'none';
});
