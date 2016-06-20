var ModuleTestAACProfile = (function(global) {

var test = new Test(["AACProfile"], { // Add the ModuleName to be tested here (if necessary).
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        el:         true,  // enable electron (render process) test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
            console.error(error.message);
        }
    });

if (IN_BROWSER || IN_NW || IN_EL || IN_WORKER || IN_NODE) {
    test.add([
        testAACProfile,
    ]);
}

// --- test cases ------------------------------------------
function testAACProfile(test, pass, miss) {

    var result = {
            1: _getProfile("mp4a.40.2, avc1.66.13")  === "AAC-LC",
            2: _getProfile("mp4a.40.5, avc1.42c00d") === "HE-AAC",
            3: _getProfile("mp4a.40.29, avc1.42c00d") === "HE-AAC v2",
            4: _getProfile("mp4a.40.34, avc1.66.30") === "MP3",
            5: _getProfile("mp4a.40.99, avc1.66.30") === "", // UNKNOWN Profile
        };

    if ( /false/.test(JSON.stringify(result)) ) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function _getProfile(codecs) { // @arg CodecString - "mp4a.40.2, avc1.4d4015";
    var codecArray = codecs.split(","); // -> ["mp4a.40.2", " avc1.42c01e"]

    for (var i = 0, iz = codecArray.length; i < iz; ++i) {
        var codec = codecArray[i].trim();

        if (/mp4a/.test(codec)) {
            return AACProfile.getProfile(codec);
        }
    }
    return "";
}

return test.run();

})(GLOBAL);

