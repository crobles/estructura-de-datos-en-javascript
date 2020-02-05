class Stack{
    constructor(){
        this.stack = {};
        this.count = 0;
    }

    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }

    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek(){
        return this.stack[this.count - 1];
    }

    size(){
        return this.count;
    }

    print(){
        console.log(this.stack);
    }
}
const stack = new Stack();
console.log(stack.size());
console.log(stack.push("cristofer"));
console.log(stack.size());
console.log(stack.peek());
console.log(stack.push("kim"));
console.log(stack.size());
stack.print();
console.log(stack.peek());
console.log(stack.pop());
stack.print();
console.log(stack.size());
console.log(stack.peek());