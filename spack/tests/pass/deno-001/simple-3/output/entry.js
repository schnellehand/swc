function deferred() {
}
const deferred1 = deferred;
const deferred2 = deferred1;
class MuxAsyncIterator {
    constructor(){
        this.signal = deferred2();
    }
}
const deferred3 = deferred;
const MuxAsyncIterator1 = MuxAsyncIterator;
const deferred4 = deferred3;
const MuxAsyncIterator2 = MuxAsyncIterator1;
console.log(deferred4, MuxAsyncIterator2);
