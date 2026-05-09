const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    // Cambiamos localhost por 127.0.0.1
    await mongoose.connect("mongodb://127.0.0.1:27017/backend_clase");
    console.log("✅ Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error.message);
    process.exit(1); // Detiene el servidor si no hay base de datos
  }
};

module.exports = connectMongoDB;
