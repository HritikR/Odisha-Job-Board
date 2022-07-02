import axios from 'axios'
import cheerio from 'cheerio'
import { latestLinks } from '../../../lib/districtportals'

/**
 * parameter Handler
 * Author: Hritik R
 * @param {*} string 
 * @returns Converted string into String [Wordcase]
 */
const parameterHandler = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default async function handler(req, res) {
  const { district } = req.query
  const currentDistrict = parameterHandler(district)
  let districtUrl = latestLinks()[currentDistrict]
  let data = await retriveNotices(districtUrl)
  let result = {}
  if (Object.keys(data).length != 0) {
    result = { code: 200, message: 'Notices available', notice: data }
  } else {
    result = { code: 404, message: 'No latest notices available' }
  }
  res.status(200).json(result)
}


/**
 * retrieve notices
 * Author: Hritik R
 * @param {*} url 
 * @returns object containing list of notices
 */
const retriveNotices = async (url) => {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  let isTable = $('table').length
  let noticeList = {}
  if (isTable > 0) {
    $('table tbody tr').each(function (i, e) {
      let notice = {}
      notice.title = $(this).find('td:nth-child(1)').text()
      let desc = $(this).find('td:nth-child(2)').text()
      notice.desc = (desc != "") ? desc : 'No description available'
      notice.start = $(this).find('td:nth-child(3)').text()
      notice.end = $(this).find('td:nth-child(4)').text()
      notice.file = $(this).find('.pdf-download-link').attr('href')
      noticeList[i] = notice
    });
  }
  return noticeList
}


export { retriveNotices, parameterHandler }
