// Script configuration variables
export const UNLOCKABLE_PLAYABILITY_STATUSES = ['AGE_VERIFICATION_REQUIRED', 'AGE_CHECK_REQUIRED', 'LOGIN_REQUIRED'];
export const VALID_PLAYABILITY_STATUSES = ['OK', 'LIVE_STREAM_OFFLINE'];

// User needs to confirm the unlock process on embedded player?
export const ENABLE_UNLOCK_CONFIRMATION_EMBED = false;

// Show notification?
export const ENABLE_UNLOCK_NOTIFICATION = false;

// These are the proxy servers that are sometimes required to unlock videos with age restrictions.
// You can host your own account proxy instance. See https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/tree/main/account-proxy
// To learn what information is transferred, please read: https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass#privacy
export const ACCOUNT_PROXY_SERVER_HOST = 'https://youtube-proxy.zerody.one';
export const VIDEO_PROXY_SERVER_HOST = 'https://phx.4everproxy.com';

// Whether a thumbnail is blurred can be detected by the following "sqp" parameter values in the thumbnail URL.
// Seems to be base64 encoded protobuf objects, see https://stackoverflow.com/a/51203860
export const THUMBNAIL_BLURRED_SQPS = [
    '-oaymwEpCOADEI4CSFryq4qpAxsIARUAAAAAGAElAADIQj0AgKJDeAHtAZmZGUI=', // Desktop 480x270
    '-oaymwEiCOADEI4CSFXyq4qpAxQIARUAAIhCGAFwAcABBu0BmZkZQg==', // Desktop 480x270
    '-oaymwEiCOgCEMoBSFXyq4qpAxQIARUAAIhCGAFwAcABBu0BZmbmQQ==', // Desktop 360x202
    '-oaymwEiCNAFEJQDSFXyq4qpAxQIARUAAIhCGAFwAcABBu0BZmZmQg==', // Desktop 720x404
    '-oaymwEdCNAFEJQDSFryq4qpAw8IARUAAIhCGAHtAWZmZkI=', // Desktop 720x404
    '-oaymwEdCNACELwBSFryq4qpAw8IARUAAIhCGAHtAT0K10E=', // Desktop 336x188
    '-oaymwESCMACELQB8quKqQMG7QHMzMxB', // Mobile 320x180
    '-oaymwESCOADEOgC8quKqQMG7QGZmRlC', // Mobile 480x360
];
