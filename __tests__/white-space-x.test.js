import * as whiteSpace from 'src/white-space-x';

const list = [
  {
    code: 0x0009,
    description: 'Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0009',
  },
  {
    code: 0x000a,
    description: 'Line Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000a',
  },
  {
    code: 0x000b,
    description: 'Vertical Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000b',
  },
  {
    code: 0x000c,
    description: 'Form Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000c',
  },
  {
    code: 0x000d,
    description: 'Carriage Return',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000d',
  },
  {
    code: 0x0020,
    description: 'Space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0020',
  },
  /*
  {
    code: 0x0085,
    description: 'Next line',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u0085'
  }
  */
  {
    code: 0x00a0,
    description: 'No-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u00a0',
  },
  {
    code: 0x1680,
    description: 'Ogham space mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u1680',
  },
  {
    code: 0x180e,
    description: 'Mongolian vowel separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: false,
    es2018: false,
    string: '\u180e',
  },
  {
    code: 0x2000,
    description: 'En quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2000',
  },
  {
    code: 0x2001,
    description: 'Em quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2001',
  },
  {
    code: 0x2002,
    description: 'En space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2002',
  },
  {
    code: 0x2003,
    description: 'Em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2003',
  },
  {
    code: 0x2004,
    description: 'Three-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2004',
  },
  {
    code: 0x2005,
    description: 'Four-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2005',
  },
  {
    code: 0x2006,
    description: 'Six-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2006',
  },
  {
    code: 0x2007,
    description: 'Figure space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2007',
  },
  {
    code: 0x2008,
    description: 'Punctuation space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2008',
  },
  {
    code: 0x2009,
    description: 'Thin space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2009',
  },
  {
    code: 0x200a,
    description: 'Hair space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u200a',
  },
  /*
  {
    code: 0x200b,
    description: 'Zero width space',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u200b'
  },
  */
  {
    code: 0x2028,
    description: 'Line separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2028',
  },
  {
    code: 0x2029,
    description: 'Paragraph separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2029',
  },
  {
    code: 0x202f,
    description: 'Narrow no-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u202f',
  },
  {
    code: 0x205f,
    description: 'Medium mathematical space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u205f',
  },
  {
    code: 0x3000,
    description: 'Ideographic space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u3000',
  },
  {
    code: 0xfeff,
    description: 'Byte Order Mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\ufeff',
  },
];

const string2016 = list.reduce(function(acc, item) {
  if (item.es2016) {
    return acc + String.fromCharCode(item.code);
  }

  return acc;
}, '');

const string2018 = list.reduce(function(acc, item) {
  if (item.es2018) {
    return acc + String.fromCharCode(item.code);
  }

  return acc;
}, '');

const nonWhiteSpaceStr = new Array(0xfeff).fill().reduce(function(str, u, index) {
  const includes = function _includes(item) {
    return item.code === index;
  };

  /* eslint-disable-next-line compat/compat */
  return list.some(includes) ? str : str + String.fromCodePoint(index);
}, '');

describe('basic tests', function() {
  it('lists should be equal', function() {
    expect.assertions(1);
    expect(whiteSpace.list).toStrictEqual(list);
  });

  it('es2016 string should be correct', function() {
    expect.assertions(1);
    expect(whiteSpace.string2016).toBe(string2016);
  });

  it('es2018 string should be correct', function() {
    expect.assertions(1);
    expect(whiteSpace.string2018).toBe(string2018);
  });

  it('string should be es2018', function() {
    expect.assertions(1);
    expect(whiteSpace.string).toBe(string2018);
  });

  it('should be equal 1', function() {
    expect.assertions(2);
    const re = new RegExp(`[${whiteSpace.string}]`, 'g');
    expect((whiteSpace.string + nonWhiteSpaceStr).replace(re, '')).toBe(nonWhiteSpaceStr);
    expect((nonWhiteSpaceStr + whiteSpace.string).replace(re, '')).toBe(nonWhiteSpaceStr);
  });

  it('should be equal 2', function() {
    expect.assertions(2);
    const re = new RegExp(`[^${whiteSpace.string}]`, 'g');
    expect((whiteSpace.string + nonWhiteSpaceStr).replace(re, '')).toBe(string2018);
    expect((nonWhiteSpaceStr + whiteSpace.string).replace(re, '')).toBe(string2018);
  });

  it('should be `true` 1', function() {
    expect.assertions(1);
    const re = new RegExp(`^[${whiteSpace.string}]+$`);
    expect(re.test(string2018)).toBe(true);
  });

  it('should be `false` 1', function() {
    expect.assertions(1);
    const re = new RegExp(`[${whiteSpace.string}]`);
    expect(re.test(nonWhiteSpaceStr)).toBe(false);
  });

  it('should be `true` 2', function() {
    expect.assertions(1);
    const re = new RegExp(`^[^${whiteSpace.string}]+$`);
    expect(re.test(nonWhiteSpaceStr)).toBe(true);
  });

  it('should be `false` 2', function() {
    expect.assertions(1);
    const re = new RegExp(`[^${whiteSpace.string}]`);
    expect(re.test(string2018)).toBe(false);
  });
});
