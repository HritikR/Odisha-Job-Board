import React from 'react'
import { districtPortals } from '../lib/districtportals'
import Table from './table'

export default function Pages(props) {
    return (
        <>
            <div data-testid="latest" className={props.currentTab === 1 ? "block" : "hidden"}>
                {Object.keys(districtPortals).map((district, index) => {
                    return <Table key={`latest_${index}`} district={district} type="latest" />
                })}
            </div>

            <div data-testid="archive" className={props.currentTab === 2 ? "block" : "hidden"}>
                {Object.keys(districtPortals).map((district, index) => {
                    return <Table key={`archived_${index}`} district={district} type="archive" />
                })}
            </div>
        </>
    )
}
