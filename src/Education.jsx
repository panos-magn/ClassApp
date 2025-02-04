import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ReadSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 p-6 text-center">
      {/* Τίτλος με animation */}
      <motion.h1
        className="text-4xl font-bold text-green-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Εδώ διαβάζουμε! 📖
      </motion.h1>

      {/* Περιγραφή */}
      <motion.p
        className="text-lg text-gray-700 mb-6 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Ανακάλυψε ιστορίες, λέξεις και μάθε μέσα από όμορφα παραδείγματα! 📚
      </motion.p>

      {/* Animation με ανοιχτό βιβλίο */}
      <motion.div
        className="w-32 h-32 bg-white shadow-lg rounded-lg flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        📖
      </motion.div>

      {/* Κουμπί μετάβασης στις ερωτήσεις */}
      <Link to="/questions">
        <motion.button
          className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Προχωράμε! 🚀
        </motion.button>
      </Link>
    </div>
  );
}
