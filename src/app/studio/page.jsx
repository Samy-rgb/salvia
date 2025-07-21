"use client"

import {useRevealer} from "../../../hooks/useRevealer";

const Page = () => {
    useRevealer()

    return (
        <>
            <div className="revealer"></div>
        <div className="studio">
            <div className="col">
                <h2>Our Story</h2>
            </div>
            <div className="col1">
                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </h2>
                <div className="about-img">
                    <img src="/salvia1.jpg" alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Page
