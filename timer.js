// Fire an 'updatetime' event at the specified interval
// L.map('map', {layers: [...], timer: 300000})
//
L.Map.addInitHook(function() {
  if (this.options.timer) {
    var map = this;
    
    map.startTimer = function() {
      var now = Date.now(), update = function() { map.fire('updatelayer'); };
      map.stopTimer();
      map.timer = setInterval(update, map.options.timer);
      if (map.lastUpdate && (now - map.lastUpdate > map.options.timer)) update();
      map.lastUpdate = now;
    };
    
    map.stopTimer = function() {
      if (map.timer) clearInterval(map.timer);
    };
  }
});
