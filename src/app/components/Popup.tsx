import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

const Popup = ({ isOpen, onClose, children }: { isOpen: any, onClose: any, children: ReactNode }) => {

  const handleClose = () => {
    onClose();
  };

  // ポップアップが表示されたら1秒後に閉じる
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        handleClose();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <div className="">

      {isOpen && (
        <motion.div
          initial={{ x:"-50%", y:"-50%" }}
          animate={{ opacity: [0,1,1,1,1,1,1,1,0], scale: [0,1.1,1,1,1,1,1,1,0.3]}}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="fixed top-[50%] left-[50%] bg-white p-[20px] shadow-lg z-[1000] rounded-lg"
        >
          <div>
            <div className="w-max mx-auto">
              <p className="mb-2 text-center">アイテムを入手しました</p>
              <div className="w-[20px] h-[2px] bg-black mx-auto"></div>
            </div>
            <div className="w-[300px] h-[200px] flex flex-col items-center justify-center">
              { children }
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Popup;