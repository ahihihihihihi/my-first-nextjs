'use client'

import { SyncLoader } from "react-spinners";


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.

    return (
        <div className="sweet-loading" style={{ textAlign: "center", paddingTop: "40vh" }}>
            <SyncLoader
                loading={true}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
                color="#40debe"
                margin={2}
            />
        </div>
    )
}