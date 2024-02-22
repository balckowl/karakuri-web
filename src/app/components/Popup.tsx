import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

const Popup = ({ isOpen, onClose, children, popupTime=2 }: { isOpen: any, onClose: any, children: ReactNode, popupTime?:number }) => {

  const handleClose = () => {
    onClose();
  };

  // ポップアップが表示されたら1秒後に閉じる
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        handleClose();
      }, popupTime * 1000);

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
          transition={{ duration: popupTime, ease: "easeOut" }}
          className="fixed top-[50%] left-[50%] bg-white dark:bg-[#020817] p-[20px] shadow-lg z-[1000] rounded-lg"
        >
              { children }

        </motion.div>
      )}

    </div>
  );
};

export default Popup;