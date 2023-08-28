import { SearchIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import { useState,useEffect,useRef, useContext, ChangeEvent } from "react"
import { Link } from "react-router-dom"
const Blog = () => {
    return (
        <section>
            <div className='flex justify-between items-center mb-7 md:block'>
                <div>
                    <Link to='#' className='bg-custom text-white py-2 px-2 rounded-[5px] cursor-pointer hover:brightness-90 duration-200'>Add Blog</Link>
                </div>
                <div className='md:mt-5'>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='#00bce4' />}
                        />
                        <Input
                            type='search'
                            variant='outline'
                            placeholder='Search'
                            className='cursor-pointer text-maintext'
                            htmlSize={25} width='auto'
                            focusBorderColor='#00bce4'
                        
                        
                        />
                    </InputGroup>
                </div>
            </div>
            <section>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-maintext">
                        <thead className="text-xs text-white uppercase bg-custom">
                            <tr>
                                <th scope="col" className="py-3 px-6 w-[5%]">
                                    STT
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Course
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Course Types
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Create date
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Modified date
                                </th>
                                <th scope="col" className="py-3 px-6 w-[5%]">
                                    Sửa
                                </th>
                                <th scope="col" className="py-3 px-6 w-[5%]">
                                    Xóa
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {menu.filter(item => {
                                if (input === '') return item
                                else if (item.menuType.toLowerCase().includes(input.toLowerCase())) return item
                                return null
                            }).map((item, index) => (
                                <tr className="border-b" key={item._id}>
                                    <td className="py-2 px-6 font-medium whitespace-nowrap">{index + 1}</td>
                                    <td className="py-2 px-6">{item.menuType}</td>
                                    <td className="py-2 px-6">
                                        <img className='h-[50px] w-[50px] object-cover rounded-[10px]' src={item.imgMenu} alt={item.menuType} loading='lazy' />
                                    </td>
                                    <td className="py-2 px-6">
                                        <Link to='/admin/admin-thucdon/capnhat' className="font-medium text-blue-600 hover:underline">
                                            <span >Sửa</span>
                                        </Link>
                                    </td>
                                    <td className="py-2 px-6">
                                        <span className="font-medium text-blue-600 hover:underline cursor-pointer">Xóa</span>
                                    </td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </section>
            <div>
                <Modal>
                    <ModalOverlay />
                    <ModalContent className='text-maintext'>
                        <ModalHeader>Xóa thực đơn</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Bạn muốn xóa thực đơn này?
                        </ModalBody>
                        <ModalFooter>
                            <Button >Xóa</Button>
                            <Button mr={3} ml={2} >
                                Hủy
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </section>
    );
}
export default Blog;