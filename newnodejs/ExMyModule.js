var converter = {
    toFoot:function(inches){
        let foot = inches * 12 ;
        return foot ;
    },
    toMeter:function(inches){
        let meter = inches * 39.3701 ;
        return meter ;
    },
    toMile:function(inches){
        let mile = inches * 63360 ;
        return mile ;
    }
};
module.exports = converter;