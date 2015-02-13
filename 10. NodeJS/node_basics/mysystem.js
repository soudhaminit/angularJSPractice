var os=require('os');

var message='Some info of your system';

var sysarray=new Array('Type : '+os.type(),
                      'Node Version : '+process.version,
                      'Platform : '+os.platform(),
                      'Hostname : '+os.hostname(),
                      'Free Memory : '+os.freemem(),
                      'Total Memory : '+os.totalmem(),
                       'Uptime : '+os.uptime());


console.log(message);

for(var i=0;i<sysarray.length;i++){
console.log(sysarray[i]);
}