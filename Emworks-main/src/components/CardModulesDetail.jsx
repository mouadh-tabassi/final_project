import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CardDetailModal({ isOpen, onClose, category }) {
    if (!isOpen) return null;

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.75,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.2 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const categoryDetails = {
        emag: {
            title: "Electromagnetic Systems",
            description: "Comprehensive study of electromagnetic principles and applications",
            details: [
                "Maxwell's equations and their applications",
                "Electromagnetic wave propagation",
                "Magnetic field analysis",
                "Electric field computations",
                "Industrial applications"
            ]
        },
        rf: {
            title: "RF & Microwave Technology",
            description: "Advanced radio frequency and microwave systems",
            details: [
                "RF circuit design",
                "Microwave transmission systems",
                "Antenna theory and design",
                "Signal propagation",
                "Wireless communications"
            ]
        },
        motors: {
            title: "Electric Motors",
            description: "Industrial motor systems and controls",
            details: [
                "AC/DC motor principles",
                "Motor control systems",
                "Power electronics",
                "Drive systems",
                "Industrial applications"
            ]
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 px-4"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 p-8"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold text-indigo-600 mb-4">{categoryDetails[category].title}</h2>
                            <p className="text-gray-600 mb-4">{categoryDetails[category].description}</p>
                            
                            <div className="mb-6">
                                <h3 className="font-semibold text-lg mb-2">Key Topics:</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    {categoryDetails[category].details.map((detail, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="text-gray-700"
                                        >
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <motion.button 
                                onClick={onClose}
                                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default CardDetailModal;