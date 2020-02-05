class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    return this.queue;
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    return this.queue;
  }
}

const queue = new Queue();
console.log(queue.enqueue('Iron man')); 
console.log(queue.enqueue('Spider Man')); 
console.log(queue.enqueue('Hulk')); 
console.log(queue.dequeue()); 
console.log(queue.peek()); 
console.log(queue.isEmpty()); 
console.log(queue.print()); 