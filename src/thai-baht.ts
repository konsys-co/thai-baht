const makeRawNumberStr = (strNumber: string) => {
  let decimal = false
  let rawNumberStr = strNumber.replace(/ |,|บาท|฿/gi, '')
  for (let i = 0; i < rawNumberStr.length; i++) {
    if (rawNumberStr[i] === '.') {
      decimal = true
    }
  }
  if (decimal === false) {
    rawNumberStr = rawNumberStr + '.00'
  }
  if (rawNumberStr.split('.')[1].length < 2) {
    rawNumberStr = rawNumberStr + '0'
  }
  return rawNumberStr
}

const NUMBER_VALUES = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ']
const DIGIT_VALUES = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน']

const intergerToText = (interger: number) => {
  const numberArr = Array.from(interger.toString()).map(Number)
  if (numberArr.length === 1) return NUMBER_VALUES[numberArr[0]]
  let bahtText = ''
  for (let i = 0; i < numberArr.length; i++) {
    const tmp = numberArr[i]
    if (tmp !== 0) {
      if ((i === (numberArr.length - 1)) && (tmp === 1)) {
        bahtText += 'เอ็ด'
      } else if ((i === (numberArr.length - 2)) && (tmp === 2)) {
        bahtText += 'ยี่'
      } else if ((i === (numberArr.length - 2)) && (tmp === 1)) {
        bahtText += ''
      } else {
        bahtText += NUMBER_VALUES[tmp]
      }
      bahtText += DIGIT_VALUES[numberArr.length - i - 1]
    }
  }
  return bahtText
}

const arabicNumberToText = (arabicNumber: string | number | String) => {
  const arabicStr = arabicNumber.toString().trim()
  if (arabicStr === '') return ''
  const rawNumberStr = makeRawNumberStr(arabicNumber.toString())
  const isNegative = rawNumberStr.startsWith('-')
  const absRawNumberStr = rawNumberStr.replace('-', '')
  let bahtText = isNegative ? 'ลบ' : ''
  if ( isNaN(Number(absRawNumberStr))) {
    return 'ข้อมูลนำเข้าไม่ถูกต้อง'
  } else {
    if ((Number(absRawNumberStr) - 0) > 999999999999.9999) {
      return 'ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้'
    } else {
      const millionPart = parseInt((Number(absRawNumberStr) / 1000000).toString())
      if (millionPart > 0) {
        bahtText += intergerToText(millionPart)
        bahtText += 'ล้าน'
      }
      const wholeNumberPart = Number(absRawNumberStr.split('.')[0]) % 1000000
      const decimalPart = absRawNumberStr.split('.')[1].substring(0, 2)
      bahtText += intergerToText(Number(wholeNumberPart))
      bahtText += 'บาท'
      if (Number(decimalPart) === 0) {
        bahtText += 'ถ้วน'
      } else {
        bahtText += intergerToText(Number(decimalPart))
        bahtText += 'สตางค์'
      }
      return bahtText
    }
  }
}

const arabicNumberToThaiNumber = (arabicNumber: string | number) => {
  const thNumber = arabicNumber.toString()
    .replace(/0/gi, '๐')
    .replace(/1/gi, '๑')
    .replace(/2/gi, '๒')
    .replace(/3/gi, '๓')
    .replace(/4/gi, '๔')
    .replace(/5/gi, '๕')
    .replace(/6/gi, '๖')
    .replace(/7/gi, '๗')
    .replace(/8/gi, '๘')
    .replace(/9/gi, '๙')
  return thNumber
}

const thaiNumberToArabicNumber = (thNumber: string) => {
  const arabicNumber = thNumber
    .replace(/๐/gi, '0')
    .replace(/๑/gi, '1')
    .replace(/๒/gi, '2')
    .replace(/๓/gi, '3')
    .replace(/๔/gi, '4')
    .replace(/๕/gi, '5')
    .replace(/๖/gi, '6')
    .replace(/๗/gi, '7')
    .replace(/๘/gi, '8')
    .replace(/๙/gi, '9')
  return arabicNumber
}

const thaiNumberToText = (thNumber: string) => {
  const arabicNumber = thaiNumberToArabicNumber(thNumber)
  return arabicNumberToText(arabicNumber)
}

export default {
  arabicNumberToText,
  arabicNumberToThaiNumber,
  thaiNumberToArabicNumber,
  thaiNumberToText,
}
