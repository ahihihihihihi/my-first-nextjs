'use client'

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import { useRouter } from 'next/navigation'
import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';
import { mutate } from 'swr'

interface IProps {
    blogs: IBlog[]
}

const AppTable = (props: IProps) => {
    const { blogs } = props

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false)

    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)
    const [blog, setBlog] = useState<IBlog | null>(null)

    const handleDeleteBlog = (id: number) => {
        if (confirm(`Do you want to delete this blog (id = ${id})`)) {
            fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },

            }).then(res => res.json())
                .then(res => {
                    if (res) {
                        toast.success("Delete blog succeed !");
                        mutate("http://localhost:8000/blogs")
                    }
                });
        }

    }

    const router = useRouter()

    return (
        <>
            <Container>
                <div
                    className='mb-3'
                    style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Table Blogs</h3>
                    <Button variant="secondary"
                        onClick={() => setShowModalCreate(true)}
                    >Add New</Button>
                </div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>
                                        <Button variant='primary'
                                            onClick={() => router.push(`/blogs/${item.id}`)}
                                        >View</Button>
                                        <Button variant='warning' className='mx-2'
                                            onClick={() => {
                                                setShowModalUpdate(true)
                                                setBlog(item)
                                            }}
                                        >Edit</Button>
                                        <Button variant='danger'
                                            onClick={() => handleDeleteBlog(item.id)}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
                <CreateModal
                    showModalCreate={showModalCreate}
                    setShowModalCreate={setShowModalCreate}
                />
                <UpdateModal
                    showModalUpdate={showModalUpdate}
                    setShowModalUpdate={setShowModalUpdate}
                    blog={blog}
                    setBlog={setBlog}
                />
            </Container>
        </>
    )
}

export default AppTable

