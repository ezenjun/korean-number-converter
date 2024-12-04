# korean-number-converter

This package converts Korean number strings to numeric values.
한글 / 한글 + 숫자로 이루어진 숫자 입력을 숫자로 변환합니다. 

## Installation

```bash
npm install korean-number-converter
```
## Usage
```
import { convertKorToNum } from 'korean-number-converter'

console.log(convertKorToNum('3509억8650만원')); // 350986500000
console.log(convertKorToNum('삼천오백구억 팔천육백오십만원')); // 350986500000
console.log(convertKorToNum('200만원')); // 2000000
console.log(convertKorToNum('이백만원')); // 2000000
```
