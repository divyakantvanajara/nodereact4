var converter = {
    toKB:function(bytes){
        let kb = bytes * 1024;
        return kb ;
    },
    toMB:function(bytes){
        let mb = bytes * 1024 * 1024 ;
        return mb ;
    },
    toGB:function(bytes){
        let gb = bytes * 1024 *1024 *1024  ;
        return gb ;
    }
};
module.exports = converter;