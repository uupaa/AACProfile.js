# AACProfile.js [![Build Status](https://travis-ci.org/uupaa/AACProfile.js.svg)](https://travis-ci.org/uupaa/AACProfile.js)

[![npm](https://nodei.co/npm/uupaa.aacprofile.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.aacprofile.js/)

AAC Profile and Level detection.

This module made of [WebModule](https://github.com/uupaa/WebModule).

## Documentation
- [Spec](https://github.com/uupaa/AACProfile.js/wiki/)
- [API Spec](https://github.com/uupaa/AACProfile.js/wiki/AACProfile)

## Browser, NW.js and Electron

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/AACProfile.js"></script>
<script>

var codecs     = "mp4a.40.2, avc1.4d4015";
var codecArray = codecs.split(","); // -> ["mp4a.40.2", " avc1.42c01e"]

for (var i = 0, iz = codecArray.length; i < iz; ++i) {
    var codec = codecArray[i].trim();

    if (/mp4a/.test(codec)) {
        console.info( AACProfile.getProfile(codec) ); // -> "AAC-LC";
    }
}

</script>
```

## WebWorkers

```js
importScripts("<module-dir>/lib/WebModule.js");
importScripts("<module-dir>/lib/AACProfile.js");

```

## Node.js

```js
require("<module-dir>/lib/WebModule.js");
require("<module-dir>/lib/AACProfile.js");

```

