'use client'

import AppTable from '../components/app.table';
// import { useEffect } from 'react'
import useSWR from 'swr'

const BlogsPage = () => {

    const fetcher = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/blogs",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    //test error
    // let abc: any = []
    // console.log(abc[5][7])


    // console.log(">>> check data: ", data)


    // useEffect(() => {
    //   const fetchData = async () => {
    //     const res = await fetch("http://localhost:8000/blogs");
    //     const data = await res.json();

    //     console.log(">>> check res: ", data)
    //   }
    //   fetchData();
    // }, [])
    return (
        <>
            <AppTable
                blogs={data?.sort((a: any, b: any) => b.id - a.id)}
            />
        </>
    )
}

export default BlogsPage

