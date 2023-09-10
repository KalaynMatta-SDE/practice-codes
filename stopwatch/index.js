/*Designing the Stop Watch*/

function StopWatch() {
  let startTime,
    endTime,
    duration,
    startFlag = false,
    stopFlag = false,
    seconds = 0;

  this.startWatch = function () {
    if (!startFlag) {
      startTime = new Date();
      startFlag = true;
    } else throw new Error("StopWatch has been started!....");
  };

  this.stopWatch = function () {
    if (startFlag) {
      endTime = new Date();
      startFlag = false;
      duration = (endTime.getTime() - startTime.getTime()) / 1000;
      seconds = seconds + duration;
    } else throw new Error("StopWatch has been stoped!....");
  };

  this.resetDuration = function () {
    seconds = 0;
    startFlag = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return seconds;
    },
  });
}

let Timer = new StopWatch();
