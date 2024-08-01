function LinkedList() {
  return {
    head: null,
    toString: function () {
      let result = "";
      let currentNode = this.head;

      while (currentNode !== null) {
        result += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      result += "null";
      console.log(result);
    },
    append: function (value, currentNode = this.head) {
      if (this.head === null) {
        this.head = Node(value);
        return;
      }
      if (currentNode.nextNode == null) {
        currentNode.nextNode = Node(value);
      } else {
        this.append(value, currentNode.nextNode);
      }
    },
    prepend: function (value) {
      const newNode = Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
    },
    size: function () {
      let count = 0;
      let currentNode = this.head;
      while (currentNode !== null) {
        count++;
        currentNode = currentNode.nextNode;
      }
      console.log(count);
      return count;
    },
    tail: function () {
      let currentNode = this.head;
      if (currentNode === null) {
        return null;
      }
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      console.log(currentNode.value);
      return currentNode;
    },
    at: function (index) {
      let count = 0;
      let currentNode = this.head;
      while (currentNode !== null) {
        if (count === index) {
          console.log(currentNode.value);
          return currentNode.value;
        }
        currentNode = currentNode.nextNode;
        count++;
      }
      console.log("Index out of bounds");
      return null;
    },
    pop: function () {
      if (this.head === null) {
        return;
      }
      if (this.head.nextNode === null) {
        this.head = null;
        return;
      }
      let currentNode = this.head;
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
    },
    contains: function (value) {
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          console.log(true);
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      console.log(false);
      return false;
    },
    find: function (value) {
      let currentNode = this.head;
      let index = 0;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          console.log(index);
          return index;
        }
        currentNode = currentNode.nextNode;
        index++;
      }
      console.log(null);
      return null;
    },
    insert: function (value, index) {
      if (index === 0) {
        this.prepend(value);
        return;
      }

      let currentIndex = 0;
      let currentNode = this.head;
      let prevNode = null;

      while (currentNode !== null) {
        if (currentIndex === index) {
          const newNode = Node(value);
          newNode.nextNode = currentNode;
          if (prevNode !== null) {
            prevNode.nextNode = newNode;
          }
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
        currentIndex++;
      }

      if (currentIndex === index) {
        this.append(value);
      }
    },
    remove: function (index) {
      if (index === 0 && this.head !== null) {
        this.head = this.head.nextNode;
        return;
      }

      let currentIndex = 0;
      let currentNode = this.head;
      let prevNode = null;

      while (currentNode !== null) {
        if (currentIndex === index) {
          if (prevNode !== null) {
            prevNode.nextNode = currentNode.nextNode;
          }
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
        currentIndex++;
      }
    },
  };
}

const Node = (value) => {
  return {
    value: value,
    nextNode: null,
  };
};
