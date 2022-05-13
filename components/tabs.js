import React from 'react'

export default function Tabs(props) {
    const classOptions = {
        activeTabGroup : 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group',
        inactiveTabGroup : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group',
        activeTabIcon : 'text-blue-600 dark:text-blue-500',
        inactiveTabIcon : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
      }
    return (
        <div data-testid="tabs" className="flex justify-center border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                    <a className={`tap-highlight-none inline-flex p-4 rounded-t-lg border-b-2 ${props.currentTab === 1 ? classOptions.activeTabGroup : classOptions.inactiveTabGroup}`}
                        onClick={e => {
                            props.setCurrentTab(1);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`mr-2 w-4 h-4 ${props.currentTab === 1 ? classOptions.activeTabIcon : classOptions.inactiveTabIcon}  sm:w-5 h-5`}
                            fill="none"
                            viewBox="0 0 20 20"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                        </svg>
                        Latest Notifications
                    </a>
                </li>
                <li className="mr-2">
                    <a className={`tap-highlight-none inline-flex p-4 rounded-t-lg border-b-2 ${props.currentTab === 2 ? classOptions.activeTabGroup : classOptions.inactiveTabGroup}`}
                        onClick={e => {
                            props.setCurrentTab(2);
                        }} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`mr-2 w-4 h-4 ${props.currentTab === 2 ? classOptions.activeTabIcon : classOptions.inactiveTabIcon}  sm:w-5 h-5`}
                            fill="none"
                            viewBox="0 0 20 20"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            />
                        </svg>
                        Old Notifications
                    </a>
                </li>
            </ul>
        </div>
    )
}
