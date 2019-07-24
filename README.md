<a href="https://travis-ci.org/Xotic750/white-space-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/white-space-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/white-space-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/white-space-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/white-space-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/white-space-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/white-space-x"
  title="npm version">
<img src="https://badge.fury.io/js/white-space-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/white-space-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/white-space-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_white-space-x"></a>

## white-space-x

### `module.exports` : <code>string</code> ⏏

List of ECMAScript white space characters.

**Kind**: Exported member
**Example**

```js
import whiteSpace from 'white-space-x';
whiteSpaces.list.foreach(function(item) {
  console.log(item.description, item.code, item.string);
});

const characters = [
  '\u0009',
  '\u000a',
  '\u000b',
  '\u000c',
  '\u000d',
  '\u0020',
  '\u00a0',
  '\u1680',
  '\u2000',
  '\u2001',
  '\u2002',
  '\u2003',
  '\u2004',
  '\u2005',
  '\u2006',
  '\u2007',
  '\u2008',
  '\u2009',
  '\u200a',
  '\u2028',
  '\u2029',
  '\u202f',
  '\u205f',
  '\u3000',
  '\ufeff',
];
const ws = characters.join('');
const re1 = new RegExp('^[' + whiteSpace + ']+$)');
console.log(re1.test(ws)); // true
```

- [white-space-x](#module_white-space-x)
  - _static_
    - [`.list`](#module_white-space-x.list) : <code>Array.&lt;CharRecord&gt;</code>
    - [`.string2016`](#module_white-space-x.string2016) : <code>string</code>
  - _inner_
    - [`~CharRecord`](#module_white-space-x..CharRecord) : <code>Object</code>

<a name="module_white-space-x.list"></a>

### `white-space-x.list` : <code>Array.&lt;CharRecord&gt;</code>

An array of the whitespace char codes, string, descriptions and language
presence in the specifications.

**Kind**: static property of [<code>white-space-x</code>](#module_white-space-x)
<a name="module_white-space-x.string2016"></a>

### `white-space-x.string2016` : <code>string</code>

A string of the ES5 to ES2016 whitespace characters.

**Kind**: static property of [<code>white-space-x</code>](#module_white-space-x)
**Example**

```js
import {string2016 as whiteSpace2016} from 'white-space-x';
const characters = [
  '\u0009',
  '\u000a',
  '\u000b',
  '\u000c',
  '\u000d',
  '\u0020',
  '\u00a0',
  '\u1680',
  '\u180e',
  '\u2000',
  '\u2001',
  '\u2002',
  '\u2003',
  '\u2004',
  '\u2005',
  '\u2006',
  '\u2007',
  '\u2008',
  '\u2009',
  '\u200a',
  '\u2028',
  '\u2029',
  '\u202f',
  '\u205f',
  '\u3000',
  '\ufeff',
];
const ws = characters.join('');
const re1 = new RegExp('^[' + whiteSpace2016 + ']+$)');
console.log(re1.test(ws)); // true
```

<a name="module_white-space-x.string2017"></a>

### `white-space-x.string2017` : <code>string</code>

A string of the ES2017 to ES2018 whitespace characters.

**Kind**: static property of [<code>white-space-x</code>](#module_white-space-x)  
<a name="module_white-space-x.string2018"></a>

<a name="module_white-space-x..CharRecord"></a>

### `white-space-x~CharRecord` : <code>Object</code>

A record of a white space character.

**Kind**: inner typedef of [<code>white-space-x</code>](#module_white-space-x)  
**Properties**

| Name        | Type                 | Description                                   |
| ----------- | -------------------- | --------------------------------------------- |
| code        | <code>number</code>  | The character code.                           |
| description | <code>string</code>  | A description of the character.               |
| es5         | <code>boolean</code> | Whether the spec lists this as a white space. |
| es2015      | <code>boolean</code> | Whether the spec lists this as a white space. |
| es2016      | <code>boolean</code> | Whether the spec lists this as a white space. |
| es2017      | <code>boolean</code> | Whether the spec lists this as a white space. |
| es2018      | <code>boolean</code> | Whether the spec lists this as a white space. |
| string      | <code>string</code>  | The character string.                         |
