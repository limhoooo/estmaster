import fs from 'fs';
import path from 'path';
import type { GPU, CPU, Game } from '@/lib/types';

function parseCSV(filename: string): Record<string, string | number>[] {
  const filePath = path.join(process.cwd(), 'data', filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n').filter(l => l.trim());
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const obj: Record<string, string | number> = {};
    headers.forEach((header, i) => {
      const val = values[i] ?? '';
      const num = Number(val);
      obj[header] = val !== '' && !isNaN(num) ? num : val;
    });
    return obj;
  });
}

export function loadGPUs(): GPU[] {
  return parseCSV('gpus.csv') as unknown as GPU[];
}

export function loadCPUs(): CPU[] {
  return parseCSV('cpus.csv') as unknown as CPU[];
}

export function loadGames(): Game[] {
  return parseCSV('games.csv') as unknown as Game[];
}
