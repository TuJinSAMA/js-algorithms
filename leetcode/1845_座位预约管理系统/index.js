/**
 * @param {number} n
 */
var SeatManager = function (n) {
  this.seats = new Array(n).fill(0).map((_, i) => i + 1);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  return this.seats.shift();
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  for (let i = 0; i < this.seats.length; i++) {
    if (seatNumber < this.seats[i]) {
      this.seats.splice(i, 0, seatNumber);
      break;
    }
    if (i === this.seats.length - 1) this.seats.push(seatNumber);
  }
  if (this.seats.length < 1) this.seats.push(seatNumber)
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

let seatManager = new SeatManager(2);
console.log(seatManager.reserve())
console.log(seatManager.unreserve(1))
console.log(seatManager.reserve())
console.log(seatManager.reserve())
console.log(seatManager.unreserve(2))
console.log(seatManager.reserve())
console.log(seatManager.unreserve(1))
console.log(seatManager.reserve())
console.log(seatManager.unreserve(2))
console.log(seatManager.reserve())