import React, {useState} from "react";
import {PanelMenu} from "primereact/panelmenu";
import {Button} from 'primereact/button';
import './skills.css';

export default function Skills() {
    const menuItemRenderer = (item, icon) => (
        <div className="p-menuitem-content">
            <div className="p-menuitem-link h-3rem">
                <img src={'./assests/images/' + (icon || item.label.toLowerCase()) + '.svg'}
                     className="p-menuitem-icon pi pi-fw pi-align-left beat-animation"/>
                <span className="p-menuitem-text">{item.label}</span>
            </div>
        </div>
    );

    const items = [
        {
            key: '0',
            label: 'Frontend',
            icon: 'pi pi-fw pi-desktop',
            items: [
                {
                    key: '0_1',
                    label: 'Angular',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '0_2',
                    label: 'React',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '0_3',
                    label: 'Javascript',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '0_3',
                    label: 'TypeScript',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '0_3',
                    label: 'HTML',
                    template: (item) => menuItemRenderer(item, 'html5')
                },
                {
                    key: '0_3',
                    label: 'CSS',
                    template: (item) => menuItemRenderer(item, 'css3')
                },
            ]
        },
        {
            key: '1',
            label: 'Backend',
            icon: 'pi pi-fw pi-server',
            items: [
                {
                    key: '1_1',
                    label: 'JAVA',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '1_2',
                    label: 'Spring',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '1_3',
                    label: 'C',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '1_4',
                    label: 'C++',
                    template: (item) => menuItemRenderer(item, 'cplusplus')
                },
                {
                    key: '1_5',
                    label: 'C#',
                    template: (item) => menuItemRenderer(item, 'csharp')
                },
            ]
        },
        {
            key: '2',
            label: 'Database',
            icon: 'pi pi-fw pi-database',
            items: [
                {
                    key: '2_1',
                    label: 'Oracle Database',
                    template: (item) => menuItemRenderer(item, 'oracle')
                },
                {
                    key: '2_2',
                    label: 'MongoDB',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '2_3',
                    label: 'PostgreSQL',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '2_4',
                    label: 'Vertica',
                    template: (item) => menuItemRenderer(item)
                },
            ]
        },
        {
            key: '3',
            label: 'Data Science',
            icon: 'pi pi-fw pi-chart-bar',
            items: [
                {
                    key: '3_1',
                    label: 'Python',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '3_2',
                    label: 'Pandas',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '3_3',
                    label: 'Keras',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '3_4',
                    label: 'Numpy',
                    template: (item) => menuItemRenderer(item)
                },
                {
                    key: '3_5',
                    label: 'Airflow',
                    template: (item) => menuItemRenderer(item, 'apacheairflow')
                },
                {
                    key: '3_6',
                    label: 'Tableau',
                    template: (item) => menuItemRenderer(item)
                },
            ]
        },

    ];

    const [expandedKeys, setExpandedKeys] = useState({});

    const toggleAll = () => {
        if (Object.keys(expandedKeys).length) {
            collapseAll();
        } else {
            expandAll();
        }
    };

    const expandAll = () => {
        items.forEach(expandNode);
        setExpandedKeys({...expandedKeys});
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node) => {
        if (node.items && node.items.length) {
            expandedKeys[node.key] = true;

            node.items.forEach(expandNode);
        }
    };

    return (
        <div className="card flex flex-column align-items-center gap-3 mt-3">
            <Button type="button" label="Toggle All" text onClick={() => toggleAll()}/>
            <PanelMenu model={items} expandedKeys={expandedKeys} onExpandedKeysChange={setExpandedKeys}
                       className="w-full md:w-30rem" multiple/>
        </div>
    )
}