leaflet-timer
=============

Fire an 'updatetime' event at a specified interval to notify layers to update

## Usage
```javascript
var map = L.map('map', {
  layers: [...],
  timer: 300000  // seconds
});
```

The timer will automatically start when the map is created. To stop/start it manually:

```javascript
map.stopTimer();
map.startTimer();
```
