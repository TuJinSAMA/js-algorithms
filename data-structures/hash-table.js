import { defaultToString } from "./util.js";

export class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  hashCode(key) {
    return this.loseLoseHashCode(key);
  }
  loseLoseHashCode(key) {
    if (typeof key === 'number') return key;
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  remove(key) {
    const position = this.hashCode(key);
    const valuePair = this.table[position]
    if (valuePair != null) {
      delete this.table[position];
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
}