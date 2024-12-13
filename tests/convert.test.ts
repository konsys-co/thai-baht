import { ThaiBahtConverter } from "../src"

test('Convert to Thai number', () => {
  const thaiNumber = ThaiBahtConverter.arabicNumberToThaiNumber(1234567890)
  expect(thaiNumber).toBe('๑๒๓๔๕๖๗๘๙๐')
})

test('Convert to Arabic number', () => {
  const arabicNumber = ThaiBahtConverter.thaiNumberToArabicNumber('๑๒๓๔๕๖๗๘๙๐')
  expect(arabicNumber).toBe('1234567890')
})

test('Convert Arabic number to Thai text', () => {
  const thaiText = ThaiBahtConverter.arabicNumberToText(1234567890)
  expect(thaiText).toBe('หนึ่งพันสองร้อยสามสิบสี่ล้านห้าแสนหกหมื่นเจ็ดพันแปดร้อยเก้าสิบบาทถ้วน')
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