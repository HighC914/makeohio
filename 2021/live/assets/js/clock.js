initializeClock('countdown');

function getTimeRemaining(){
  var makingStarts = "2020-02-29T11:00:00-05:00";
  var makingEnds = "2020-03-01T11:00:00-05:00";
  var time;

  if (Date.parse(makingStarts) - Date.parse(new Date()) > 0) {
    time = makingStarts;
  } else {
    time = makingEnds;
  }
  var t = Date.parse(time) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) );

  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id){


    var clock = document.getElementById(id);
    clock.innerHTML = '<div><span class="hours time"></span><div class="time-label">hours</div></div>'
        + '<div><span class="minutes time"></span><div class="time-label">minutes</div></div>'
        + '<div><span class="seconds time"></span><div class="time-label">seconds</div></div>';

    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
        var t = getTimeRemaining();
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if(t.total<=0){
            clearInterval(timeInterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeInterval = setInterval(updateClock,1000);
}

