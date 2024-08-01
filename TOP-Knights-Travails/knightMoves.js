class Queue {
  constructor() {
    this.list = [];
  }
  enqueue(val) {
    this.list.push(val);
  }
  dequeue() {
    return this.list.shift();
  }
  isEmpty() {
    return this.list.length === 0;
  }
}

class AdjacencyList {
  constructor(position, distance = Infinity, predecessor = null) {
    this.position = position;
    this.distance = distance;
    this.predecessor = predecessor;
  }
}

class knightMoves {
  minKnightMoves(start, end) {
    //check if start and end are the same
    if (start[0] === end[0] && start[1] === end[1]) return start;

    //initialize the starting vertex in adjacencyList => give it a position => give it a distance
    const startingVertex = new AdjacencyList(start, 0);

    //initialize the queue
    const queue = new Queue();
    queue.enqueue(startingVertex);

    const visited = new Set();
    visited.add(start.toString());

    while (!queue.isEmpty()) {
      let vertex = queue.dequeue();

      for (let move of this.validMoves(vertex.position)) {
        if (!visited.has(move.toString())) {
          visited.add(move.toString());
          const newVertex = new AdjacencyList(
            move,
            vertex.distance + 1,
            vertex
          );
          queue.enqueue(newVertex);
          if (move[0] === end[0] && move[1] === end[1]) {
            return this.printMoves(newVertex);
          }
        }
      }
    }
  }

  //output valid moves
  validMoves(move) {
    const [row, col] = move;
    const moves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
    const result = [];

    for (let i = 0; i < 8; i++) {
      const [newRow, newCol] = [row + moves[i][0], col + moves[i][1]];
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        result.push([newRow, newCol]);
      }
    }

    return result;
  }

  //print out the path
  printMoves(vertex) {
    const result = [];
    while (vertex) {
      result.push(vertex.position);
      vertex = vertex.predecessor;
    }
    return result.reverse();
  }
}
