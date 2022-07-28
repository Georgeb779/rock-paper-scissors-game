import React from "react";

export default function Toggle({
  enabled,
  setEnabled
}: {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}) {
  return (
    <label className='inline-flex relative items-center mr-5 cursor-pointer'>
      <input
        type='checkbox'
        className='sr-only peer'
        checked={enabled}
        readOnly
      />
      <div
        onClick={() => {
          setEnabled(!enabled);
        }}
        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-bg-game-paper  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-game-paper"
      ></div>
      <span
        className='ml-2 text-sm font-medium  text-white'
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        ON
      </span>
    </label>
  );
}
