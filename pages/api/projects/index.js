import nc from 'next-connect'

import dbConnect from '../../../config/dbConnect'
import { allProjects } from '../../../controllers/projectControllers'

const handler = nc()
dbConnect()

handler.get(allProjects)

export default handler
