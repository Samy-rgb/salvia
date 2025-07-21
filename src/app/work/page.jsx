"use client"

import {useRevealer} from "../../../hooks/useRevealer";

const Work = () => {
    useRevealer()

    return (
        <>
            <div className="revealer"></div>
        <div className="work">
            <h1>selected work</h1>

            <div className="projects">
                <img src="/salvia2.jpg" alt=""/>
                <img src="/salvia3.jpg" alt=""/>
                <img src="/salvia4.jpg" alt=""/>
                <img src="/salvia5.jpg" alt=""/>
            </div>
        </div>
        </>
    )
 }

 export default Work;