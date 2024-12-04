import { convertKorToNum } from './index'; // Replace with the actual file name

describe('convertKorToNum', () => {
	test('converts simple numeric strings', () => {
		expect(convertKorToNum('123')).toBe(123);
		expect(convertKorToNum('1000')).toBe(1000);
	});

	test('converts Korean number words', () => {
		expect(convertKorToNum('일')).toBe(1);
		expect(convertKorToNum('십')).toBe(10);
		expect(convertKorToNum('백')).toBe(100);
		expect(convertKorToNum('천')).toBe(1000);
		expect(convertKorToNum('만')).toBe(10000);
		expect(convertKorToNum('억')).toBe(100000000);
		expect(convertKorToNum('조')).toBe(1000000000000);
	});

	test('converts mixed Korean and numeric strings', () => {
		expect(convertKorToNum('삼십사')).toBe(34);
		expect(convertKorToNum('이백오십')).toBe(250);
		expect(convertKorToNum('천오백')).toBe(1500);
		expect(convertKorToNum('삼천이백십')).toBe(3210);
	});

	test('converts large numbers with major units', () => {
		expect(convertKorToNum('일억')).toBe(100000000);
		expect(convertKorToNum('십억')).toBe(1000000000);
		expect(convertKorToNum('백이십삼만사천오백육십칠')).toBe(1234567);
		expect(
			convertKorToNum('일조이천삼백사십오억육천칠백팔십구만천이백삼십사')
		).toBe(1234567891234);
	});

	test('handles spaces and 원 character', () => {
		expect(convertKorToNum('이백만 삼천오백오십원')).toBe(2003550);
		expect(convertKorToNum('삼억 사천만원')).toBe(340000000);
	});

	test('handles mixed numeric and Korean representations', () => {
		expect(convertKorToNum('200만 3550원')).toBe(2003550);
		expect(convertKorToNum('1억 2345만 6789원')).toBe(123456789);
	});

	test('handles zero', () => {
		expect(convertKorToNum('영')).toBe(0);
		expect(convertKorToNum('0')).toBe(0);
	});
	test('handles mixed numeric and Korean representations', () => {
		expect(convertKorToNum('3509억8650만원')).toBe(350986500000);
		expect(convertKorToNum('삼천오백구억 팔천육백오십만원')).toBe(350986500000);
	});
});
