import React, {useEffect, useState} from 'react';
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {getServices} from "../../../Requests/GetServices.ts";
import {IServices} from "../../Header/NavItems/ServiceItemsModal/ServiceItemsModal.tsx";
import {Link} from "react-scroll";
import {NavLink, useNavigate} from "react-router-dom";


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
    const navigate = useNavigate()

    useEffect(() => {
        getServices().then(res => {
            setServiceItems(res)
        })
    }, [])
    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
    };
    const mapNavigation = () => {
        navigate('/')

        setTimeout(() => {
            const element = document.getElementById('map');
            if(element){
                console.log(element)
                window.scrollTo({
                    top: element?.offsetTop,
                    behavior: 'smooth'
                })
            }

        }, 300)
    }
    const items: MenuProps['items'] = [
        getItem(<NavLink to={'/'}>Головна</NavLink>, 'sub1', []),

        getItem(<NavLink style={{color: 'white'}} to={'services'}>Послуги</NavLink>, 'sub2', <AppstoreOutlined/>,

            serviceItems.map((item: IServices, index: number) => getItem(<NavLink
                to={'services'}>{item.service.title}</NavLink>, index, undefined, undefined, undefined, 'services'))
        ),
        getItem('Контакти', 'sub4', <SettingOutlined/>, [
            {
                label: <a href="tel:+380671350458">+38 067 1350458</a>
                , key: 2
            },
            {
                label: <Link onClick={mapNavigation} style={{color: 'white'}} to={'#'}>м. Черкаси, вул. Гетьмана Сагайдачного, 84/1</Link>,
                key: 3
            },
        ]),
        getItem(<Link onClick={mapNavigation} style={{color: 'white'}} to={'#'}>Як нас знайти</Link>, 'sub8')]
    return (
        <Menu
            onClick={onClick}
            style={{width: "100%", background: "black", color: 'white', overflow: 'auto', marginTop: '80px'}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};

export default BurgerItems;