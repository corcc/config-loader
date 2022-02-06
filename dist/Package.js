"use strict";
module.exports = {
    scripts: {
        build: {
            tsc: 'tsc',
            dist: 'tsc'
        },
        'lint:fix': 'eslint --fix --ext .ts,.tsx .',
        lint: 'eslint'
    }
};
