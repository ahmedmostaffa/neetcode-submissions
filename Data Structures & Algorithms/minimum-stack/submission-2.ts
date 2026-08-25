class MinStack {
    private items: number[];
    private minStack: number[];

    constructor() {
        this.items = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.items.push(val);

        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        const val = this.items.pop();

        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.items[this.items.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}