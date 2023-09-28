import React from 'react'

export default function Button({ text, buttonType, onClick }: { 
    text: string; 
    buttonType?: string; 
    onClick?: () => void; 
  }) {
    return (
      <button
        className={`flex justify-center gap-2 border-2 bg-thymia-purple text-white font-bold tracking-widest p-3 rounded transition ease-in-out duration-150 hover:scale-110 ${buttonType}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }