export const districtPortals = {
    "Angul": "https://angul.nic.in/notice_category/recruitment/",
    "Boudh": "https://boudh.nic.in/notice_category/recruitment/",
    "Balangir": "https://balangir.nic.in/notice_category/recruitment-and-results/",
    "Bargarh": "https://bargarh.nic.in/notice_category/recruitment-results/",
    "Balasore": "https://baleswar.nic.in/notice_category/recruitment/",
    "Bhadrak": "https://bhadrak.nic.in/notice_category/recruitments/",
    "Cuttack": "https://cuttack.nic.in/notice_category/recruitment/",
    "Deogarh": "https://deogarh.nic.in/notice_category/recruitment/",
    "Dhenkanal": "https://dhenkanal.nic.in/notice_category/recruitment/",
    "Ganjam": "https://ganjam.nic.in/notice_category/recruitment/",
    "Gajapati": "https://gajapati.nic.in/notice_category/recruitment/",
    "Jharsuguda": "https://jharsuguda.nic.in/notice_category/recruitment/",
    "Jajpur": "https://jajpur.nic.in/notice_category/recruitment/",
    "Jagatsinghpur": "https://jagatsinghpur.nic.in/notice_category/recruitment/",
    "Khordha": "https://khordha.nic.in/notice_category/recruitment/",
    "Keonjhar": "https://kendujhar.nic.in/notice_category/recruitment/",
    "Kalahandi": "https://kalahandi.nic.in/notice_category/recruitment-and-result/",
    "Kandhamal": "https://kandhamal.nic.in/notice_category/recruitment/",
    "Koraput": "https://koraput.nic.in/notice_category/recruitment/",
    "Kendrapara": "https://kendrapara.nic.in/notice_category/recruitment/",
    "Malkangiri": "https://malkangiri.nic.in/notice_category/recruitment/",
    "Mayurbhanj": "https://mayurbhanj.nic.in/notice_category/recruitments/",
    "Nabarangpur": "https://nabarangpur.nic.in/notice_category/recruitment/",
    "Nuapada": "https://nuapada.nic.in/notice_category/recruitment/",
    "Nayagarh": "https://nayagarh.nic.in/notice_category/recruitment/",
    "Puri": "https://puri.nic.in/notice_category/recruitment/",
    "Rayagada": "https://rayagada.nic.in/notice_category/recruitment/",
    "Sambalpur": "https://sambalpur.nic.in/notice_category/recruitment/",
    "Subarnapur": "https://subarnapur.nic.in/notice_category/recruitment-and-result/",
    "Sundargarh": "https://sundergarh.nic.in/notice_category/recruitment/"
}



export const latestLinks = () => {
    return districtPortals;
}

export const archiveLinks = () => {
    let archiveLinks = {}
    Object.keys(districtPortals).forEach((district) => {
       archiveLinks[district] = districtPortals[district].replace('notice_category', 'past-notices');
    });
    return archiveLinks;
}