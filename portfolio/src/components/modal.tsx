import { motion } from "framer-motion";

function Modal(props){

    return (
        <motion.div
            className="overlay"
            onClick={props.onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="modal-card"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1,  opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <h2 className="text-black text-2xl font-bold outfit-title bg-[#ce8c7b]">{props.title}</h2>
                <h2 className="text-black font-bold mt-5 text-left bg-[#dc9c8c] p-1 rounded-t-sm">What is it?</h2>
                <p className="text-black text-left outfit-text bg-[#e4c4b4] p-1">{props.modalDescription}</p>
                <h2 className="text-black font-bold mt-5 text-left bg-[#dc9c8c] p-1 rounded-t-sm">Stack</h2>
                <p className="text-black text-left outfit-text bg-[#e4c4b4] p-1">{props.modalStack}</p>
                <div className="mt-5 bg-[#dfaea7]">
                <a href={props.modalLink} className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank">GitHub Link</a>
                </div>
                <button className="mt-10 close-button" onClick={props.onClose}>Close</button>

            </motion.div>

        </motion.div>
    );
}

export default Modal