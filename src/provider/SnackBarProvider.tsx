/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, type ReactNode } from 'react';
import {
  SnackBarContext,
  type SnackBarKind,
  type SnackBarMessage,
} from '../context/SnackBarContext';

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<SnackBarMessage[]>([]);

  const push = useCallback((text: string, kind: SnackBarKind) => {
    const id = Math.random().toString(36).slice(2, 9);
    const msg: SnackBarMessage = { id, text, kind };
    setMessages((s: any) => [msg, ...s]);

    setTimeout(() => {
      setMessages((s: any[]) => s.filter((m) => m.id !== id));
    }, 2000);
  }, []);

  const showSuccess = (text: string) => push(text, 'success');
  const showError = (text: string) => push(text, 'error');
  const showInfo = (text: string) => push(text, 'info');

  return (
    <SnackBarContext.Provider value={{ showSuccess, showError, showInfo }}>
      {children}
      <div className="fixed bottom-6 right-6 z-60 flex flex-col gap-3">
        {messages.map((m) => (
          <div
            key={m.id}
            className={
              'min-w-[220px] max-w-sm px-6 py-4 rounded-xl shadow-lg text-md font-medium ' +
              (m.kind === 'success' ? 'bg-green-600 text-white'
              : m.kind === 'error' ? 'bg-red-600 text-white'
              : 'bg-blue-600 text-white')
            }
          >
            {m.text}
          </div>
        ))}
      </div>
    </SnackBarContext.Provider>
  );
};
