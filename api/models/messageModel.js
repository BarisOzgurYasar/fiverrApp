import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    ConversationId: {
      type: String,
      required: true,
    },
    UserId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Message', messageSchema); // burda tırnak içinde yazan User db de yarattığın değişkenin adı
