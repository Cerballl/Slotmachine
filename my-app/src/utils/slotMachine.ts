import type { SymbolKey } from '../types';
import { SYMBOL_WEIGHTS, SYMBOL_KEYS } from '../constants/symbols';

export const generateWeightPool = (): SymbolKey[] => {
  const pool: SymbolKey[] = [];

  (Object.keys(SYMBOL_WEIGHTS) as SymbolKey[]).forEach((symbol) => {
    const weight = SYMBOL_WEIGHTS[symbol];
    for (let i = 0; i < weight; i++) {
      pool.push(symbol);
    }
  });
  return pool;
};

export const generateRandomSlots = (weightPool: SymbolKey[]): SymbolKey[] => {
  return [
    weightPool[Math.floor(Math.random() * weightPool.length)],
    weightPool[Math.floor(Math.random() * weightPool.length)],
    weightPool[Math.floor(Math.random() * weightPool.length)],
  ];
};

export const checkWin = (slots: SymbolKey[]): boolean => {
  return slots[0] === slots[1] && slots[1] === slots[2];
};

export const getReelSymbols = (targetSymbol: SymbolKey): SymbolKey[] => {
  const reelSymbols: SymbolKey[] = [];
  const symbolsCount = 20;

  for (let i = 0; i < symbolsCount; i++) {
    reelSymbols.push(SYMBOL_KEYS[i % SYMBOL_KEYS.length]);
  }

  reelSymbols.push(targetSymbol);
  return reelSymbols;
};
