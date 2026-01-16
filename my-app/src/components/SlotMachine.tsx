import { useState } from 'react';
import type { SymbolKey } from '../types';
import { REWARDS, SPIN_COST, INITIAL_BALANCE } from '../constants/symbols';
import { generateWeightPool, generateRandomSlots, checkWin } from '../utils/slotMachine';
import { SlotReel } from './SlotReel';
import './SlotMachine.css';

const WEIGHT_POOL = generateWeightPool();

export const SlotMachine = () => {
  const [balance, setBalance] = useState<number>(INITIAL_BALANCE);
  const [slots, setSlots] = useState<SymbolKey[]>(['seven', 'bar', 'cherry']);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [spinningSlots, setSpinningSlots] = useState<boolean[]>([false, false, false]);
  const [targetSlots, setTargetSlots] = useState<SymbolKey[]>(['seven', 'bar', 'cherry']);

  const handleSpin = () => {
    if (isSpinning || balance <= 0) return;

    setBalance((prev) => prev - SPIN_COST);
    setIsSpinning(true);
    setSpinningSlots([true, true, true]);

    const newSlots = generateRandomSlots(WEIGHT_POOL);
    setTargetSlots(newSlots);


    setTimeout(() => {
      setSpinningSlots([false, true, true]);
      setSlots([newSlots[0], slots[1], slots[2]]);
    }, 1500);

    setTimeout(() => {
      setSpinningSlots([false, false, true]);
      setSlots([newSlots[0], newSlots[1], slots[2]]);
    }, 2000);

    setTimeout(() => {
      setSpinningSlots([false, false, false]);
      setSlots(newSlots);
      setIsSpinning(false);

      if (checkWin(newSlots)) {
        const winningSymbol = newSlots[0];
        const reward = REWARDS[winningSymbol];
        setBalance((prev) => prev + reward);
      }
    }, 2500);
  };

  return (
    <div className="slot-machine">
      <h1 className="title">SLOT CASINO</h1>
      <div className="slots">
        <div className="slot-wrapper">
          <SlotReel slotIndex={0} isSpinning={spinningSlots[0]} targetSymbol={targetSlots[0]} />
        </div>
        <div className="slot-wrapper">
          <SlotReel slotIndex={1} isSpinning={spinningSlots[1]} targetSymbol={targetSlots[1]} />
        </div>
        <div className="slot-wrapper">
          <SlotReel slotIndex={2} isSpinning={spinningSlots[2]} targetSymbol={targetSlots[2]} />
        </div>
      </div>

      <button className="play-button" onClick={handleSpin} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Play'}
      </button>

      <div className="balance">Balance: {balance}$</div>    </div>
  );
};
