

let btn = document.getElementById('btn');
let text;
  btn.onclick = function (){
    
    text = document.getElementById("text").value; 
  };   
    
var Ping = function(a) {
    this.opt = a || {};
    
    this.favicon = this.opt.favicon ||/* "/favicon.ico" */text;
    this.timeout = this.opt.timeout || 1000;
console.log(this.opt);
  
};


Ping.prototype.ping = function(a, b) {
    function c(a) {
        d && clearTimeout(d);
        var c = new Date - e;
        if ("function" == typeof b) return "error" === a.type ? (console.log(/*"error loading resource"*/text), b("error", c)) : b(null, c)
    }
    this.img = new Image;
    var d, e = new Date;
    this.img.onload = c;
    this.img.onerror = c;
    this.timeout && (d = setTimeout(c, this.timeout));
    this.img.src = a + this.favicon + "?" + +new Date
};
`${text}` != typeof exports ? `${text}` != typeof module && module.exports && (module.exports = Ping) : window.Ping = Ping;

// batas ping
var b = 1;
setInterval(function(){
var p = new Ping();
console.log(p)
  b++
    p.ping(/*"http://google.com"*//*source*/text, function(err, data) 
    {
     document.getElementById("ping").innerHTML = 'Delay time (Ping): <strong>'+data+'</strong> ms'; 
     
    document.getElementById("status").innerHTML = b;
     
     if (data <= 50){
      
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> Null</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>0%</strong>'; 
       
     }else if (data <= 100){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> XLarge</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>10%</strong>'; 
       
     }else if (data <= 500){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> Large</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>25%</strong>'; 
       
     }else if (data <= 1000){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> Medium</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>50%</strong>'; 
       
     }else if (data <= 1500){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> Small</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>75%</strong>'; 
       
     }else if (data >= 1500){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> XSmall</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>90%</strong>'; 
       
     }
      
      
      if (data<2000&&data>=50) {
        
        document.getElementById("status").innerHTML = 'Status: <strong>Online</strong>';
        
      }else{
     
     document.getElementById("status").innerHTML = 'Status: <strong>Offline</strong>';
     
      }
})
},1000)
