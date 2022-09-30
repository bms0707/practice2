import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const sidebarData = [
    {
        title:"기본 관리",
        icon: <MdIcons.MdOutlineSettings/>,
        cName: 'nav-text',
        iconClosed: <IoIcons.IoIosArrowDown/>,
        childrens:[
            {
                title:"소메뉴1",
                path:"/menu1",
            },
            {
                title:"소메뉴2",
                path:"/menu2",
            },
            {
                title:"소메뉴3",
                path:"/menu3",
            },
            {
                title:"소메뉴4",
                path:"/menu4",
            },
            {
                title:"소메뉴5",
                path:"/menu5",
            }
        ]
    },
    {
        title:"회원 관리",
        icon: <RiIcons.RiUserLine/>,
        cName: 'nav-text',
        iconClosed: <IoIcons.IoIosArrowDown/>,
        childrens:[
            {
                title:"소메뉴1",
                path:"/menu1",
            },
            {
                title:"소메뉴2",
                path:"/menu2",
            },
            {
                title:"소메뉴3",
                path:"/menu3",
            },
            {
                title:"소메뉴4",
                path:"/menu4",
            },
            {
                title:"소메뉴5",
                path:"/menu5",
            }
        ]
    },
    {
        title:"1차 폴",
        icon: <AiIcons.AiOutlineUnorderedList/>,
        cName: 'nav-text',
        iconClosed: <IoIcons.IoIosArrowDown/>,
        childrens:[
            {
                title:"소메뉴1",
                path:"/menu1",
            },
            {
                title:"소메뉴2",
                path:"/menu2",
            },
            {
                title:"소메뉴3",
                path:"/menu3",
            },
            {
                title:"소메뉴4",
                path:"/menu4",
            },
            {
                title:"소메뉴5",
                path:"/menu5",
            }
        ]
    },
    {
        title:"2차 폴",
        icon: <BsIcons.BsListCheck/>,
        cName: 'nav-text',
        iconClosed: <IoIcons.IoIosArrowDown/>,
        childrens:[
            {
                title:"소메뉴1",
                path:"/menu1",
            },
            { 
                title:"소메뉴2",
                path:"/menu2",
            },
            {
                title:"소메뉴3",
                path:"/menu3",
            },
            {
                title:"소메뉴4",
                path:"/menu4",
            },
            {
                title:"소메뉴5",
                path:"/menu5",
            }
        ]
    },
]