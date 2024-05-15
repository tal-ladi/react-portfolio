import React, {useState} from 'react';
import {Menubar} from 'primereact/menubar';
import {ROUTES} from "../../models/routes";
import {Avatar} from "primereact/avatar";
import {Dialog} from "primereact/dialog";

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    const headerElement = (
        <div className="inline-flex align-items-center gap-2">
            <Avatar
                image="./assests/images/tal.jpg"
                shape="circle"
            />
            <span className="font-bold white-space-nowrap">Tal Ladijinsky</span>
        </div>
    );

    const footerElement = (
        <div className="inline-flex gap-3 mr-2">
            <a className='pi pi-whatsapp text-color no-underline' href='https://wa.me/972526979295'/>
            <a className='pi pi-phone text-color no-underline' href='tel:052-697-9295' />
            <a className='pi pi-linkedin text-color no-underline' href="https://www.linkedin.com/in/tal-ladijinsky/"/>
        </div>
    );


    const templateRenderer = (item, onClick) => (
        <div className="p-menuitem-content">
            <a href={item.url} className="p-menuitem-link" onClick={onClick}>
                <span className={`p-menuitem-icon ${item.icon}`}></span>
                <span className="p-menuitem-text">{item.label}</span></a>
        </div>
    );

    const resumeDownload = () => {
        const pdfUrl = "./assests/pdf/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "cv.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: '/react-portfolio/#' + ROUTES.HOME
        },
        {
            label: 'Skills',
            icon: 'pi pi-fw pi-code',
            url: '/react-portfolio/#' + ROUTES.SKILLS
        },
        {
            label: 'Work Experience',
            icon: 'pi pi-fw pi-briefcase',
            template: (item) => templateRenderer(item, resumeDownload)
        },
        {
            label: 'Contact Me',
            icon: 'pi pi-fw pi-user',
            template: (item) => templateRenderer(item, () => setVisible(true))
        },
    ];

    const logo = <img className='border-circle' src='./assests/images/logo.jpg' alt='logo' width='48'/>


    return (
        <>
            <div className="card">
                <Menubar className='h-4rem' model={items} end={logo}/>
            </div>
            <Dialog className='lg:w-3 md:w-5 w-8' visible={visible} modal
                    header={headerElement} footer={footerElement} onHide={() => setVisible(false)}>
                    <div className='m-0 text-base sm:text-sm'>
                        <div className='mb-3'>Phone : 0526979295</div>
                        <div>Email: tallat4556@gmail.com</div>
                    </div>
            </Dialog>
        </>
    )
}