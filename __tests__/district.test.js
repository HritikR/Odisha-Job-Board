/**
* @jest-environment node
*/

import axios from 'axios';
import { latestLinks, archiveLinks } from "../lib/districtportals";
const latestUrls = latestLinks();
const archiveUrls = archiveLinks();

 describe('Checks if District Portal page is available', () => {
    Object.keys(latestUrls).forEach((district) => {
        it(`${district}`, () => {
            return axios.get(latestUrls[district]).then((response) => {
                expect(response.status).toBe(200)
            })
        })
    })

 })
