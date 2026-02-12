self.addEventListener('install',function(e){
e.waitUntil(caches.open('relief-v3').then(function(c){return c.addAll(['./']);}));
});