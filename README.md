# Thai Baht

Numeral converter to convert number Thai Baht text and Thai numeral.

## Usage

```ts
import { ThaiBahtConverter } from "@konsys.co/thb"

const arabicNumber = "12000000001.00"
const thaiNumber = "-๙๘๐๐๐๑๑.๕๐"

ThaiBahtConverter.arabicNumberToThaiNumber(arabicNumber)
// ๑๒๐๐๐๐๐๐๐๐๑.๐๐
ThaiBahtConverter.arabicNumberToText(arabicNumber)
// หนึ่งหมื่นสองพันล้านหนึ่งบาทถ้วน
ThaiBahtConverter.thaiNumberToArabicNumber(thaiNumber)
// -9800011.50
ThaiBahtConverter.thaiNumberToText(thaiNumber)
// ลบเก้าล้านแปดแสนสิบเอ็ดบาทห้าสิบสตางค์
```

Maximum supported amount is 999999999999.99