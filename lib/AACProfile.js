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
     "mp4a.40.2":   "AAC-LC",       // MPEG-4 AAC-LC (Low Complexity) Profile
     "mp4a.40.5":   "HE-AAC",       // MPEG-4 HE-AAC
     "mp4a.40.29":  "HE-AAC v2",    // MPEG-4 HE-AAC v2
     "mp4a.40.34":  "MP3",          // MP3
};

// --- class / interfaces ----------------------------------
var AACProfile = {
    "getProfile":   AACProfile_getProfile, // AACProfile.getProfile(string:CodecString):ProfileString
    "repository":   "https://github.com/uupaa/AACProfile.js",
};

// --- implements ------------------------------------------
function AACProfile_getProfile(string) { // @arg CodecString - Decimal("mp4a.40.2")
                                         // @ret ProfileString - "AAC-LC" or "HE-AAC" or "MP3" or ""
//{@dev
    if (VERIFY) {
        $valid($type(string, "CodecString"), AACProfile_getProfile, "string");
    }
//}@dev

    return PROFILES[string] || "";
}

return AACProfile; // return entity

});

