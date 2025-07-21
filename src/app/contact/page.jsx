"use client"

import {useRevealer} from "../../../hooks/useRevealer";

const Page = () => {
    useRevealer()

    return (
        <>
            <div className="revealer"></div>
        <div className="contact">
            <div className="col">
                <h2>Contact Us</h2>
            </div>
            <div className="col1">
                <div className="contact-copy">
                    <h2>Collaborations</h2>
                    <h2>studio@salvia.com</h2>
                </div>
                <div className="contact-copy">
                    <h2>Inquiries</h2>
                    <h2>studio@salvia.com</h2>
                </div>

                <div className="socials">
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                    <p>Youtube</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Page
