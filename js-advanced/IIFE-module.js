/*

Use an IIFE to Create a ModulePassed
An immediately invoked function expression (IIFE) is often used to
group related functionality into a single object or module. 

*/


const motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})();


//
motionModule.glideMixin(duck);
duck.glide();


