import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  name: {
    required: [true, 'Please enter project name'],
    type: String,
    trim: true,
    maxLength: [100, 'Project name cannot exceed 100 characters'],
  },
  description: {
    required: [true, 'Please enter project name'],
    type: String,
    trim: true,
  },
  technologies: [
    {
      type: String,
      required: true,
    },
  ],
  repository: [
    {
      url: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
        enum: ['Server', 'Client', 'Server-Client'],
      },
    },
  ],
  images: [
    {
      name: {
        required: true,
      },
      url: {
        required: true,
      },
    },
  ],
})

export default mongoose.model.Project ||
  mongoose.model('Project', projectSchema)
