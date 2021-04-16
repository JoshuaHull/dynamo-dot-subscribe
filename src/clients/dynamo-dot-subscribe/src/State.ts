import { BehaviorSubject } from 'rxjs';

export type ToKey<T> = (item: T) => string;

export class State<T> {
  private _subjects: { [key: string]: BehaviorSubject<T> | undefined };
  private _toKey: (item: T) => string;

  constructor(toKey: ToKey<T>) {
    this._subjects = {};
    this._toKey = toKey;
  }

  public getSubject(item: T): BehaviorSubject<T> | undefined {
    return this._subjects[this._toKey(item)];
  }

  public setSubject(item: T): BehaviorSubject<T> {
    const key = this._toKey(item);
    const subject = this._subjects[key];
    if (subject) {
      subject.next(item);
      return subject;
    }
    return this._subjects[key] = new BehaviorSubject(item);
  }
}
