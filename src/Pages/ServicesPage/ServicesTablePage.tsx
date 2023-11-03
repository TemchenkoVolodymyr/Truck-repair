import style from './ServicesPage.module.scss'
import {ServiceTableItem} from "./ServiceTableItem/ServiceTableItem.tsx";
import {useEffect, useState} from "react";
import {IServices} from "../../Components/Header/NavItems/ServiceItemsModal/ServiceItemsModal.tsx";
import {getServices} from "../../Requests/GetServices.ts";

export function ServicesTablePage() {
    const [services , setServices ] = useState<IServices[] | []>([]);

    useEffect(() => {
        getServices(setServices)
    }, [])

    return (
        <>
            <div className={'container'}>
                <h2 className={style.title}>ПРАЙС-ЛИСТ НА ПОСЛУГИ</h2>
                <table>
                    <caption>Услуги и цены</caption>
                    {services.map((item) => {
                        return <ServiceTableItem price={item.service.price} title={item.service.title}/>
                    })}
                </table>
            </div>
        </>
    )
}