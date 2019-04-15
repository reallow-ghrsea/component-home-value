/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
    extends: "airbnb",
    "env": {
          "browser": true,
          "node": true
    },
    "plugins": [
        "react"
     ],
     "rules": {
       "react/prop-types": 0,
       "react/destructuring-assignment": 0,
       "linebreak-style": off
     }
};