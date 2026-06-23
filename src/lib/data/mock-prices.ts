import type { MockPrice } from '@/lib/types';

const d = (q: string) => `https://search.danawa.com/dsearch.php?query=${encodeURIComponent(q)}`;
const c = (q: string) => `https://www.coupang.com/np/search?q=${encodeURIComponent(q)}`;

const MOCK_PRICES: Record<string, MockPrice> = {
  // ── NVIDIA RTX 40 Series ──────────────────────────────────────
  'RTX 4090':          { approximate: '190만원대',     danawa_url: d('RTX 4090'),          coupang_url: 'https://link.coupang.com/a/eOoUi1z1Ua' },
  'RTX 4080 Super':    { approximate: '155만원대',     danawa_url: d('RTX 4080 Super'),     coupang_url: c('RTX 4080 Super') },
  'RTX 4080':          { approximate: '130만원대',     danawa_url: d('RTX 4080'),          coupang_url: 'https://link.coupang.com/a/eOoScEtzkO' },
  'RTX 4070 Ti Super': { approximate: '90만원대',      danawa_url: d('RTX 4070 Ti Super'), coupang_url: c('RTX 4070 Ti Super') },
  'RTX 4070 Ti':       { approximate: '75만원대',      danawa_url: d('RTX 4070 Ti'),       coupang_url: 'https://link.coupang.com/a/eOoSWDuDMO' },
  'RTX 4070 Super':    { approximate: '65만원대',      danawa_url: d('RTX 4070 Super'),    coupang_url: 'https://link.coupang.com/a/eOjoOsJjye' },
  'RTX 4070':          { approximate: '55만원대',      danawa_url: d('RTX 4070'),          coupang_url: 'https://link.coupang.com/a/eOiQEItZ1w' },
  'RTX 4060 Ti':       { approximate: '40만원대',      danawa_url: d('RTX 4060 Ti'),       coupang_url: 'https://link.coupang.com/a/eOivC78OWW' },
  'RTX 4060':          { approximate: '30만원대',      danawa_url: d('RTX 4060'),          coupang_url: 'https://link.coupang.com/a/eOiPwPVq6C' },

  // ── NVIDIA RTX 30 Series ──────────────────────────────────────
  'RTX 3090 Ti':       { approximate: '60만원대(중고)', danawa_url: d('RTX 3090 Ti'),       coupang_url: c('RTX 3090 Ti') },
  'RTX 3090':          { approximate: '50만원대(중고)', danawa_url: d('RTX 3090'),          coupang_url: c('RTX 3090') },
  'RTX 3080 Ti':       { approximate: '45만원대(중고)', danawa_url: d('RTX 3080 Ti'),       coupang_url: c('RTX 3080 Ti') },
  'RTX 3080':          { approximate: '40만원대(중고)', danawa_url: d('RTX 3080'),          coupang_url: 'https://link.coupang.com/a/eOoRxnQEUe' },
  'RTX 3080 12GB':     { approximate: '40만원대(중고)', danawa_url: d('RTX 3080 12GB'),     coupang_url: c('RTX 3080 12GB') },
  'RTX 3070 Ti':       { approximate: '30만원대(중고)', danawa_url: d('RTX 3070 Ti'),       coupang_url: c('RTX 3070 Ti') },
  'RTX 3070':          { approximate: '25만원대(중고)', danawa_url: d('RTX 3070'),          coupang_url: 'https://link.coupang.com/a/eOjm1ewIqO' },
  'RTX 3060 Ti':       { approximate: '20만원대(중고)', danawa_url: d('RTX 3060 Ti'),       coupang_url: 'https://link.coupang.com/a/eOjl4zPqvI' },
  'RTX 3060':          { approximate: '17만원대(중고)', danawa_url: d('RTX 3060'),          coupang_url: 'https://link.coupang.com/a/eOiRdVAVpI' },
  'RTX 3050':          { approximate: '16만원대',      danawa_url: d('RTX 3050'),          coupang_url: c('RTX 3050') },

  // ── NVIDIA RTX 20 Series ──────────────────────────────────────
  'RTX 2080 Ti':       { approximate: '22만원대(중고)', danawa_url: d('RTX 2080 Ti'),       coupang_url: 'https://link.coupang.com/a/eOoU6HWZsi' },
  'RTX 2080 Super':    { approximate: '18만원대(중고)', danawa_url: d('RTX 2080 Super'),    coupang_url: c('RTX 2080 Super') },
  'RTX 2080':          { approximate: '16만원대(중고)', danawa_url: d('RTX 2080'),          coupang_url: c('RTX 2080') },
  'RTX 2070 Super':    { approximate: '15만원대(중고)', danawa_url: d('RTX 2070 Super'),    coupang_url: c('RTX 2070 Super') },
  'RTX 2070':          { approximate: '13만원대(중고)', danawa_url: d('RTX 2070'),          coupang_url: c('RTX 2070') },
  'RTX 2060 SUPER':    { approximate: '12만원대(중고)', danawa_url: d('RTX 2060 SUPER'),    coupang_url: 'https://link.coupang.com/a/eOoMLI0Ku4' },
  'RTX 2060':          { approximate: '10만원대(중고)', danawa_url: d('RTX 2060'),          coupang_url: 'https://link.coupang.com/a/eOoOMdrCSa' },

  // ── NVIDIA GTX 16 Series ──────────────────────────────────────
  'GTX 1660 Ti':       { approximate: '9만원대(중고)',  danawa_url: d('GTX 1660 Ti'),       coupang_url: c('GTX 1660 Ti') },
  'GTX 1660 SUPER':    { approximate: '9만원대(중고)',  danawa_url: d('GTX 1660 SUPER'),    coupang_url: 'https://link.coupang.com/a/eOoNWCeooe' },
  'GTX 1660':          { approximate: '7만원대(중고)',  danawa_url: d('GTX 1660'),          coupang_url: c('GTX 1660') },
  'GTX 1650 Super':    { approximate: '6만원대(중고)',  danawa_url: d('GTX 1650 Super'),    coupang_url: c('GTX 1650 Super') },
  'GTX 1650':          { approximate: '5만원대(중고)',  danawa_url: d('GTX 1650'),          coupang_url: c('GTX 1650') },
  'GTX 1630':          { approximate: '5만원대',       danawa_url: d('GTX 1630'),          coupang_url: c('GTX 1630') },

  // ── NVIDIA GTX 10 Series ──────────────────────────────────────
  'GTX 1080 Ti':       { approximate: '9만원대(중고)',  danawa_url: d('GTX 1080 Ti'),       coupang_url: 'https://link.coupang.com/a/eOoVO9AQcC' },
  'GTX 1080':          { approximate: '7만원대(중고)',  danawa_url: d('GTX 1080'),          coupang_url: 'https://link.coupang.com/a/eOoWzKxbs4' },
  'GTX 1070 Ti':       { approximate: '8만원대(중고)',  danawa_url: d('GTX 1070 Ti'),       coupang_url: c('GTX 1070 Ti') },
  'GTX 1070':          { approximate: '7만원대(중고)',  danawa_url: d('GTX 1070'),          coupang_url: c('GTX 1070') },
  'GTX 1060':          { approximate: '5만원대(중고)',  danawa_url: d('GTX 1060'),          coupang_url: 'https://link.coupang.com/a/eOoPJcj17Q' },
  'GTX 1060 3GB':      { approximate: '4만원대(중고)',  danawa_url: d('GTX 1060 3GB'),      coupang_url: c('GTX 1060 3GB') },
  'GTX 1050 Ti':       { approximate: '4만원대(중고)',  danawa_url: d('GTX 1050 Ti'),       coupang_url: c('GTX 1050 Ti') },
  'GTX 1050':          { approximate: '3만원대(중고)',  danawa_url: d('GTX 1050'),          coupang_url: c('GTX 1050') },
  'GT 1030':           { approximate: '3만원대(중고)',  danawa_url: d('GT 1030'),           coupang_url: c('GT 1030') },

  // ── NVIDIA GTX 9/7 Series ─────────────────────────────────────
  'GTX 980 Ti':        { approximate: '4만원대(중고)',  danawa_url: d('GTX 980 Ti'),        coupang_url: c('GTX 980 Ti') },
  'GTX 980':           { approximate: '3만원대(중고)',  danawa_url: d('GTX 980'),           coupang_url: c('GTX 980') },
  'GTX 970':           { approximate: '3만원대(중고)',  danawa_url: d('GTX 970'),           coupang_url: 'https://link.coupang.com/a/eOoQH0qNbg' },
  'GTX 960':           { approximate: '2만원대(중고)',  danawa_url: d('GTX 960'),           coupang_url: c('GTX 960') },
  'GTX 950':           { approximate: '2만원대(중고)',  danawa_url: d('GTX 950'),           coupang_url: c('GTX 950') },
  'GTX 780':           { approximate: '1만원대(중고)',  danawa_url: d('GTX 780'),           coupang_url: 'https://link.coupang.com/a/eOoXaDg1nM' },
  'GTX 770':           { approximate: '1만원대(중고)',  danawa_url: d('GTX 770'),           coupang_url: c('GTX 770') },
  'GTX 760':           { approximate: '1만원대(중고)',  danawa_url: d('GTX 760'),           coupang_url: c('GTX 760') },
  'GTX 750 Ti':        { approximate: '1만원대(중고)',  danawa_url: d('GTX 750 Ti'),        coupang_url: c('GTX 750 Ti') },
  'GTX 660':           { approximate: '1만원대(중고)',  danawa_url: d('GTX 660'),           coupang_url: c('GTX 660') },

  // ── AMD RX 7000 Series ────────────────────────────────────────
  'RX 7900 XTX':       { approximate: '100만원대',     danawa_url: d('RX 7900 XTX'),       coupang_url: 'https://link.coupang.com/a/eOoTBvbuRE' },
  'RX 7900 XT':        { approximate: '85만원대',      danawa_url: d('RX 7900 XT'),        coupang_url: c('RX 7900 XT') },
  'RX 7800 XT':        { approximate: '40만원대',      danawa_url: d('RX 7800 XT'),        coupang_url: 'https://link.coupang.com/a/eOjFJnYDsq' },
  'RX 7700 XT':        { approximate: '35만원대',      danawa_url: d('RX 7700 XT'),        coupang_url: c('RX 7700 XT') },
  'RX 7600 XT':        { approximate: '25만원대',      danawa_url: d('RX 7600 XT'),        coupang_url: c('RX 7600 XT') },
  'RX 7600':           { approximate: '20만원대',      danawa_url: d('RX 7600'),           coupang_url: 'https://link.coupang.com/a/eOjETQJMNo' },

  // ── AMD RX 6000 Series ────────────────────────────────────────
  'RX 6900 XT':        { approximate: '30만원대(중고)', danawa_url: d('RX 6900 XT'),        coupang_url: c('RX 6900 XT') },
  'RX 6800 XT':        { approximate: '25만원대(중고)', danawa_url: d('RX 6800 XT'),        coupang_url: c('RX 6800 XT') },
  'RX 6800':           { approximate: '22만원대(중고)', danawa_url: d('RX 6800'),           coupang_url: c('RX 6800') },
  'RX 6750 XT':        { approximate: '20만원대',      danawa_url: d('RX 6750 XT'),        coupang_url: c('RX 6750 XT') },
  'RX 6700 XT':        { approximate: '22만원대',      danawa_url: d('RX 6700 XT'),        coupang_url: 'https://link.coupang.com/a/eOjpMHo8uy' },
  'RX 6650 XT':        { approximate: '16만원대',      danawa_url: d('RX 6650 XT'),        coupang_url: c('RX 6650 XT') },
  'RX 6600 XT':        { approximate: '14만원대',      danawa_url: d('RX 6600 XT'),        coupang_url: c('RX 6600 XT') },
  'RX 6600':           { approximate: '14만원대',      danawa_url: d('RX 6600'),           coupang_url: 'https://link.coupang.com/a/eOiR6S9RTw' },
  'RX 6500 XT':        { approximate: '8만원대',       danawa_url: d('RX 6500 XT'),        coupang_url: c('RX 6500 XT') },
  'RX 6400':           { approximate: '7만원대',       danawa_url: d('RX 6400'),           coupang_url: c('RX 6400') },

  // ── AMD RX 5000 Series ────────────────────────────────────────
  'RX 5700 XT':        { approximate: '12만원대(중고)', danawa_url: d('RX 5700 XT'),        coupang_url: 'https://link.coupang.com/a/eOoXIPDgYK' },
  'RX 5700':           { approximate: '10만원대(중고)', danawa_url: d('RX 5700'),           coupang_url: c('RX 5700') },
  'RX 5600 XT':        { approximate: '9만원대(중고)',  danawa_url: d('RX 5600 XT'),        coupang_url: c('RX 5600 XT') },
  'RX 5500 XT':        { approximate: '6만원대(중고)',  danawa_url: d('RX 5500 XT'),        coupang_url: c('RX 5500 XT') },
  'RX 5300 XT':        { approximate: '5만원대(중고)',  danawa_url: d('RX 5300 XT'),        coupang_url: c('RX 5300 XT') },

  // ── AMD RX 400/500 Series ─────────────────────────────────────
  'RX 590':            { approximate: '5만원대(중고)',  danawa_url: d('RX 590'),            coupang_url: c('RX 590') },
  'RX 580 8GB':        { approximate: '4만원대(중고)',  danawa_url: d('RX 580 8GB'),        coupang_url: c('RX 580 8GB') },
  'RX 580':            { approximate: '4만원대(중고)',  danawa_url: d('RX 580'),            coupang_url: 'https://link.coupang.com/a/eOoYd2LLiK' },
  'RX 570':            { approximate: '3만원대(중고)',  danawa_url: d('RX 570'),            coupang_url: c('RX 570') },
  'RX 480 8GB':        { approximate: '3만원대(중고)',  danawa_url: d('RX 480 8GB'),        coupang_url: c('RX 480 8GB') },
  'RX 480':            { approximate: '3만원대(중고)',  danawa_url: d('RX 480'),            coupang_url: c('RX 480') },
  'RX 470':            { approximate: '2만원대(중고)',  danawa_url: d('RX 470'),            coupang_url: c('RX 470') },
  'RX 460':            { approximate: '2만원대(중고)',  danawa_url: d('RX 460'),            coupang_url: c('RX 460') },

  // ── AMD R9 Series ─────────────────────────────────────────────
  'R9 390X':           { approximate: '2만원대(중고)',  danawa_url: d('R9 390X'),           coupang_url: c('R9 390X') },
  'R9 390':            { approximate: '2만원대(중고)',  danawa_url: d('R9 390'),            coupang_url: c('R9 390') },
  'R9 380':            { approximate: '1만원대(중고)',  danawa_url: d('R9 380'),            coupang_url: c('R9 380') },

  // ── Intel Arc ─────────────────────────────────────────────────
  'Intel Arc B580':    { approximate: '28만원대',      danawa_url: d('Intel Arc B580'),    coupang_url: c('Intel Arc B580') },
  'Intel Arc B570':    { approximate: '22만원대',      danawa_url: d('Intel Arc B570'),    coupang_url: c('Intel Arc B570') },
  'Intel Arc A770':    { approximate: '24만원대',      danawa_url: d('Intel Arc A770'),    coupang_url: c('Intel Arc A770') },
  'Intel Arc A750':    { approximate: '20만원대',      danawa_url: d('Intel Arc A750'),    coupang_url: c('Intel Arc A750') },
  'Intel Arc A580':    { approximate: '16만원대',      danawa_url: d('Intel Arc A580'),    coupang_url: c('Intel Arc A580') },
  'Intel Arc A380':    { approximate: '8만원대',       danawa_url: d('Intel Arc A380'),    coupang_url: c('Intel Arc A380') },
  'Intel Arc A310':    { approximate: '6만원대',       danawa_url: d('Intel Arc A310'),    coupang_url: c('Intel Arc A310') },

  // ── CPU: Intel 14th Gen ───────────────────────────────────────
  'i9-14900K':         { approximate: '55만원대',      danawa_url: d('i9-14900K'),         coupang_url: 'https://link.coupang.com/a/eOo6qT3WWi' },
  'i7-14700K':         { approximate: '45만원대',      danawa_url: d('i7-14700K'),         coupang_url: 'https://link.coupang.com/a/eOo3aeQkzA' },
  'i5-14600K':         { approximate: '30만원대',      danawa_url: d('i5-14600K'),         coupang_url: 'https://link.coupang.com/a/eOo2zANrqu' },

  // ── CPU: Intel 13th Gen ───────────────────────────────────────
  'i9-13900K':         { approximate: '45만원대',      danawa_url: d('i9-13900K'),         coupang_url: 'https://link.coupang.com/a/eOo3LjLA16' },
  'i7-13700K':         { approximate: '35만원대',      danawa_url: d('i7-13700K'),         coupang_url: 'https://link.coupang.com/a/eOo4y558jA' },
  'i5-13600K':         { approximate: '25만원대',      danawa_url: d('i5-13600K'),         coupang_url: 'https://link.coupang.com/a/eOoY3TzBTg' },
  'i5-13400':          { approximate: '15만원대',      danawa_url: d('i5-13400'),          coupang_url: 'https://link.coupang.com/a/eOjHTpt1c4' },
  'i5-13400F':         { approximate: '14만원대',      danawa_url: d('i5-13400F'),         coupang_url: 'https://link.coupang.com/a/eOiSRubJcG' },

  // ── CPU: Intel 12th Gen ───────────────────────────────────────
  'i9-12900K':         { approximate: '25만원대',      danawa_url: d('i9-12900K'),         coupang_url: 'https://link.coupang.com/a/eOo6UzZP4u' },
  'i7-12700K':         { approximate: '20만원대',      danawa_url: d('i7-12700K'),         coupang_url: 'https://link.coupang.com/a/eOoZIzUvLw' },
  'i7-12700':          { approximate: '18만원대',      danawa_url: d('i7-12700'),          coupang_url: 'https://link.coupang.com/a/eOjOdUQbbo' },
  'i5-12600K':         { approximate: '16만원대',      danawa_url: d('i5-12600K'),         coupang_url: 'https://link.coupang.com/a/eOo5ef6Cbs' },
  'i5-12400F':         { approximate: '13만원대',      danawa_url: d('i5-12400F'),         coupang_url: 'https://link.coupang.com/a/eOjGEgm4U8' },

  // ── CPU: Intel older ──────────────────────────────────────────
  'i7-8700K':          { approximate: '8만원대(중고)',  danawa_url: d('i7-8700K'),          coupang_url: 'https://link.coupang.com/a/eOo7oMFfJk' },
  'i5-8600K':          { approximate: '5만원대(중고)',  danawa_url: d('i5-8600K'),          coupang_url: 'https://link.coupang.com/a/eOo7WPR9au' },
  'i5-4690K':          { approximate: '2만원대(중고)',  danawa_url: d('i5-4690K'),          coupang_url: c('i5-4690K') },
  'i5-3570K':          { approximate: '1만원대(중고)',  danawa_url: d('i5-3570K'),          coupang_url: c('i5-3570K') },

  // ── CPU: AMD Ryzen 9000 (AM5) ─────────────────────────────────
  'Ryzen 9 9950X':     { approximate: '75만원대',      danawa_url: d('Ryzen 9 9950X'),     coupang_url: c('Ryzen 9 9950X') },
  'Ryzen 9 9900X':     { approximate: '55만원대',      danawa_url: d('Ryzen 9 9900X'),     coupang_url: c('Ryzen 9 9900X') },
  'Ryzen 7 9700X':     { approximate: '40만원대',      danawa_url: d('Ryzen 7 9700X'),     coupang_url: c('Ryzen 7 9700X') },
  'Ryzen 5 9600X':     { approximate: '28만원대',      danawa_url: d('Ryzen 5 9600X'),     coupang_url: c('Ryzen 5 9600X') },

  // ── CPU: AMD Ryzen 7000 (AM5) ─────────────────────────────────
  'Ryzen 9 7950X':     { approximate: '60만원대',      danawa_url: d('Ryzen 9 7950X'),     coupang_url: c('Ryzen 9 7950X') },
  'Ryzen 9 7900X':     { approximate: '50만원대',      danawa_url: d('Ryzen 9 7900X'),     coupang_url: c('Ryzen 9 7900X') },
  'Ryzen 7 7700X':     { approximate: '35만원대',      danawa_url: d('Ryzen 7 7700X'),     coupang_url: 'https://link.coupang.com/a/eOo5QxHHTU' },
  'Ryzen 7 7700':      { approximate: '30만원대',      danawa_url: d('Ryzen 7 7700'),      coupang_url: c('Ryzen 7 7700') },
  'Ryzen 5 7600X':     { approximate: '22만원대',      danawa_url: d('Ryzen 5 7600X'),     coupang_url: 'https://link.coupang.com/a/eOo0sdVgAK' },
  'Ryzen 5 7600':      { approximate: '19만원대',      danawa_url: d('Ryzen 5 7600'),      coupang_url: 'https://link.coupang.com/a/eOjSgpbCh2' },
  'Ryzen 5 7500F':     { approximate: '20만원대',      danawa_url: d('Ryzen 5 7500F'),     coupang_url: c('Ryzen 5 7500F') },

  // ── CPU: AMD Ryzen 5000 (AM4) ─────────────────────────────────
  'Ryzen 9 5950X':     { approximate: '35만원대',      danawa_url: d('Ryzen 9 5950X'),     coupang_url: c('Ryzen 9 5950X') },
  'Ryzen 9 5900X':     { approximate: '25만원대',      danawa_url: d('Ryzen 9 5900X'),     coupang_url: 'https://link.coupang.com/a/eOo1aDyBnE' },
  'Ryzen 7 5800X3D':   { approximate: '22만원대',      danawa_url: d('Ryzen 7 5800X3D'),   coupang_url: c('Ryzen 7 5800X3D') },
  'Ryzen 7 5800X':     { approximate: '18만원대',      danawa_url: d('Ryzen 7 5800X'),     coupang_url: 'https://link.coupang.com/a/eOo1TYWOeO' },
  'Ryzen 7 5700X':     { approximate: '15만원대',      danawa_url: d('Ryzen 7 5700X'),     coupang_url: 'https://link.coupang.com/a/eOjRGocWzI' },
  'Ryzen 5 5600X':     { approximate: '12만원대',      danawa_url: d('Ryzen 5 5600X'),     coupang_url: 'https://link.coupang.com/a/eOjQVgHPO0' },
  'Ryzen 5 5600':      { approximate: '10만원대',      danawa_url: d('Ryzen 5 5600'),      coupang_url: 'https://link.coupang.com/a/eOiTH339zM' },
  'Ryzen 5 5500':      { approximate: '8만원대',       danawa_url: d('Ryzen 5 5500'),      coupang_url: c('Ryzen 5 5500') },

  // ── CPU: AMD Ryzen 3000 (AM4) ─────────────────────────────────
  'Ryzen 9 3900X':     { approximate: '15만원대(중고)', danawa_url: d('Ryzen 9 3900X'),     coupang_url: c('Ryzen 9 3900X') },
  'Ryzen 7 3800X':     { approximate: '10만원대(중고)', danawa_url: d('Ryzen 7 3800X'),     coupang_url: c('Ryzen 7 3800X') },
  'Ryzen 7 3700X':     { approximate: '8만원대(중고)',  danawa_url: d('Ryzen 7 3700X'),     coupang_url: c('Ryzen 7 3700X') },
  'Ryzen 5 3600X':     { approximate: '7만원대(중고)',  danawa_url: d('Ryzen 5 3600X'),     coupang_url: c('Ryzen 5 3600X') },
  'Ryzen 5 3600':      { approximate: '5만원대(중고)',  danawa_url: d('Ryzen 5 3600'),      coupang_url: c('Ryzen 5 3600') },

  // ── CPU: AMD Ryzen 2000 (AM4) ─────────────────────────────────
  'Ryzen 7 2700X':     { approximate: '5만원대(중고)',  danawa_url: d('Ryzen 7 2700X'),     coupang_url: c('Ryzen 7 2700X') },
  'Ryzen 5 2600X':     { approximate: '4만원대(중고)',  danawa_url: d('Ryzen 5 2600X'),     coupang_url: c('Ryzen 5 2600X') },
  'Ryzen 5 2600':      { approximate: '3만원대(중고)',  danawa_url: d('Ryzen 5 2600'),      coupang_url: c('Ryzen 5 2600') },
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
