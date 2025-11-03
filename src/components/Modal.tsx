import type { FC, ReactNode } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal: FC<Props> = ({ children, onClose }) => {
  return (
    <div className="bg-black/50 fixed inset-0 flex justify-center items-center z-50 ">
      <div className="bg-white p-6 rounded-xl shadow-xl relative min-w-[320px]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3"
        >
          <IoIosCloseCircle className="text-red-500 size-7 hover:drop-shadow-[0_0_13px_#dc2626] transition" />
        </button>
        {children}
      </div>
    </div>
  );
};
