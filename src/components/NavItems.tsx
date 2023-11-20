'use client';

import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";



const NavItems = () => {

    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== null;

    return (
        <div className='flex gap-4 h-full'>
            {
                PRODUCT_CATEGORIES.map((c, idx) => {
                    const handleOpen = () => {
                        if (activeIndex === idx) {
                            setActiveIndex(null)
                        } else {
                            setActiveIndex(idx)
                        }
                    }
                    const isOpen = idx === activeIndex;

                    return (
                        <NavItem key={c.value} category={c} handleOpen={handleOpen}
                            isOpen={isOpen} isAnyOpen={isAnyOpen} />
                    )
                })
            }
        </div>
    )
}

export default NavItems