import { BehaviorSubject } from 'rxjs';
export declare type ToKey<T> = (item: T) => string;
export declare class State<T> {
    private _subjects;
    private _toKey;
    constructor(toKey: ToKey<T>);
    getSubject(item: T): BehaviorSubject<T> | undefined;
    setSubject(item: T): BehaviorSubject<T>;
}
