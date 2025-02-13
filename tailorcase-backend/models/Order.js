import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ name: String, quantity: Number, price: Number }],
  status: { type: String, default: 'Processing' }, // Processing, Shipped, Delivered
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
