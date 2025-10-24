const MessageService = require('./services/messageService.js');
const messageService = new MessageService();

module.exports = (io) => {
    
    io.on('connection', async (socket) => {
        
        try {
            const messages = await messageService.getAll();
            socket.emit('all-messages', messages);
        } catch (error) {
             console.error("Error al cargar mensajes iniciales:", error);
        }
        
        socket.on('writing', (username) => {
             socket.broadcast.emit('writing', username);
        });

        socket.on('new-message', async (data) => {
            try {
                const { username, message, respondWithAI } = data;
                
                const userMessage = await messageService.create({ username, message }); 
                io.emit('new-message', userMessage); 

                if (respondWithAI) {
                    
                    socket.broadcast.emit('writing', ' IA'); 

                    const aiResponseText = await messageService.getOllamaResponse(message);
                    
                    const aiMessageData = {
                        username: ' AI-Ollama', 
                        message: aiResponseText
                    };

                    const aiMessage = await messageService.create(aiMessageData);
                    io.emit('new-message', aiMessage);
                } 
                
            } catch (error) {
                console.error("Error en el flujo de chat con IA:", error);
            }
        });
    });
};