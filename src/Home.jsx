import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-6 text-center">
      {/* Τίτλος με animation */}
      <motion.h1
        className="text-4xl font-bold text-blue-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Καλώς ήρθες στο μαγικό κόσμο των λέξεων! 📚
      </motion.h1>

      {/* Περιγραφή */}
      <motion.p
        className="text-lg text-gray-700 mb-6 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Εξερεύνησε τις λέξεις, μάθε τα μυστικά τους και παίξε με τη γλώσσα! 📝✨
      </motion.p>

      {/* Animation με βιβλίο */}
      <motion.div
        className="w-32 h-32 bg-white shadow-lg rounded-lg flex items-center justify-center"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        📖
      </motion.div>

      {/* Κουμπί έναρξης */}
      <Link to="/education">
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Ξεκινάμε! 🚀
        </motion.button>
      </Link>
    </div>
  );
}
