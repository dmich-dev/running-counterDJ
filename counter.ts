class Counter {
    private count: number;
    private intervalId: number | null;
    private isRunning: boolean;

    constructor(startValue: number = 0) {
        this.count = startValue;
        this.intervalId = null;
        this.isRunning = false;
    }

    start(): void {
        if (this.isRunning) {
            console.log("Counter is already running!");
            return;
        }

        console.log("Starting counter...");
        this.isRunning = true;

        this.intervalId = setInterval(() => {
            this.count++;
            console.log(`Counter: ${this.count}`);
        }, 1000);
    }

    stop(): void {
        if (!this.isRunning || !this.intervalId) {
            console.log("Counter is not running!");
            return;
        }

        console.log("Stopping counter...");
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isRunning = false;
        console.log(`Final count: ${this.count}`);
    }

    reset(): void {
        const wasRunning = this.isRunning;
        if (wasRunning) {
            this.stop();
        }

        this.count = 0;
        console.log("Counter reset to 0");

        if (wasRunning) {
            this.start();
        }
    }

    getCurrentCount(): number {
        return this.count;
    }

    isCounterRunning(): boolean {
        return this.isRunning;
    }
}

const counter = new Counter();

// start the counter
counter.start();

// // make it stop after 10 seconds
// setTimeout(() => {
//     counter.stop();
// }, 10000);
