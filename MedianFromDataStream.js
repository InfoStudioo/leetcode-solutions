/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, 
and the median is the mean of the two middle values.
For example, for [2,3,4], the median is 3.
*/

// Heap class (MinHeap / MaxHeap)
class Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
    }

    push(val) {
        this.data.push(val);
        this._bubbleUp();
    }

    pop() {
        const top = this.peek();
        const bottom = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = bottom;
            this._bubbleDown();
        }
        return top;
    }

    _bubbleUp() {
        let idx = this.size() - 1;
        const item = this.data[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.compare(item, this.data[parentIdx])) {
                this.data[idx] = this.data[parentIdx];
                idx = parentIdx;
            } else break;
        }
        this.data[idx] = item;
    }

    _bubbleDown() {
        let idx = 0;
        const length = this.size();
        const item = this.data[0];

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let swapIdx = idx;

            if (left < length && this.compare(this.data[left], this.data[swapIdx])) {
                swapIdx = left;
            }

            if (right < length && this.compare(this.data[right], this.data[swapIdx])) {
                swapIdx = right;
            }

            if (swapIdx === idx) break;

            this.data[idx] = this.data[swapIdx];
            idx = swapIdx;
        }

        this.data[idx] = item;
    }
}

// Main MedianFinder class
class MedianFinder {
    constructor() {
        // MaxHeap for lower half
        this.left = new Heap((a, b) => a > b);
        // MinHeap for upper half
        this.right = new Heap((a, b) => a < b);
    }

    addNum(num) {
        if (this.left.size() === 0 || num <= this.left.peek()) {
            this.left.push(num);
        } else {
            this.right.push(num);
        }

        // Balance heaps
        if (this.left.size() > this.right.size() + 1) {
            this.right.push(this.left.pop());
        } else if (this.right.size() > this.left.size()) {
            this.left.push(this.right.pop());
        }
    }

    findMedian() {
        if (this.left.size() === this.right.size()) {
            return (this.left.peek() + this.right.peek()) / 2;
        } else {
            return this.left.peek();
        }
    }
}


//------ Test Code---------------

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Should print 1.5

mf.addNum(3);
console.log(mf.findMedian()); // Should print 2
