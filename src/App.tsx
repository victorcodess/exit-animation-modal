import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./modal";
import { MyComponent } from "./my-component";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center relative">
      <button
        className="hidden inline-flex w-full justify-center rounded-md bg-[#4f46e5] px-3 py-2 text-md font-bold text-white shadow-sm hover:bg-[#3f38b5] sm:w-auto"
        onClick={() => setOpen(!open)}
      >
        Open modal
      </button>

      <MyComponent />

      <AnimatePresence>{open && <Modal setOpen={setOpen} />}</AnimatePresence>
    </div>
  );
}

export default App;
