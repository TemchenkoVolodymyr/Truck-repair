import style from './ServicesPage.module.scss'
import {ServiceTableItem} from "./ServiceTableItem/ServiceTableItem.tsx";
import {ServicesTableList} from "./List.tsx";

export function ServicesTablePage() {
    return (
        <>
            <div className={'container'}>
                <h2 className={style.title}>ПРАЙС-ЛИСТ НА ПОСЛУГИ</h2>
                <table>
                    <caption>Услуги и цены</caption>
                    {ServicesTableList.map((item) => {
                        return <ServiceTableItem price={item.price} title={item.title}/>
                    })}
                </table>
            </div>
        </>
    )
}