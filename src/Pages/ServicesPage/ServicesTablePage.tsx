import style from './ServicesPage.module.scss';
import { useEffect, useState } from "react";
import { IServices } from "../../Components/Header/NavItems/ServiceItemsModal/ServiceItemsModal.tsx";
import { getServices } from "../../Requests/GetServices.ts";
import { SearchInput } from "../../Helpers/SearchInput/SearchInput.tsx";
import {ServiceTableItem} from "./ServiceTableItem/ServiceTableItem.tsx";

function ServicesTablePage() {
    const [services, setServices] = useState<IServices[] | []>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredServices, setFiltered] = useState<IServices[] | []>([]);

    useEffect(() => {
        getServices(setServices);
    }, []);

    useEffect(() => {
        const filteredServices = services.filter((item) =>
            item.service.title.toLowerCase().includes(inputValue.toLowerCase().trim())
        );
        setFiltered(filteredServices);
    }, [inputValue]);

    return (
        <div className="container">
            <h2 className={style.title}>ПРАЙС-ЛИСТ НА ПОСЛУГИ</h2>
            <div className={style.input}>
                <SearchInput callback={setInputValue} value={inputValue} placeholder="Знайти послугу" />
            </div>
            <table>
                {filteredServices.length === 0 && inputValue ? (
                    <h2 className={style.notFound}>
                        Вибачте, але даної <span className={style.span}>послуги</span> у нас немає
                    </h2>
                ) : null}
                {filteredServices.length === 0 && !inputValue
                    ? services.map((item) => (
                        <ServiceTableItem key={item.service.title} price={item.service.price} title={item.service.title} />
                    ))
                    : filteredServices.map((item) => (
                        <ServiceTableItem key={item.service.title} price={item.service.price} title={item.service.title} />
                    ))}
            </table>
        </div>
    );
}

export default ServicesTablePage;
