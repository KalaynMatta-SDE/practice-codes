/*Designing the Stop Watch*/

function StopWatch() {
  let startTime,
    endTime,
    duration,
    startFlag = false,
    seconds = 0;

  Object.defineProperty(this, "duration", {
    set: function (value) {
      duration = value;
    },
    get: function () {
      return duration;
    },
  });

  Object.defineProperty(this, "startTime", {
    set: function (value) {
      startTime = value;
    },
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, "startFlag", {
    set: function (value) {
      startFlag = value;
    },
    get: function () {
      return startFlag;
    },
  });

  Object.defineProperty(this, "seconds", {
    set: function (value) {
      seconds = value;
    },
    get: function () {
      return seconds;
    },
  });

  Object.defineProperty(this, "endTime", {
    set: function (value) {
      endTime = value;
    },
    get: function () {
      return endTime;
    },
  });
}

StopWatch.prototype.startWatch = function () {
  if (this.startFlag) throw new Error("StopWatch has been started!....");
  this.startTime = new Date();
  this.startFlag = true;
};

StopWatch.prototype.stopWatch = function () {
  if (!this.startFlag) throw new Error("StopWatch has been stoped!....");
  this.endTime = new Date();
  this.startFlag = false;
  let getSeconds = this.endTime.getTime() - this.startTime.getTime();
  this.duration = getSeconds / 1000;
  this.seconds = this.seconds + this.duration;
};

StopWatch.resetDuration = function () {
  this.seconds = 0;
  this.startFlag = false;
  this.duration = 0;
};

let Timer = new StopWatch();
