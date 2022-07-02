import { archiveLinks } from '../../../lib/districtportals'
import { retriveNotices, parameterHandler } from "../latest/[district]";

export default async function handler(req, res) {
    const { district } = req.query
    const currentDistrict = parameterHandler(district)
    let districtUrl = archiveLinks()[currentDistrict]
    let data = await retriveNotices(districtUrl)
    let result = {}
    if (data.length != 0) {
        result = { code: 200, message: 'Notices available', notice: data }
    } else {
        result = { code: 404, message: 'No archived notices available' }
    }
    res.status(200).json(result)
}


