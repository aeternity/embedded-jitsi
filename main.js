const params = (new URL(location)).searchParams;
const roomName = params.has('roomName') ? params.get('roomName') : 'embeddedtestroom';
const domain = 'league.superhero.com';

const options = {
    roomName: roomName,
    width: '100%',
    height: '100%',
    parentNode: document.querySelector('#meet'),
    noSSL: false,
    configOverwrite: {
        enableNoAudioDetection: true,
        enableNoisyMicDetection: true,
        startWithAudioMuted: true,
        startWithVideoMuted: true,

        fileRecordingsEnabled: true,
        liveStreamingEnabled: true,
        channelLastN: 8,
        useStunTurn: true,

        openBridgeChannel: 'websocket',
        requireDisplayName: true
    },

    // more interface option here: https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js
    interfaceConfigOverwrite: {
        TOOLBAR_ALWAYS_VISIBLE: true,
        SHOW_BRAND_WATERMARK: false,
        VERTICAL_FILMSTRIP: true,
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,

        CHAT_ALWAYS_OPEN: false,
        TILE_VIEW_ALWAYS_OPEN: false,

        startWithAudioMuted: true,
        startWithVideoMuted: true
    }
};

const api = new JitsiMeetExternalAPI(domain, options);
