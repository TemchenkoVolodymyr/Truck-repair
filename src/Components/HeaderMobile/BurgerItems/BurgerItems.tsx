import React, {useEffect, useState} from 'react';
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {getServices} from "../../../Requests/GetServices.ts";
import {IServices} from "../../Header/NavItems/ServiceItemsModal/ServiceItemsModal.tsx";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    to?: string,
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        as: to ? Link : undefined,
        to,
    } as MenuItem;
}

const BurgerItems: React.FC = () => {

    const [serviceItems, setServiceItems] = useState([])

    useEffect(() => {
        getServices().then(res => {
            setServiceItems(res)
        })
    }, [])
    const onClick: MenuProps['onClick'] = e => {
        // console.log('click ', e);
    };

    const items: MenuProps['items'] = [
        getItem(<Link style={{color:'white'}} to={'/'}>Головна</Link>, 'sub1', []),

        getItem(<NavLink style={{color: 'white'}} to={'services'}>Послуги</NavLink>, 'sub2', <AppstoreOutlined/>,

            serviceItems.map((item: IServices, index: number) => getItem(<NavLink to={'services'}>{item.service.title}</NavLink>, index, undefined, undefined, undefined, 'services'))
        ),
        getItem('Контакти', 'sub4', <SettingOutlined/>, [
            {label: <a href="tel:++380671350458">+38 067 1350458</a>
            , key: 2},
            {label: <Link style={{color:'white'}} to={'map'}>м. Черкаси, вул. Гетьмана Сагайдачного, 84/1</Link>, key: 3},
        ]),
        getItem(<Link style={{color:'white'}} to={'map'}>Як нас знайти</Link>, 'sub4')]
    return (
        <Menu
            onClick={onClick}
            style={{width: "100%",background:"black",color:'white',overflow:'auto',marginTop:'50px'}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};

export default BurgerItems;