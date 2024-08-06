export class Set {
  constructor() {
    this.items = {}
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  
  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }
  sizeLegacy() {
    let count = 0;
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        count++;
      }
    }
    return count;
  }

  values() {
    return Object.values(this.items);
  }
  valuesLegacy() {
    const values = [];
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        values.push(this.items[key])
      }
    }
    return values
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(v => unionSet.add(v))
    otherSet.values().forEach(v => unionSet.add(v))
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    let circularSet = otherSet.size() < this.size() ? otherSet : this;
    let compareSet = otherSet.size() >= this.size() ? otherSet : this;
    circularSet.values().forEach(v => {
      if (compareSet.has(v)) {
        intersectionSet.add(v);
      }
    })
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(v => {
      if (!otherSet.has(v)) {
        differenceSet.add(v);
      }
    })
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(v => {
      if (!otherSet.has(v)) {
        isSubset = false;
        return false;
      }
      return true;
    })
    return isSubset;
  }
}