import type { MockPrice } from '@/lib/types';

const MOCK_PRICES: Record<string, MockPrice> = {
  // NVIDIA RTX 40 Series
  'RTX 4090': { approximate: '190만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+4090', coupang_url: 'https://link.coupang.com/a/eOoUi1z1Ua' },
  'RTX 4080': { approximate: '130만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+4080', coupang_url: 'https://link.coupang.com/a/eOoScEtzkO' },
  'RTX 4070 Ti': { approximate: '75만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+4070+Ti', coupang_url: 'https://link.coupang.com/a/eOoSWDuDMO' },
  'RTX 4070 Super': { approximate: '65만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+4070+Super', coupang_url: 'https://link.coupang.com/a/eOjoOsJjye' },
  'RTX 4070': { approximate: '55만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+4070', coupang_url: 'https://link.coupang.com/a/eOiQEItZ1w' },
  'RTX 4060 Ti': { approximate: '40만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+4060+Ti', coupang_url: 'https://link.coupang.com/a/eOivC78OWW' },
  'RTX 4060': { approximate: '30만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+4060', coupang_url: 'https://link.coupang.com/a/eOiPwPVq6C' },
  // NVIDIA RTX 30 Series
  'RTX 3080': { approximate: '50만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+3080', coupang_url: 'https://link.coupang.com/a/eOoRxnQEUe' },
  'RTX 3070': { approximate: '35만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+3070', coupang_url: 'https://link.coupang.com/a/eOjm1ewIqO' },
  'RTX 3060 Ti': { approximate: '25만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+3060+Ti', coupang_url: 'https://link.coupang.com/a/eOjl4zPqvI' },
  'RTX 3060': { approximate: '20만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+3060', coupang_url: 'https://link.coupang.com/a/eOiRdVAVpI' },
  // NVIDIA RTX 20 Series
  'RTX 2080 Ti': { approximate: '30만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+2080+Ti', coupang_url: 'https://link.coupang.com/a/eOoU6HWZsi' },
  'RTX 2060 SUPER': { approximate: '15만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+2060+SUPER', coupang_url: 'https://link.coupang.com/a/eOoMLI0Ku4' },
  'RTX 2060': { approximate: '12만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=RTX+2060', coupang_url: 'https://link.coupang.com/a/eOoOMdrCSa' },
  // NVIDIA GTX
  'GTX 1080 Ti': { approximate: '10만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=GTX+1080+Ti', coupang_url: 'https://link.coupang.com/a/eOoVO9AQcC' },
  'GTX 1080': { approximate: '8만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=GTX+1080', coupang_url: 'https://link.coupang.com/a/eOoWzKxbs4' },
  'GTX 1660 SUPER': { approximate: '12만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=GTX+1660+SUPER', coupang_url: 'https://link.coupang.com/a/eOoNWCeooe' },
  'GTX 1060': { approximate: '6만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=GTX+1060', coupang_url: 'https://link.coupang.com/a/eOoPJcj17Q' },
  'GTX 970': { approximate: '4만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=GTX+970', coupang_url: 'https://link.coupang.com/a/eOoQH0qNbg' },
  'GTX 780': { approximate: '2만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=GTX+780', coupang_url: 'https://link.coupang.com/a/eOoXaDg1nM' },
  // AMD RX 7000
  'RX 7900 XTX': { approximate: '110만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RX+7900+XTX', coupang_url: 'https://link.coupang.com/a/eOoTBvbuRE' },
  'RX 7800 XT': { approximate: '45만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RX+7800+XT', coupang_url: 'https://link.coupang.com/a/eOjFJnYDsq' },
  'RX 7600': { approximate: '22만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RX+7600', coupang_url: 'https://link.coupang.com/a/eOjETQJMNo' },
  // AMD RX 6000
  'RX 6700 XT': { approximate: '25만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RX+6700+XT', coupang_url: 'https://link.coupang.com/a/eOjpMHo8uy' },
  'RX 6600': { approximate: '18만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=RX+6600', coupang_url: 'https://link.coupang.com/a/eOiR6S9RTw' },
  'RX 5700 XT': { approximate: '15만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=RX+5700+XT', coupang_url: 'https://link.coupang.com/a/eOoXIPDgYK' },
  'RX 580': { approximate: '5만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=RX+580', coupang_url: 'https://link.coupang.com/a/eOoYd2LLiK' },
  // Intel 14th Gen
  'i9-14900K': { approximate: '55만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i9-14900K', coupang_url: 'https://link.coupang.com/a/eOo6qT3WWi' },
  'i7-14700K': { approximate: '45만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i7-14700K', coupang_url: 'https://link.coupang.com/a/eOo3aeQkzA' },
  'i5-14600K': { approximate: '30만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-14600K', coupang_url: 'https://link.coupang.com/a/eOo2zANrqu' },
  // Intel 13th Gen
  'i9-13900K': { approximate: '45만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i9-13900K', coupang_url: 'https://link.coupang.com/a/eOo3LjLA16' },
  'i5-13400F': { approximate: '14만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-13400F', coupang_url: 'https://link.coupang.com/a/eOiSRubJcG' },
  'i7-13700K': { approximate: '35만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i7-13700K', coupang_url: 'https://link.coupang.com/a/eOo4y558jA' },
  'i5-13600K': { approximate: '25만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-13600K', coupang_url: 'https://link.coupang.com/a/eOoY3TzBTg' },
  // Intel 12th Gen
  'i9-12900K': { approximate: '25만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i9-12900K', coupang_url: 'https://link.coupang.com/a/eOo6UzZP4u' },
  'i7-12700K': { approximate: '20만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i7-12700K', coupang_url: 'https://link.coupang.com/a/eOoZIzUvLw' },
  'i7-12700': { approximate: '18만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i7-12700', coupang_url: 'https://link.coupang.com/a/eOjOdUQbbo' },
  'i5-13400': { approximate: '15만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-13400', coupang_url: 'https://link.coupang.com/a/eOjHTpt1c4' },
  'i5-12400F': { approximate: '13만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-12400F', coupang_url: 'https://link.coupang.com/a/eOjGEgm4U8' },
  'i5-12600K': { approximate: '16만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-12600K', coupang_url: 'https://link.coupang.com/a/eOo5ef6Cbs' },
  // Intel older
  'i7-8700K': { approximate: '8만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=i7-8700K', coupang_url: 'https://link.coupang.com/a/eOo7oMFfJk' },
  'i5-8600K': { approximate: '5만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-8600K', coupang_url: 'https://link.coupang.com/a/eOo7WPR9au' },
  'i5-4690K': { approximate: '2만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-4690K', coupang_url: 'https://www.coupang.com/np/search?q=i5-4690K' },
  'i5-3570K': { approximate: '1만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=i5-3570K', coupang_url: 'https://www.coupang.com/np/search?q=i5-3570K' },
  // AMD Ryzen 7000
  'Ryzen 9 7950X': { approximate: '60만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+9+7950X', coupang_url: 'https://www.coupang.com/np/search?q=Ryzen+9+7950X' },
  'Ryzen 7 7700X': { approximate: '35만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+7+7700X', coupang_url: 'https://link.coupang.com/a/eOo5QxHHTU' },
  'Ryzen 5 7600X': { approximate: '22만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+5+7600X', coupang_url: 'https://link.coupang.com/a/eOo0sdVgAK' },
  'Ryzen 5 7600': { approximate: '19만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+5+7600', coupang_url: 'https://link.coupang.com/a/eOjSgpbCh2' },
  // AMD Ryzen 5000
  'Ryzen 9 5900X': { approximate: '25만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+9+5900X', coupang_url: 'https://link.coupang.com/a/eOo1aDyBnE' },
  'Ryzen 7 5800X': { approximate: '18만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+7+5800X', coupang_url: 'https://link.coupang.com/a/eOo1TYWOeO' },
  'Ryzen 7 5700X': { approximate: '18만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+7+5700X', coupang_url: 'https://link.coupang.com/a/eOjRGocWzI' },
  'Ryzen 5 5600X': { approximate: '14만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+5+5600X', coupang_url: 'https://link.coupang.com/a/eOjQVgHPO0' },
  'Ryzen 5 5600': { approximate: '11만원대', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+5+5600', coupang_url: 'https://link.coupang.com/a/eOiTH339zM' },
  // AMD Ryzen 3000
  'Ryzen 7 3700X': { approximate: '8만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+7+3700X', coupang_url: 'https://www.coupang.com/np/search?q=Ryzen+7+3700X' },
  'Ryzen 5 3600': { approximate: '5만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+5+3600', coupang_url: 'https://www.coupang.com/np/search?q=Ryzen+5+3600' },
  'Ryzen 5 2600': { approximate: '3만원대(중고)', danawa_url: 'https://search.danawa.com/dsearch.php?query=Ryzen+5+2600', coupang_url: 'https://www.coupang.com/np/search?q=Ryzen+5+2600' },
};

export function getMockPrice(model: string): MockPrice {
  return (
    MOCK_PRICES[model] ?? {
      approximate: '가격 정보 없음',
      danawa_url: `https://search.danawa.com/dsearch.php?query=${encodeURIComponent(model)}`,
      coupang_url: `https://www.coupang.com/np/search?q=${encodeURIComponent(model)}`,
    }
  );
}
