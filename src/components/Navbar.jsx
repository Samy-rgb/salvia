"use client"
import { useTransitionRouter } from "next-view-transitions";
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Navbar = () => {
    const router = useTransitionRouter();
    const pathname = usePathname();

    function triggerPageTransition() {
        document.documentElement.animate([
            {
                clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)"
            },
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }
        ], {
            duration: 2000,
            easing: "cubic-bezier(0.9, 0, 0.1, 1)",
            pseudoElement: "::view-transition-new(root)",
        })
    }

    const handleNavigation = (path) => (e) => {
        if (path === pathname) {
            e.preventDefault();
            return;
        }

        router.push(path, {
            onTransitionReady: triggerPageTransition,
        });
    }

    return (
        <div className="nav">
            <div className="col">
                <div className="nav-logo">
                    <Link href="/" onClick={handleNavigation("/")}>salvia</Link>
                </div>
                <div className="col">
                    <div className="nav-items">
                        <div className="nav-item">
                            <Link href="/work" onClick={handleNavigation("/work")}>work</Link>
                        </div>
                        <div className="nav-item">
                            <Link href="/studio" onClick={handleNavigation("/studio")}>studio</Link>
                        </div>
                        <div className="nav-item">
                            <Link href="/contact" onClick={handleNavigation("/contact")}>contact</Link>
                        </div>
                    </div>
                    <div className="nav-copy">
                        <p>india, mh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
