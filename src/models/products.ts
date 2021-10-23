import mongoose from 'mongoose'

const daySummary = new mongoose.Schema({
  total: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

export default mongoose.model('DaySummary', daySummary)
