const HashMap = () => {
  const defaultCapacity = 16;
  let capacity = defaultCapacity;
  let numItems = 0;
  let table = new Array(capacity);

  function resize() {
    const newCapacity = capacity * 2;
    const newTable = new Array(newCapacity);
    table.forEach((bucket) => {
      if (bucket) {
        bucket.forEach(([key, value]) => {
          const index = hash(key, newCapacity);
          if (index < 0 || index >= newTable.length) {
            throw new Error("Trying to access index out of bound");
          }
          if (newTable[index]) {
            newTable[index].push([key, value]);
          } else {
            newTable[index] = [[key, value]];
          }
        });
      }
    });
    table = newTable;
    capacity = newCapacity;
  }

  function hash(key, cap = capacity) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return Math.abs(hashCode) % cap;
  }

  function set(key, value) {
    const loadFactor = numItems / capacity;
    if (loadFactor > 0.75) {
      resize();
    }
    const index = hash(key);
    if (table[index]) {
      const entryIndex = table[index].findIndex((x) => x[0] === key);
      if (entryIndex !== -1) {
        table[index][entryIndex][1] = value;
      } else {
        table[index].push([key, value]);
        numItems++;
      }
    } else {
      table[index] = [[key, value]];
      numItems++;
    }
  }

  function get(key) {
    const index = hash(key);
    if (index < 0 || index >= table.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (!table[index]) return null;
    const entry = table[index].find((x) => x[0] === key);
    return entry ? entry[1] : null;
  }

  function has(key) {
    const index = hash(key);
    if (index < 0 || index >= table.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (!table[index]) return false;
    return table[index].some((x) => x[0] === key);
  }

  function remove(key) {
    const index = hash(key);
    if (index < 0 || index >= table.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (!table[index]) return null;
    const bucket = table[index];
    const entryIndex = bucket.findIndex((x) => x[0] === key);
    if (entryIndex === -1) return null;
    const entry = bucket.splice(entryIndex, 1);
    numItems--;
    return entry[0][1];
  }

  function length() {
    return numItems;
  }

  function clear() {
    capacity = defaultCapacity;
    table = new Array(capacity);
    numItems = 0;
  }

  function keys() {
    const result = [];
    table.forEach((ele) => {
      if (ele) {
        ele.forEach(([key, _]) => {
          result.push(key);
        });
      }
    });
    return result;
  }

  function value() {
    const result = [];
    table.forEach((ele) => {
      if (ele) {
        ele.forEach(([_, value]) => {
          result.push(value);
        });
      }
    });
    return result;
  }

  function entries() {
    const result = [];
    table.forEach((ele) => {
      if (ele) {
        ele.forEach(([key, values]) => {
          result.push([key, values]);
        });
      }
    });
    return result;
  }

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    value,
    entries,
  };
};
