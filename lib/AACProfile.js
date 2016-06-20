(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("AACProfile", function moduleClosure(global, WebModule, VERIFY/*, VERBOSE */) {
"use strict";

// --- technical terms / data structure --------------------
/*

- CODECS
    - https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/FrequentlyAskedQuestions/FrequentlyAskedQuestions.html

 */
// --- dependency modules ----------------------------------
// --- import / local extract functions --------------------
// --- define / local variables ----------------------------
var PROFILES = {
     "mp4a.40.2":   [ 2, "AAC-LC"],     // MPEG-4 AAC-LC (Low Complexity) Profile
     "mp4a.40.5":   [ 5, "HE-AAC"],     // MPEG-4 HE-AAC
     "mp4a.40.29":  [29, "HE-AAC v2"],  // MPEG-4 HE-AAC v2
     "mp4a.40.34":  [34, "MP3"],        // MP3
};

// --- class / interfaces ----------------------------------
var AACProfile = {
    "getProfile":           AACProfile_getProfile,          // AACProfile.getProfile(string:CodecString):ProfileString
    "getAudioObjectType":   AACProfile_getAudioObjectType,  // AACProfile.getAudioObjectType(string:CodecString):AudioObjectTypeUINT8
    "repository":           "https://github.com/uupaa/AACProfile.js",
};

// --- implements ------------------------------------------
function AACProfile_getProfile(codecString) { // @arg CodecString - "mp4a.40.2", "mp4a.40.5", "mp4a.40.29", "mp4a.40.34"
                                              // @ret ProfileString - "AAC-LC" or "HE-AAC" or "HE-AAC v2", "MP3"
//{@dev
    if (VERIFY) {
        $valid($type(codecString, "CodecString"), AACProfile_getProfile, "codecString");
    }
//}@dev

    if (codecString in PROFILES) {
        return PROFILES[codecString][1];
    }
    return "";
}

function AACProfile_getAudioObjectType(codecString) { // @arg CodecString - "mp4a.40.2", "mp4a.40.5", "mp4a.40.29", "mp4a.40.34"
                                                      // @ret AudioObjectTypeUINT8 - 2, 5, 29, 34
//{@dev
    if (VERIFY) {
        $valid($type(codecString, "CodecString"), AACProfile_getAudioObjectType, "codecString");
    }
//}@dev

    if (codecString in PROFILES) {
        return PROFILES[codecString][0];
    }
    return 0;
}

return AACProfile; // return entity

});

