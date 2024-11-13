import Conversation from "../models/conversation.model.js";
import Message from "../models/message.models.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const senderId = req.user._id;
        const receiverId = req.params.id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: [],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        await newMessage.save();
        conversation.messages.push(newMessage._id);
        await conversation.save(); // Ensure the updated conversation is saved

        res.status(200).json(newMessage);
    } catch (error) {
        // Use .json to format the error message
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const getMessage = async (req, res) => {
    try {
        const senderId = req.user._id;
        const receiverId = req.params.id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
if(conversation)
{
    const message=await Message.find({
        _id:{$in:conversation.messages}
    })
    console.log(message);
    res.status(200).json(message)
}


    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
