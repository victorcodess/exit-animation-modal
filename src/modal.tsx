import { motion } from "framer-motion";

interface ModalProps {
  setOpen: (open: boolean) => void;
}

const Modal = ({ setOpen }: ModalProps) => {
  return (
    <motion.div
      className="overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 mx-auto my-auto right-0 left-0 z-50 justify-center items-center w-full bg-black/50 md:inset-0 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="h-[270px] w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg flex flex-col items-center justify-center px-4 pb-4 pt-5 sm:p-6 sm:pb-4 gap-5"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <div className="bg-green-100 rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="text-green-700 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </div>
        <h4 className="font-semibold text-lg">Payment successful</h4>
        <p className="text-center w-[300px] -mt-2 leading-snug text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse
          dolorem officia.
        </p>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-[#4f46e5] px-3 py-2 text-white shadow-sm hover:bg-[#3f38b5] transition-colors text-md font-bold "
          onClick={() => setOpen(false)}
        >
          Close modal
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
