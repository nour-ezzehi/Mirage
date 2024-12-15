import mongoose from 'mongoose';

const paiementSchema = new mongoose.Schema({
  Montant: {
    type: Number,
    min: 0,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  ModePaiement: {
    type: String,
    enum: ['Espèces', 'Virement', 'Carte Bancaire'], // Predefined payment modes
  },
  status: {
    type: String,
    required: true,
    enum: ['Paid', 'unpaid'],
    default: "unpaid", // Predefined payment status
  },
}, { timestamps: true });

const Paiment = mongoose.model('Paiment', paiementSchema);
export default Paiment;
