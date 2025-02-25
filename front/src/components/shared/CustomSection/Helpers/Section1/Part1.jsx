import { motion, AnimatePresence } from 'framer-motion';

const Part1 = ({ stepSelection }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div 
            className="part1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <AnimatePresence mode="wait">
                <motion.div 
                    key={stepSelection?.step}
                    className="image"
                    variants={itemVariants}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.img 
                        src={stepSelection?.img} 
                        alt={stepSelection?.heading}
                        // whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={stepSelection?.step}
                    className="data-stack"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h2>{stepSelection?.step}</motion.h2>
                    <motion.h4>{stepSelection?.heading}</motion.h4>
                    <motion.p className="font-sm">{stepSelection?.content}</motion.p>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Part1;