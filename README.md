# htoz
ascii to fullwidth  
  htoz (source: string): string  
  
fullwidth to ascii  
  ztoh (srouce: string): string  
  
charset: utf8  

# 半角と全角
英数字を全角に変換  
  htoz (半角): 全角  
  
全角英数字を半角英数字に変換  
  ztoh (全角): 半角  
  
文字エンコーディング: UTF-8   

one line  
// htoz  
(function (src) { return Array.prototype.map.call(src, function (c) { var code = c.charCodeAt(0); if (0x21 <= code && code <= 0x7E) { return String.fromCharCode(code+0xFEE0); } else { return c; } }).join(''); })
('Your input')  

// ztoh  
(function (src) { return Array.prototype.map.call(src, function (c) { var code = c.charCodeAt(0); if (0xFF01 <= code && code <= 0xFF5E) { return String.fromCharCode(code-0xFEE0); } else { return c; } }).join(''); })
('Your input')
