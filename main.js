const domain = 'league.superhero.com';
const options = {
    roomName: 'JitsiMeetAPIExample',
    width: '100%',
    height: '100%',
    parentNode: document.querySelector('#meet'),
    // more interface option here: https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js
    interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_BRAND_WATERMARK: false,
        VERTICAL_FILMSTRIP: true,
        RECENT_LIST_ENABLED: false,
        SHOW_POWERED_BY: true,
        filmStripOnly: false,

    },
};

const api = new JitsiMeetExternalAPI(domain, options);

api.executeCommand('subject', 'Aeternity test conference');
api.executeCommand('email', 'example@aeternity.com');
