!(function(window, undefined) {
    var class2type = {};
    (function() {
         var type_arr = 'Boolean Number String Function Array Date RegExp Object'[ _split ](' ');
        for (var i = 0, len = type_arr[ _length ]; i < len; i++) {
            class2type[ "[object " + type_arr[ i ] + "]" ] = type_arr[ i ]["toLowerCase"]();
        }
    })();

    return {
        /**
         * 获取变量类型
         * @param  {?} variable [传入变量]
         * @return {String}
         */
        type: function(variable) {
            return variable == null ? String( variable ) : class2type[ Object.prototype.toString[_apply]( variable ) ] || 'object';
        },
        /**
         * 判断变量是否为对象
         * @param  {?} variable [传入变量]
         * @return {Boolean}
         */
        isObject: function(variable) {
            return  'object' == type(variable);
        },
        /**
         * 判断变量是否为数组
         * @param  {?} variable [传入变量]
         * @return {Boolean}
         */
        isArray: function(variable) {
            return  'array' == type(variable);
        },
        /**
         * 判断变量是否为字符串
         * @param  {?} variable [传入变量]
         * @return {Boolean}
         */
        isString: function(variable) {
            return 'string' == type(variable);
        },
        /**
         * 判断变量是否为数字
         * @param  {?} variable [传入变量]
         * @return {Boolean}
         */
        isNumber: function(variable) {
            return !isNaN(parseFloat(variable)) && isFinite(variable);
        },
        /**
         * 判断变量是否为函数
         * @param  {?} variable [传入变量]
         * @return {Boolean}
         */
        isFunction: function(variable) {
            return 'function' == type(variable);
        },
        /**
         * 判断是不是一个合格的id
         */
        isID: function(variable) {
            if (id === '0' || id === 0) {
                return true;
            }
            return (/^[1-9]\d*$/).test(id);
        },
        ucFirst: function(str) {
            str += '';
            var f = str.charAt(0).toUpperCase();
            return f + str.substr(1);
        },
        trim: function(str, charlist) {
            var whitespace, l = 0,
                i = 0;
            str += '';

            if (!charlist) {
                whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
            } else {
                charlist += '';
                whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            }

            l = str.length;
            for (i = 0; i < l; i++) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(i);
                    break;
                }
            }

            l = str.length;
            for (i = l - 1; i >= 0; i--) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(0, i + 1);
                    break;
                }
            }

            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
        },
        ltrim: function(str, charlist) {
            charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            var re = new RegExp('^[' + charlist + ']+', 'g');
            return (str + '').replace(re, '');
        },
        rtrim: function() {
            charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
            var re = new RegExp('[' + charlist + ']+$', 'g');
            return (str + '').replace(re, '');
        },
        repeat: function(input, multiplier) {
            var y = '';
            while (true) {
                if (multiplier & 1) {
                    y += input;
                }
                multiplier >>= 1;
                if (multiplier) {
                    input += input;
                } else {
                    break;
                }
            }
            return y;
        },
        pad: function(input, pad_length, pad_string, pad_type) {
            var half = '',
                pad_to_go;

            var str_pad_repeater = function(s, len) {
                var collect = '',
                    i;

                while (collect.length < len) {
                    collect += s;
                }
                collect = collect.substr(0, len);

                return collect;
            };

            input += '';
            pad_string = pad_string !== undefined ? pad_string : ' ';

            if (pad_type !== 'STR_PAD_LEFT' && pad_type !== 'STR_PAD_RIGHT' && pad_type !== 'STR_PAD_BOTH') {
                pad_type = 'STR_PAD_RIGHT';
            }
            if ((pad_to_go = pad_length - input.length) > 0) {
                if (pad_type === 'STR_PAD_LEFT') {
                    input = str_pad_repeater(pad_string, pad_to_go) + input;
                } else if (pad_type === 'STR_PAD_RIGHT') {
                    input = input + str_pad_repeater(pad_string, pad_to_go);
                } else if (pad_type === 'STR_PAD_BOTH') {
                    half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
                    input = half + input + half;
                    input = input.substr(0, pad_length);
                }
            }

            return input;
        },
        /**
         * 字符串是否以某字符开头
         * @param  {String}  str      [要检测的字符]
         * @param  {String}  startStr [包含的字符]
         * @return {Boolean}
         */
        startsWidth: function(str, startStr) {
            str += "";
            startStr += "";
            return str.length !== 0 &&　startStr.length !== 0 && str.indexOf(startStr) === 0;
        },
        /**
         * 字符串是否以某字符结尾
         * @param  {String}  str      [要检测的字符]
         * @param  {String}  startStr [包含的字符]
         * @return {Boolean}
         */
        endsWidth: function() {
            str += "";
            endStr += "";
            return str.length !== 0 && endStr.length !== 0 && str.lastIndexOf(endStr) + endStr.length === str.length;
        },
        contain: function() {

        },
        quote: function() {
            var pattern = /["\\\x00-\x1f\x7f-\x9f]/g,
                replacement = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                };

            return str.match(pattern) ? '"' + str.replace(pattern, function(mode) {
                var toStr = replacement[mode];
                if ("string" === typeof toStr) {
                    return toStr;
                }
                toStr = mode.charCodeAt();
                return "\\u00" + Math.floor(pattern / 16).toString(16) + (pattern % 16).toString(16)
            }) + '"' : '"' + str + '"';
        },
        quotemeta: function(str) {
            return (str + '').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g, '\\$1');
        },
        sprintf: function() {
            for (var a = 0, c, b = arguments[a++], e = [], d, h, j; b; ) {
                if (d = /^[^\x25]+/.exec(b))
                    e.push(d[0]);
                else if (d = /^\x25{2}/.exec(b))
                    e.push("%");
                else if (d = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)) {
                    if (null == (c = arguments[d[1] || a++]) || void 0 == c)
                        throw "Too few arguments.";
                    if (/[^s]/.test(d[7]) && "number" != typeof c)
                        throw "Expecting number but found " + typeof c;
                    switch (d[7]) {
                        case "b":
                            c = c.toString(2);
                            break;
                        case "c":
                            c = String.fromCharCode(c);
                            break;
                        case "d":
                            c = parseInt(c);
                            break;
                        case "e":
                            c = d[6] ? c.toExponential(d[6]) : c.toExponential();
                            break;
                        case "f":
                            c = d[6] ? parseFloat(c).toFixed(d[6]) : parseFloat(c);
                            break;
                        case "o":
                            c = c.toString(8);
                            break;
                        case "s":
                            c = (c = String(c)) && d[6] ? c.substring(0, d[6]) : c;
                            break;
                        case "u":
                            c = Math.abs(c);
                            break;
                        case "x":
                            c = c.toString(16);
                            break;
                        case "X":
                            c = c.toString(16).toUpperCase()
                    }
                    c = /[def]/.test(d[7]) && d[2] && 0 <= c ? "+" + c : c;
                    h = d[3] ? "0" == d[3] ? "0" : d[3].charAt(1) : " ";
                    j = d[5] - String(c).length - 0;
                    h = d[5] ? str_repeat(h, j) : "";
                    e.push("" + (d[4] ? c + h : h + c))
                } else
                    throw "Huh ?!";
                b = b.substring(d[0].length)
            }
            return e.join("")
        },
        addslashes: function() {
            return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
        },
        stripslashes: function(str) {
            return (str + '').replace(/\\(.?)/g, function(s, n1) {
                switch (n1) {
                    case '\\':
                        return '\\';
                    case '0':
                        return '\u0000';
                    case '':
                        return '';
                    default:
                        return n1;
                }
            });
        },
        strip_tags: function(input, allowed) {
            allowed = (((allowed || '') + '')
                .toLowerCase()
                .match(/<[a-z][a-z0-9]*>/g) || [])
                .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return input.replace(commentsAndPhpTags, '').replace(tags, function($0, $1) {
                return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
        },
        htmlspecialchars: function(string, quote_style, charset, double_encode) {
            var optTemp = 0,
                i = 0,
                noquotes = false;
            if (typeof quote_style === 'undefined' || quote_style === null) {
                quote_style = 2;
            }
            string = string.toString();
            if (double_encode !== false) { // Put this first to avoid double-encoding
                string = string.replace(/&/g, '&amp;');
            }
            string = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');

            var OPTS = {
                'ENT_NOQUOTES': 0,
                'ENT_HTML_QUOTE_SINGLE': 1,
                'ENT_HTML_QUOTE_DOUBLE': 2,
                'ENT_COMPAT': 2,
                'ENT_QUOTES': 3,
                'ENT_IGNORE': 4
            };
            if (quote_style === 0) {
                noquotes = true;
            }
            if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
                quote_style = [].concat(quote_style);
                for (i = 0; i < quote_style.length; i++) {
                    // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
                    if (OPTS[quote_style[i]] === 0) {
                        noquotes = true;
                    } else if (OPTS[quote_style[i]]) {
                        optTemp = optTemp | OPTS[quote_style[i]];
                    }
                }
                quote_style = optTemp;
            }
            if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
                string = string.replace(/'/g, '&#039;');
            }
            if (!noquotes) {
                string = string.replace(/"/g, '&quot;');
            }

            return string;
        },
        htmlspecialchars_decode: function(string, quote_style) {
            var optTemp = 0,
                i = 0,
                noquotes = false;
            if (typeof quote_style === 'undefined') {
                quote_style = 2;
            }
            string = string.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            var OPTS = {
                'ENT_NOQUOTES': 0,
                'ENT_HTML_QUOTE_SINGLE': 1,
                'ENT_HTML_QUOTE_DOUBLE': 2,
                'ENT_COMPAT': 2,
                'ENT_QUOTES': 3,
                'ENT_IGNORE': 4
            };
            if (quote_style === 0) {
                noquotes = true;
            }
            if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
                quote_style = [].concat(quote_style);
                for (i = 0; i < quote_style.length; i++) {
                    // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
                    if (OPTS[quote_style[i]] === 0) {
                        noquotes = true;
                    } else if (OPTS[quote_style[i]]) {
                        optTemp = optTemp | OPTS[quote_style[i]];
                    }
                }
                quote_style = optTemp;
            }
            if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
                string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
                // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
            }
            if (!noquotes) {
                string = string.replace(/&quot;/g, '"');
            }
            // Put this in last place to avoid escape being double-decoded
            string = string.replace(/&amp;/g, '&');

            return string;
        },
        nl2br: function(str, is_xhtml) {
            var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display

            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        },
        md5: function(str) {
            var xl;

            var rotateLeft = function(lValue, iShiftBits) {
                return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
            };

            var addUnsigned = function(lX, lY) {
                var lX4, lY4, lX8, lY8, lResult;
                lX8 = (lX & 0x80000000);
                lY8 = (lY & 0x80000000);
                lX4 = (lX & 0x40000000);
                lY4 = (lY & 0x40000000);
                lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
                if (lX4 & lY4) {
                    return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                }
                if (lX4 | lY4) {
                    if (lResult & 0x40000000) {
                        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                    } else {
                        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                    }
                } else {
                    return (lResult ^ lX8 ^ lY8);
                }
            };

            var _F = function(x, y, z) {
                return (x & y) | ((~x) & z);
            };
            var _G = function(x, y, z) {
                return (x & z) | (y & (~z));
            };
            var _H = function(x, y, z) {
                return (x ^ y ^ z);
            };
            var _I = function(x, y, z) {
                return (y ^ (x | (~z)));
            };

            var _FF = function(a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            };

            var _GG = function(a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            };

            var _HH = function(a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            };

            var _II = function(a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            };

            var convertToWordArray = function(str) {
                var lWordCount;
                var lMessageLength = str.length;
                var lNumberOfWords_temp1 = lMessageLength + 8;
                var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
                var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
                var lWordArray = new Array(lNumberOfWords - 1);
                var lBytePosition = 0;
                var lByteCount = 0;
                while (lByteCount < lMessageLength) {
                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
                    lByteCount++;
                }
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                return lWordArray;
            };

            var wordToHex = function(lValue) {
                var wordToHexValue = '',
                    wordToHexValue_temp = '',
                    lByte, lCount;
                for (lCount = 0; lCount <= 3; lCount++) {
                    lByte = (lValue >>> (lCount * 8)) & 255;
                    wordToHexValue_temp = '0' + lByte.toString(16);
                    wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
                }
                return wordToHexValue;
            };

            var x = [],
                k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
                S12 = 12,
                S13 = 17,
                S14 = 22,
                S21 = 5,
                S22 = 9,
                S23 = 14,
                S24 = 20,
                S31 = 4,
                S32 = 11,
                S33 = 16,
                S34 = 23,
                S41 = 6,
                S42 = 10,
                S43 = 15,
                S44 = 21;

            str = this.utf8_encode(str);
            x = convertToWordArray(str);
            a = 0x67452301;
            b = 0xEFCDAB89;
            c = 0x98BADCFE;
            d = 0x10325476;

            xl = x.length;
            for (k = 0; k < xl; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
                c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
                d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
                b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                a = addUnsigned(a, AA);
                b = addUnsigned(b, BB);
                c = addUnsigned(c, CC);
                d = addUnsigned(d, DD);
            }

            var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);

            return temp.toLowerCase();
        },
        sha1: function(str) {

            var rotate_left = function(n, s) {
                var t4 = (n << s) | (n >>> (32 - s));
                return t4;
            };

            var cvt_hex = function(val) {
                var str = '';
                var i;
                var v;

                for (i = 7; i >= 0; i--) {
                    v = (val >>> (i * 4)) & 0x0f;
                    str += v.toString(16);
                }
                return str;
            };

            var blockstart;
            var i, j;
            var W = new Array(80);
            var H0 = 0x67452301;
            var H1 = 0xEFCDAB89;
            var H2 = 0x98BADCFE;
            var H3 = 0x10325476;
            var H4 = 0xC3D2E1F0;
            var A, B, C, D, E;
            var temp;

            str = this.utf8_encode(str);
            var str_len = str.length;

            var word_array = [];
            for (i = 0; i < str_len - 3; i += 4) {
                j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
                word_array.push(j);
            }

            switch (str_len % 4) {
                case 0:
                    i = 0x080000000;
                    break;
                case 1:
                    i = str.charCodeAt(str_len - 1) << 24 | 0x0800000;
                    break;
                case 2:
                    i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000;
                    break;
                case 3:
                    i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) <<
                        8 | 0x80;
                    break;
            }

            word_array.push(i);

            while ((word_array.length % 16) != 14) {
                word_array.push(0);
            }

            word_array.push(str_len >>> 29);
            word_array.push((str_len << 3) & 0x0ffffffff);

            for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
                for (i = 0; i < 16; i++) {
                    W[i] = word_array[blockstart + i];
                }
                for (i = 16; i <= 79; i++) {
                    W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
                }

                A = H0;
                B = H1;
                C = H2;
                D = H3;
                E = H4;

                for (i = 0; i <= 19; i++) {
                    temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp;
                }

                for (i = 20; i <= 39; i++) {
                    temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp;
                }

                for (i = 40; i <= 59; i++) {
                    temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp;
                }

                for (i = 60; i <= 79; i++) {
                    temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp;
                }

                H0 = (H0 + A) & 0x0ffffffff;
                H1 = (H1 + B) & 0x0ffffffff;
                H2 = (H2 + C) & 0x0ffffffff;
                H3 = (H3 + D) & 0x0ffffffff;
                H4 = (H4 + E) & 0x0ffffffff;
            }

            temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
            return temp.toLowerCase();
        },
        rot13: function(str) {
            return (str + '').replace(/[a-z]/gi, function(s) {
                return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
            });
        },
        /**
         * hash函数
         * @param  {String} str [需要转为hash的字符串]
         * @return {Number}     [转换后的hash值]
         */
        hash: function(str) {
            var _hash = 1,
                charCode = 0,
                idx;
            if (isStr(str) && str.length) {
                _hash = 0;
                for (idx = str.length - 1; idx >= 0; idx--) {
                    charCode = str.charCodeAt(idx);
                    _hash = (_hash << 6 & 268435455) + charCode + (charCode << 14);
                    charCode = _hash & 266338304;
                    _hash = charCode !== 0 ? _hash ^ charCode >> 21 : _hash;
                }
            }
            return _hash;
        },
        /**
         * 获取随机整数
         * @return {Int}
         */
        random: function() {
            /**
             * 2,147,483,647（二十一亿四千七百四十八万三千六百四十七）是2147483646与2147483648之间的自然数，
             * 也是欧拉在1772年所发现的一个梅森素数，它等于2^31 -1，是32位操作系统中最大的符号型整型常量。
             */
            return Math.round(Math.random() * 2147483647);
        },
        /**
         * 构造浏览器客户端唯一标示uuid
         * @return {Number}
         */
        uuid: function() {
            var _history_length = history.length,
                _javaEnabled = navigator && navigator.javaEnabled() ? 1 : 0,
                _colorDepth = screen ? screen.colorDepth + "-bit" : "",
                _screen = screen ? screen.width + "x" + screen.height : "",
                _language = (navigator && navigator.language ? navigator.language : navigator && navigator.browserLanguage ? navigator.browserLanguage : "").toLowerCase();
                _navStr = navigator.appName + navigator.version + _language + navigator.platform + navigator.userAgent + _javaEnabled + _screen + _colorDepth + (document.cookie ? document.cookie : "") + (document.referrer ? document.referrer : "");
            for (var len = _navStr.length; _history_length > 0;) {
                _navStr += _history_length-- ^ len++;
            }
            return this.random() ^ this.hash(_navStr) & 2147483647;
        },
        inArray: function(needle, haystack, argStrict) {
            //  discuss at: http://phpjs.org/functions/in_array/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: vlado houba
            // improved by: Jonas Sciangula Street (Joni2Back)
            //    input by: Billy
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
            //   returns 1: true
            //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
            //   returns 2: false
            //   example 3: in_array(1, ['1', '2', '3']);
            //   example 3: in_array(1, ['1', '2', '3'], false);
            //   returns 3: true
            //   returns 3: true
            //   example 4: in_array(1, ['1', '2', '3'], true);
            //   returns 4: false

            var key = '',
                strict = !!argStrict;

            //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
            //in just one for, in order to improve the performance
            //deciding wich type of comparation will do before walk array
            if (strict) {
                for (key in haystack) {
                    if (haystack[key] === needle) {
                        return true;
                    }
                }
            } else {
                for (key in haystack) {
                    if (haystack[key] == needle) {
                        return true;
                    }
                }
            }

            return false;
        },
        each: function(arr) {},
        filter: function(arr, func) {
            //  discuss at: http://phpjs.org/functions/array_filter/
            // original by: Brett Zamir (http://brett-zamir.me)
            //    input by: max4ever
            // improved by: Brett Zamir (http://brett-zamir.me)
            //        note: Takes a function as an argument, not a function's name
            //   example 1: var odd = function (num) {return (num & 1);};
            //   example 1: array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd);
            //   returns 1: {"a": 1, "c": 3, "e": 5}
            //   example 2: var even = function (num) {return (!(num & 1));}
            //   example 2: array_filter([6, 7, 8, 9, 10, 11, 12], even);
            //   returns 2: {0: 6, 2: 8, 4: 10, 6: 12}
            //   example 3: array_filter({"a": 1, "b": false, "c": -1, "d": 0, "e": null, "f":'', "g":undefined});
            //   returns 3: {"a":1, "c":-1};

            var retObj = {},
                k;

            func = func || function(v) {
                return v;
            };

            // Fix: Issue #73
            if (Object.prototype.toString.call(arr) === '[object Array]') {
                retObj = [];
            }

            for (k in arr) {
                if (func(arr[k])) {
                    retObj[k] = arr[k];
                }
            }

            return retObj;
        },
        map: function(callback) {
            //  discuss at: http://phpjs.org/functions/array_map/
            // original by: Andrea Giammarchi (http://webreflection.blogspot.com)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Brett Zamir (http://brett-zamir.me)
            //    input by: thekid
            //        note: If the callback is a string (or object, if an array is supplied), it can only work if the function name is in the global context
            //   example 1: array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] );
            //   returns 1: [ 1, 8, 27, 64, 125 ]

            var argc = arguments.length,
                argv = arguments,
                glbl = this.window,
                obj = null,
                cb = callback,
                j = argv[1].length,
                i = 0,
                k = 1,
                m = 0,
                tmp = [],
                tmp_ar = [];

            while (i < j) {
                while (k < argc) {
                    tmp[m++] = argv[k++][i];
                }

                m = 0;
                k = 1;

                if (callback) {
                    if (typeof callback === 'string') {
                        cb = glbl[callback];
                    } else if (typeof callback === 'object' && callback.length) {
                        obj = typeof callback[0] === 'string' ? glbl[callback[0]] : callback[0];
                        if (typeof obj === 'undefined') {
                            throw 'Object not found: ' + callback[0];
                        }
                        cb = typeof callback[1] === 'string' ? obj[callback[1]] : callback[1];
                    }
                    tmp_ar[i++] = cb.apply(obj, tmp);
                } else {
                    tmp_ar[i++] = tmp;
                }

                tmp = [];
            }

            return tmp_ar;
        },
        some: function(arr, func, context) {
            if (typeof func != "function") {
                throw new TypeError();
            }
            context = context || window;
            for (var i = 0, len = arr.length; i < len; i++) {
                if (i in arr && func.call(context, arr[i], i, arr)) {
                    return true;
                }
            }

            return false;
        },
        every: function(arr, func, context) {
            var len = arr.length;
            if (typeof fun != "function") {
                throw new TypeError();
            }
            context = context || window;
            for (var i = 0, len = arr.length; i < len; i++) {
                if (i in arr && !fun.call(context, arr[i], i, arr)) {
                    return false;
                }
            }
            return true;
        },
        index: function(arr, item, fromIndex) {
            if (fromIndex == null) {
                fromIndex = 0;
            } else if (fromIndex < 0) {
                fromIndex = Math.max(0, arr.length + fromIndex);
            }
            for (var i = fromIndex; i < arr.length; i++) {
                if (arr[i] === item) {
                    return i;

                }
            }
            return -1;
        },
        reduce: function(a_input, callback) {
            var lon = a_input.length;
            var res = 0,
                i = 0;
            var tmp = [];

            for (i = 0; i < lon; i += 2) {
                tmp[0] = a_input[i];
                if (a_input[(i + 1)]) {
                    tmp[1] = a_input[(i + 1)];
                } else {
                    tmp[1] = 0;
                }
                res += callback.apply(null, tmp);
                tmp = [];
            }

            return res;
        },
        reduceRight: function(arr, func, context) {
            var len = arr.length;
            if (typeof func != "function") {
                throw new TypeError();
            }
            context = context || window;
            // no value to return if no initial value, empty array
            if (len == 0 && arguments.length == 2) {
                throw new TypeError();
            }

            var i = len - 1;
            if (arguments.length >= 3) {
                var rv = arguments[2];
            } else {
                do {
                    if (i in arr) {
                        rv = arr[i--];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (--i < 0) {
                        throw new TypeError();
                    }
                } while (true);
            }

            for (; i >= 0; i--) {
                if (i in arr) {
                    rv = func.call(null, rv, arr[i], i, arr);
                }
            }

            return rv;
        },
        unique: function(arr) {
            var resultArr = [],
                returnArr = [],
                origLen = arr.length,
                resultLen;

            function include(arr, value) {
                for (var i = 0, n = arr.length; i < n; ++i) {
                    if (arr[i] === value) {
                        return true;
                    }
                }

                return false;
            }

            resultArr.push(arr[0]);
            for (var i = 1; i < origLen; ++i) {
                if (include(resultArr, arr[i])) {
                    returnArr.push(arr[i]);
                } else {
                    resultArr.push(arr[i]);
                }
            }

            resultLen = resultArr.length;
            arr.length = resultLen;
            for (var i = 0; i < resultLen; ++i) {
                arr[i] = resultArr[i];
            }

            return returnArr;
        },
        end: function(arr) {
            //  discuss at: http://phpjs.org/functions/end/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: Legaev Andrey
            //  revised by: J A R
            //  revised by: Brett Zamir (http://brett-zamir.me)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            //        note: Uses global: util_store to store the array pointer
            //   example 1: end({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
            //   returns 1: 'Zonneveld'
            //   example 2: end(['Kevin', 'van', 'Zonneveld']);
            //   returns 2: 'Zonneveld'

            this.util_store = this.util_store || {};
            this.util_store.pointers = this.util_store.pointers || [];
            var indexOf = function(value) {
                for (var i = 0, length = this.length; i < length; i++) {
                    if (this[i] === value) {
                        return i;
                    }
                }
                return -1;
            };
            // END REDUNDANT
            var pointers = this.util_store.pointers;
            if (!pointers.indexOf) {
                pointers.indexOf = indexOf;
            }
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            }
            var arrpos = pointers.indexOf(arr);
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                var ct = 0;
                var val;
                for (var k in arr) {
                    ct++;
                    val = arr[k];
                }
                if (ct === 0) {
                    return false; // Empty
                }
                pointers[arrpos + 1] = ct - 1;
                return val;
            }
            if (arr.length === 0) {
                return false;
            }
            pointers[arrpos + 1] = arr.length - 1;
            return arr[pointers[arrpos + 1]];
        },
        diff: function(arr1) {
            var retArr = {},
                argl = arguments.length,
                k1 = '',
                i = 1,
                k = '',
                arr = {};

            arr1keys: for (k1 in arr1) {
                for (i = 1; i < argl; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (arr[k] === arr1[k1]) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }

            return retArr;
        },
        remove: function() {

        },
        /**
         * 获取函数的形参个数
         * @param  {Function} func [要获取的函数]
         * @return {*}             [形参的数组或undefind]
         */
        getFuncParameters: function(func) {
            if (typeof func == 'function') {
                var mathes = /[^(]+\(([^)]*)?\)/gm.exec(Function.prototype.toString.call(func));
                if (mathes[1]) {
                    var args = mathes[1].replace(/[^,\w]*/g, '').split(',');
                    return args;
                }
            }
        }
    }
})(window);