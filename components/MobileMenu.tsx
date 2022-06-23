import { AnimatePresence , motion} from 'framer-motion'
import React, { useContext, useState } from 'react'
import { MenuContext } from '../appContext/MenuContext'

function MobileMenu() {
    const { isExpand , setIsCloseMenu } = useContext(MenuContext);
    const [isHoverMenu , setIsHoverMenu] = useState<number>(-1);
    const [isExpandFeatures , setIsExpandFeatures] = useState<boolean>(false);
    const [isExpandCompany , setIsExpandCompany ] = useState<boolean>(false);
    return (
        <AnimatePresence>
            {isExpand && 
            <motion.div className="fixed w-screen h-screen flex justify-end bg-[#141414] bg-opacity-80 z-[1000] "
                animate={{opacity:1}}
                initial={{opacity:0}}
                exit={{opacity:0}}
                transition={{duration:0.3}}
            >
                <motion.div className="h-full overflow-y-auto w-[300px] bg-white flex flex-col px-6 relative"
                    animate={{x:0}}
                    initial={{x:1000}}
                    exit={{x:1000}}
                    transition={{duration:0.5}}
                >
                    <svg width={26} height={26} xmlns="http://www.w3.org/2000/svg" className="absolute top-5 right-5 cursor-pointer"
                        onClick={()=>{
                            setIsCloseMenu();
                        }}
                    >
                        <g fill="#151515" fillRule="evenodd">
                        <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                        <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
                        </g>
                    </svg>
                    <div className="mt-20 flex flex-col items-start gap-7">
                        <div className="flex items-center gap-3 text-[#686868] hover:text-black ease-linear duration-200 cursor-pointer outline-none"
                            onMouseEnter={()=>{
                                setIsHoverMenu(0);
                            }}
                            onMouseLeave={()=>{
                                setIsHoverMenu(-1);
                            }}
                            onClick={()=>{
                                setIsExpandFeatures(!isExpandFeatures);
                            }}
                        >
                            <p className="text-[16px]">Features</p>
                            {isExpandFeatures ?
                            <svg width={10} height={6} xmlns="http://www.w3.org/2000/svg">
                                <path stroke={`${isHoverMenu === 0 ?'#020202' : ' #686868'}`} className="ease-linear duration-200" strokeWidth={1.5} fill="none" d="m1 5 4-4 4 4" />
                            </svg>
                            :
                            <svg width={10} height={6} xmlns="http://www.w3.org/2000/svg">
                                <path stroke={`${isHoverMenu === 0 ?'#020202' : ' #686868'}`} className="ease-linear duration-200" strokeWidth={1.5} fill="none" d="m1 1 4 4 4-4" />
                            </svg>
                            }
                            
                        </div>
                        <AnimatePresence>
                            {isExpandFeatures &&
                                <motion.div className="flex flex-col items-center px-6 text-[#686868] text-[16px] gap-4"
                                    animate={{y:0 , opacity: 1 , scale:1}}
                                    initial={{y:-100 , opacity: 0 , scale:0}}
                                    exit={{y:-100 , opacity : 0 , scale:0}}
                                    transition={{duration:0.3}}
                                >
                                    <div className="flex items-center gap-4 w-[150px] justify-start">
                                        <div className="flex w-5 justify-center">
                                            <svg width={14} height={16} xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
                                                fill="#726CEE"
                                                />
                                            </svg>
                                        </div>
                                        <p>Todo List</p>
                                    </div>
                                    <div className="flex items-center gap-4 w-[150px] justify-start">
                                        <div className="flex w-5 justify-center">
                                            <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z"
                                                fill="#4BB1DA"
                                                />
                                            </svg>
                                        </div>
                                        <p>Calendar</p>
                                    </div>
                                    <div className="flex items-center gap-4 w-[150px] justify-start">
                                        <div className="flex w-5 justify-center">
                                            <svg width={13} height={17} xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z"
                                                fill="#EDD556"
                                                />
                                            </svg>
                                        </div>
                                        <p>Reminders</p>
                                    </div>
                                    <div className="flex items-center gap-4 w-[150px] justify-start">
                                        <div className="flex w-5 justify-center">
                                            <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z"
                                                fill="#8E4CB6"
                                                />
                                            </svg>
                                        </div>
                                        <p>Planning</p>
                                    </div>
                                </motion.div>
                            }
                        </AnimatePresence>

                        <div className="flex items-center gap-3 text-[#686868] hover:text-black ease-linear duration-200 cursor-pointer outline-none"
                            onMouseEnter={()=>{
                                setIsHoverMenu(0);
                            }}
                            onMouseLeave={()=>{
                                setIsHoverMenu(-1);
                            }}
                            onClick={()=>{
                                setIsExpandCompany(!isExpandCompany);
                            }}
                        >
                            <p className="text-[16px]">Company</p>
                            {isExpandCompany ?
                            <svg width={10} height={6} xmlns="http://www.w3.org/2000/svg">
                                <path stroke={`${isHoverMenu === 0 ?'#020202' : ' #686868'}`} className="ease-linear duration-200" strokeWidth={1.5} fill="none" d="m1 5 4-4 4 4" />
                            </svg>
                            :
                            <svg width={10} height={6} xmlns="http://www.w3.org/2000/svg">
                                <path stroke={`${isHoverMenu === 0 ?'#020202' : ' #686868'}`} className="ease-linear duration-200" strokeWidth={1.5} fill="none" d="m1 1 4 4 4-4" />
                            </svg>
                            }
                            
                        </div>
                        <AnimatePresence>
                            {isExpandCompany &&
                                <div className="flex flex-col items-center px-7 text-[#686868] text-[16px] gap-4">
                                    <motion.div className="flex items-center gap-4 w-[150px] justify-start"
                                        animate={{x:0 , opacity: 1}}
                                        initial={{x:-100 , opacity: 0}}
                                        exit={{x:-100 , opacity : 0}}
                                        transition={{duration:0.3}}
                                    >
                                        <p>History</p>
                                    </motion.div>
                                    <motion.div className="flex items-center gap-4 w-[150px] justify-start"
                                        animate={{x:0 , opacity: 1}}
                                        initial={{x:100 , opacity: 0}}
                                        exit={{x:100 , opacity : 0}}
                                        transition={{duration:0.5}}
                                    >
                                        <p>Our Team</p>
                                    </motion.div>
                                    <motion.div className="flex items-center gap-4 w-[150px] justify-start"
                                        animate={{x:0 , opacity: 1}}
                                        initial={{x:-100 , opacity: 0}}
                                        exit={{x:-100 , opacity : 0}}
                                        transition={{duration:0.7}}
                                    >
                                        <p>Blog</p>
                                    </motion.div>
                                </div>
                            }
                        </AnimatePresence>
                        <p className="text-[16px] text-[#686868] hover:text-black ease-linear duration-200 cursor-pointer">
                            Careers
                        </p>
                        <p className="text-[16px] text-[#686868] hover:text-black ease-linear duration-200 cursor-pointer">
                            About
                        </p>
                        <div className="w-full flex flex-col items-center gap-4">
                            <p className="text-[16px] text-[#686868] hover:text-black ease-linear duration-200 cursor-pointer">
                                Login
                            </p>
                            <div className="flex w-full justify-center items-center py-2 rounded-xl border-[2px] border-[#9a9a9a] hover:border-black text-[#686868] hover:text-black ease-linear duration-200 cursor-pointer">
                                Register
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            }
            
        </AnimatePresence>
    )
}

export default MobileMenu