import React from 'react'

const Footer = () => {
    return (
        <div className='bg-dark text-light p-4'>
            <h6 className='text-center'>
                &copy; {new Date().getFullYear()}
                <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXXX' className='text-light'>
                    &nbsp;Devang Vartak.
                </a>
            </h6><h6 className='text-center'>All Rights Reserved.'</h6>
        </div>
    )
}

export default Footer