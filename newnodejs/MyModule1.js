function toDollar(rupees)
{
    let dollar = rupees * 0.012 ;
    return dollar;
}
function toPound(rupess)
{
    let pound = rupess * 0.0096;
    return pound;
}
function toYen(rupees)
{
    let yen = rupees * 1.69 ;
    return yen ;
}

module.exports.toDollar = toDollar ;
module.exports.toPound = toPound ;
module.exports.toYen = toYen;