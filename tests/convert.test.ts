import { ThaiBahtConverter } from "../src"

test('Convert to Thai number', () => {
  const input = 1234567890
  const expected = '๑๒๓๔๕๖๗๘๙๐'
  expect(ThaiBahtConverter.arabicNumberToThaiNumber(input)).toBe(expected)
  expect(ThaiBahtConverter.arabicNumberToThaiNumber(String(input))).toBe(expected)
})

test('Convert to Arabic number', () => {
  const arabicNumber = ThaiBahtConverter.thaiNumberToArabicNumber('๑๒๓๔๕๖๗๘๙๐')
  expect(arabicNumber).toBe('1234567890')
})

test('Convert Arabic number to Thai text', () => {
  const input = 1234567890
  const expected = 'หนึ่งพันสองร้อยสามสิบสี่ล้านห้าแสนหกหมื่นเจ็ดพันแปดร้อยเก้าสิบบาทถ้วน'
  expect(ThaiBahtConverter.arabicNumberToText(input)).toBe(expected)
  expect(ThaiBahtConverter.arabicNumberToText(String(input))).toBe(expected)
})

test('Convert Thai number to Thai text', () => {
  const thaiText = ThaiBahtConverter.thaiNumberToText('๑๒๓๔๕๖๗๘๙๐')
  expect(thaiText).toBe('หนึ่งพันสองร้อยสามสิบสี่ล้านห้าแสนหกหมื่นเจ็ดพันแปดร้อยเก้าสิบบาทถ้วน')
})

test('Convert decimal', () => {
  const thaiText = ThaiBahtConverter.arabicNumberToText(1234567890.12)
  expect(thaiText).toBe('หนึ่งพันสองร้อยสามสิบสี่ล้านห้าแสนหกหมื่นเจ็ดพันแปดร้อยเก้าสิบบาทสิบสองสตางค์')
})

test('Convert number one at unit digit only', () => {
  const thaiText = ThaiBahtConverter.arabicNumberToText(1)
  expect(thaiText).toBe('หนึ่งบาทถ้วน')
})

test('Convert number one at unit digit with other digit', () => {
  const thaiText = ThaiBahtConverter.arabicNumberToText(1001)
  expect(thaiText).toBe('หนึ่งพันเอ็ดบาทถ้วน')
})

test('Convert negative number', () => {
  const thaiText = ThaiBahtConverter.arabicNumberToText(-1234)
  expect(thaiText).toBe('ลบหนึ่งพันสองร้อยสามสิบสี่บาทถ้วน')
})

test('Convert empty input', () => {
  const expected = ''
  expect(ThaiBahtConverter.arabicNumberToText('')).toBe(expected)
  expect(ThaiBahtConverter.arabicNumberToText('')).toBe(expected)
})

test('Invalid input', () => {
  const expected = 'ข้อมูลนำเข้าไม่ถูกต้อง'
  expect(ThaiBahtConverter.arabicNumberToText('abc')).toBe(expected)
  expect(ThaiBahtConverter.arabicNumberToText('๑๒ก๓๔')).toBe(expected)
})

test('Input exceed limit', () => {
  const expected = 'ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้'
  expect(ThaiBahtConverter.arabicNumberToText(1000000000000)).toBe(expected)
  expect(ThaiBahtConverter.arabicNumberToText('1000000000000')).toBe(expected)
})