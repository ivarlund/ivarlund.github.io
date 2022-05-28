// import * as _ from 'lodash';

export function getValue(texts, key) {
    return texts[key] ? texts[key] : 'MISSING STRING';
}

export function getText(texts, searchKey) {
    let keys = searchKey;
    let key = searchKey;
    let value;

    if (key.includes('.')) {
        keys = key.split('.');
        key = keys[0];
        value = getValue(texts, key);
    }

    for (let i = 1; i < keys.length; i++) {
        value = getValue(value, keys[i]);
    }
    return value;
}
