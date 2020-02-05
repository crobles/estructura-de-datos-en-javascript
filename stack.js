class Stack{
    constructor(){
        this.items = {};
        this.top = 0;
    }

    push(data){
        this.top++;
        this.item[this.top] = data;
    }

    pop(){
        let deletedData;

        if (this.top) {
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        }
    }

    getSize(){
        return this.top;
    }

    isEmpty(){
        if (!this.getSize()) {
            return true;
        } else {
            return false;
        }
    }

    peek(){
        if (this.isEmpty()){
            return null;
        } else {
            return this.items[this.top];
        }
    }

    print(){
        let result = '';
        for (let i = this.top; i > 0; i--) {
            result += this.items[i] + ' ' ;
        }
        return result;
    }
}