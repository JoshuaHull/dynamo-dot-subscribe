"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const rxjs_1 = require("rxjs");
class State {
    constructor(toKey) {
        this._subjects = {};
        this._toKey = toKey;
    }
    getSubject(item) {
        return this._subjects[this._toKey(item)];
    }
    setSubject(item) {
        const key = this._toKey(item);
        const subject = this._subjects[key];
        if (subject) {
            subject.next(item);
            return subject;
        }
        return this._subjects[key] = new rxjs_1.BehaviorSubject(item);
    }
}
exports.State = State;
//# sourceMappingURL=State.js.map