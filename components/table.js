import useSWR from 'swr'
import Loader from './loader'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Table(props) {
    let noticeList = {}
    const { data, error } = useSWR(`/api/${props.type}/${props.district}`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <Loader district={props.district} />
    noticeList = data.notice
    return (
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg border border-gray-200 my-5 dark:bg-gray-800">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-800 uppercase dark:text-gray-200">{props.district}</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:text-gray-200 dark:bg-gray-700">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left break-all">Title</div>
                                </th>
                                <th className="hidden p-2 whitespace-nowrap md:block">
                                    <div className="font-semibold text-left">Description</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Start Date</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">End Date</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">File</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {(data.code == 200) ?
                                Object.values(noticeList).map((notice, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="p-2 whitespace-pre-line w-1/2">
                                                <div className="flex items-center">
                                                    <div className="font-medium text-gray-800 dark:text-gray-200"> {notice.title}</div>
                                                </div>
                                            </td>
                                            <td className="hidden p-2 whitespace-pre-line md:block">
                                                <div className="text-left dark:text-gray-200"> {notice.desc}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500 dark:text-green-500">
                                                    {notice.start}
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-center font-medium text-red-500 dark:text-red-500">
                                                    {notice.end}
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-center text-blue-500 dark:text-blue-500"><a href={notice.file} target="_blank" rel="noreferrer">View</a></div>
                                            </td>
                                        </tr>
                                    )
                                })
                                : (<tr><td className="p-2 whitespace-pre-line w-1/2 text-center" colSpan="5">
                                    <div className="font-medium text-gray-800 dark:text-gray-400"> {data.message}</div>
                                </td></tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}