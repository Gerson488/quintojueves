const Message = require('../models/messageModel');

class MessageService {
    constructor() {}

    async getAll() {
        // Mejor práctica: Ordenar mensajes por creación ascendente (el más antiguo primero)
        const messages = await Message.find().sort({ createdAt: 1 }); 
        return messages;
    }

    async create(msg) {
        const message = new Message(msg);
        return await message.save();
    }
    async getOllamaResponse(prompt) {
        const ollamaUrl = 'http://localhost:11434/api/generate';
        const modelName = 'mistral'; 

        const requestBody = {
            model: modelName,
            prompt: prompt,
            stream: false
        };

        try {
            const response = await fetch(ollamaUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`Error en la API de Ollama: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data.response.trim(); 

        } catch (error) {
            console.error("Error al obtener respuesta de Ollama:", error.message);
            return "Lo siento, la IA no está disponible o no pudo procesar tu solicitud. Asegúrate que 'ollama serve' esté ejecutándose.";
        }
    }
}

module.exports = MessageService;