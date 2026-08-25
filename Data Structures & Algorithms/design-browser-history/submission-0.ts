class BrowserStack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

class BrowserHistory {
  private backStack: BrowserStack<string>;
  private forwardStack: BrowserStack<string>;
  private current: string;

  constructor(homepage: string) {
    this.current = homepage;
    this.backStack = new BrowserStack<string>();
    this.forwardStack = new BrowserStack<string>();
  }

  visit(url: string): void {
    // Current page becomes a page we can go back to
    this.backStack.push(this.current);

    // New page becomes current
    this.current = url;

    // Can't go forward after visiting a new page
    this.forwardStack.clear();
  }

  back(steps: number): string {
    const maxSteps = Math.min(steps, this.backStack.size());

    for (let i = 0; i < maxSteps; i++) {
      this.forwardStack.push(this.current);
      this.current = this.backStack.pop()!;
    }

    return this.current;
  }

  forward(steps: number): string {
    const maxSteps = Math.min(steps, this.forwardStack.size());

    for (let i = 0; i < maxSteps; i++) {
      this.backStack.push(this.current);
      this.current = this.forwardStack.pop()!;
    }

    return this.current;
  }
}