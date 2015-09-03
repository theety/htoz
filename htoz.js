function htoz (src) {
        // no fullwidth SPACE                                                        
        // 0x21 -> 0xFF01, ...                                                       
        // 0x7E -> 0xFF5E                                                            
        // no fullwidth DEL                                                          

        var dst = new Array(src.length), // result                                   
            code = 0x41;                 // integer                                  

        for (var index in src) {
                // 0x21-0x7E                                                         
                code = src.charCodeAt(index);
                if (0x21 > code ||
                    0x7E < code) {
                        // pass                                                      
                        dst[index] = src[index];
                } else {
                        // 0xFF01-0XFF5E                                             
                        code += 0xFEE0;
                        // fullwidth char                                            
                        dst[index] = String.fromCharCode(code);
                }
        }
        return dst.join('');
}

function ztoh (src) {
        var dst = new Array(src.length), // result                                   
            code = 0xFF21;               // integer                                  

        for (var index in src) {
                // 0xFF01-0xFF5E                                                     
                code = src.charCodeAt(index);
                if (0xFF01 > code ||
                    0xFF5E < code) {
                        // pass                                                      
                        dst[index] = src[index];
                } else {
                        // 0x21-0x7E                                                 
                        code -= 0xFEE0;
                        // fullwidth char                                            
                        dst[index] = String.fromCharCode(code);
                }
        }
        return dst.join('');
}
