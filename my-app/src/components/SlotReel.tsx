import type { SymbolKey } from '../types';
import { SYMBOL_IMAGES } from '../constants/symbols';
import { getReelSymbols } from '../utils/slotMachine';
import './SlotReel.css';

interface SlotReelProps {
  slotIndex: number;
  isSpinning: boolean;
  targetSymbol: SymbolKey;
}

export const SlotReel = ({ slotIndex, isSpinning, targetSymbol }: SlotReelProps) => {
  const reelSymbols = getReelSymbols(targetSymbol);
  const targetIndex = reelSymbols.length - 1;
  const finalPosition = -(targetIndex * 150);

  return (
    <div className={`reel-container ${isSpinning ? 'spinning' : ''}`}>
      <div
        className="reel"
        style={!isSpinning ? { transform: `translateY(${finalPosition}px)` } : {}}
      >
        {reelSymbols.map((symbol, index) => (
          <div key={`${slotIndex}-${index}`} className="reel-symbol">
            <img src={SYMBOL_IMAGES[symbol]} alt={symbol} />
          </div>
        ))}
      </div>
    </div>
  );
};
