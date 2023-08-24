import { SearchIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import { useState,useEffect,useRef, useContext, ChangeEvent } from "react"
import { Link } from "react-router-dom"
const TypeCourse = () => {
    return (
        <section>
        <div className='flex justify-between items-center mb-7 md:block'>
            <div>
                <Link to='#' className='bg-sky-600 text-white py-2 px-2 rounded-[5px] cursor-pointer hover:brightness-90 duration-200'>Add Type Course</Link>
            </div>
            <div className='md:mt-5'>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='#8AAAE5' />}
                    />
                    <Input
                        type='search'
                        variant='outline'
                        placeholder='Tìm menu...'
                        className='cursor-pointer text-maintext'
                        htmlSize={25} width='auto'
                        focusBorderColor='#8AAAE5'
                    
                    
                    />
                </InputGroup>
            </div>
        </div>
        <section>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-maintext">
                    <thead className="text-xs text-white uppercase bg-sky-600">
                        <tr>
                            <th scope="col" className="py-3 px-6 w-[5%]">
                                STT
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Course Types
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Created date
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
                        
                            {/* <tr className="border-b" >
                                <td className="py-2 px-6">
                                    <Link to='/admin/admin-thucdon/capnhat' className="font-medium text-blue-600 hover:underline">
                                        <span >Sửa</span>
                                    </Link>
                                </td>
                                <td className="py-2 px-6">
                                    <span className="font-medium text-blue-600 hover:underline cursor-pointer">Xóa</span>
                                </td>
                            </tr> */}
                        
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
    )
}
export default TypeCourse;