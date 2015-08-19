'use strict';
//concat config

var fs = require('fs'),
    srcFiles = [
            'src/scss/settings/*.scss',
            'src/scss/functions/*.scss',
            'src/scss/helpers/*.scss',
            'src/scss/grid/*.scss'
    ],
    processFunc = function(src, filepath) {
        src = src.replace(/(^|\n)[ \t]*(@charset "UTF-8";|@charset 'UTF-8';);?\s*/g, '$1');
        src = src.replace(/(^|\n)[ \t]*(@import ([^)]*)\;);?\s*/g, '');

        return src;
    };

module.exports = {
    dist: {
        options: {
            // Replace all 'use strict' statements in the code with a single one at the top
            banner: fs.readFileSync('./banner.txt', 'utf8'),
            process: processFunc
        },
        src: srcFiles,
        dest: 'dist/_ivory.scss',
    },
    test: {
        options: {
            // Replace all 'use strict' statements in the code with a single one at the top
            banner: fs.readFileSync('./banner.txt', 'utf8'),
            process: processFunc
        },
        src: [
            'node_modules/growcss-sass-config-manager/dist/*.scss',
            'node_modules/include-media/dist/*.scss'
        ].concat(srcFiles),
        dest: 'tests/specs/_ivory.scss',
    }
};
