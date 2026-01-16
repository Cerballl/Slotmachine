import type { SymbolKey } from '../types';
import sevenIcon from '../assets/seven_icon.svg';
import cherryIcon from '../assets/cherry_icon.svg';
import barIcon from '../assets/bar_icon.svg';

export const SYMBOL_IMAGES: Record<SymbolKey, string> = {
  cherry: cherryIcon,
  seven: sevenIcon,
  bar: barIcon,
};

export const SYMBOL_WEIGHTS: Record<SymbolKey, number> = {
  cherry: 8,
  seven: 3,
  bar: 1,
};

export const SYMBOL_KEYS: SymbolKey[] = ['seven', 'cherry', 'bar'];

export const REWARDS: Record<SymbolKey, number> = {
  seven: 200,
  bar: 50,
  cherry: 5,
};

export const SPIN_COST = 10;
export const INITIAL_BALANCE = 1000;
