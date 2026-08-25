class MinStack {
     private items: number[] ;
     private minStack:number[];
    constructor() {
        this.items=[];
        this.minStack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
   push(val: number): void {
        this.items.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(val, currentMin));
        }
    }
    /**
     * @return {void}
     */
    pop(): void {
        this.items.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
       return this.items[this.items.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length-1];
    }
}