//export each and every function 
module.exports.toDollar =function(rupees){
        let dollar = rupees *0.012 ;
        return dollar;
}
module.exports.toPound =function(rupees){
        let pound = rupees * 0.096;
        return pound;
}
module.exports.toYen =function(rupees){
    let yen = rupees* 1.69 ;
    return yen;
}