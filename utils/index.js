const _toString = Object.prototype.toString;

export function noop() {}

export function isString(v) {
    return typeof v === "string";
}

export function isFunction(v) {
    return typeof v === "function";
}

export function isPlainObject(obj) {
    return _toString.call(obj) === "[object Object]";
}

export function isArray(v) {
    return Array.isArray(v);
}

export function toBoolean(v) {
    return !!v;
}

export const toNum = (num = 0) => {
    const pr = parseFloat(num);
    return isNaN(pr) ? 0 : pr;
};