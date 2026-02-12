self.addEventListener('install',function(e){
e.waitUntil(caches.open('relief-research').then(function(c){return c.addAll(['./']);}));
});