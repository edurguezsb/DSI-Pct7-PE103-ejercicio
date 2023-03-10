import { Disco, Single } from "./Disco";

export class Discografia {
  private _discos: Array<Disco | Single>;

  constructor(discos: Array<Disco | Single>) {
    this._discos = discos;
  }

  get discos(): Array<Disco | Single> {
    return this._discos;
  }
}
