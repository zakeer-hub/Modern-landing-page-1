Shery.imageEffect("#back",{style: 5, config:{
    a: {"value":1.15,"range":[0,30]},
    b: {"value":-0.92,"range":[-1,1]},

zindex: { value :-9996999, range :[-9999999,9999999]},
aspect: { value :1.54},
ignoreShapeAspect: { value :true},
shapePosition: { value :{"x":0,"y":0}},
shapeScale: { value :{"x":0.5,"y":0.5}},
shapeEdgeSoftness: { value :0,"range":[0,0.5]},
shapeRadius: { value :0, range :[0,2]},
currentScroll: { value :0},
scrollLerp: { value :0.07},
gooey: { value :true},
infiniteGooey: { value :true},
growSize: { value :4, range :[1,15]},
durationOut: { value: 1, range :[0.1,5]},
durationIn: { value: 1, range :[0.1,5]},
displaceAmount: { value :0.5},
masker: { value :true},
maskVal: { value :1.21, range :[1,5]},
scrollType: { value :0},
geoVertex: { range :[1,64], value :1},
noEffectGooey: { value :false},
onMouse: { value :1},
noise_speed: { value :1.53, range :[0,10]},
metaball: { value :0.12, range: [0,2] },
discard_threshold: { value :0.5, range :[0,1]},
antialias_threshol :{ value :0, range :[0,0.1]},
noise_height :{ value:0.5, range :[0,2]},
noise_scale :{ value :21.37, range :[0,100]}},
 gooey: true })

    var  elem = document.querySelectorAll(".elem");
    elem.forEach(function(elem){

     var h1s = elem.querySelectorAll("h1");
  var index = 0;    
  var animating = false;       
 document.querySelector("#main")
 .addEventListener("click", function(){
    if(!animating){
        animating = true;
    
    gsap.to(h1s[index],{
        top: "-=100%",
        ease: Expo.easeInOut,
         durtion: 1,
         onComplete: function(){
            gsap.set(this._targets[0], { top: "100%"});
            animating = false;
         },
    });

    index === h1s.length - 1 ? (index = 0) : index++;

    

    gsap.to(h1s[index],{
        top: "-=100%",
        ease: Expo.easeInOut,
         durtion: 1,
    });
    };

 });
});