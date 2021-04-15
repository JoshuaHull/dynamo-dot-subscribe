import { BehaviorSubject } from 'rxjs';

export type ToKey<T> = (item: T) => string;

export class State<T> {
  private _subjects: { [key: string]: BehaviorSubject<T> };
  private _toKey: (item: T) => string;

  constructor(toKey: ToKey<T>) {
    this._subjects = {};
    this._toKey = toKey;
  }

  public getItem(item: T): BehaviorSubject<T | undefined> {
    return this._subjects[this._toKey(item)] || new BehaviorSubject<T>(undefined);
  }

  public putItem(item: T): BehaviorSubject<T> {
    const key = this._toKey(item);
    let subject = this._subjects[key];

    if (subject)
      subject.next(item);
    else
      subject = this._subjects[key] = new BehaviorSubject(item);

    return subject;
  }
}
