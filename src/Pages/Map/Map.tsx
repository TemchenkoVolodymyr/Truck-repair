import style from './Map.module.scss';

function Map() {
    const day : number = new Date().getDay();
    const daysOfWeek: string[] = [ 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота' , 'Неділя'];

    const openingTimes : string[] = [
        '8 00 – 19 00',
        '8 00 – 19 00',
        '8 00 – 19 00',
        '8 00 – 19 00',
        '8 00 – 19 00',
        '8 00 – 17 00',
        '- Зачиненно',
    ];

    return (
        <div id="map">
            <div className={style.block}>
                <div className={style.titleBlock}>
                    <h2 className={style.title}>Де ми знаходимося?</h2>
                    <h3>
                        <b>вул. Гетьмана Сагайдачного, 84/1, <br />Черкаси, Черкаська область, Україна.</b>
                    </h3>
                    <div className={style.openingTimes}>
                        {daysOfWeek.map((dayOfWeek: string, index: number) => (
                            <div key={dayOfWeek} className={day === index + 1 ? style.currentDay : ''}>
                                {dayOfWeek} {openingTimes[index]}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.mapBlock}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.6108867875687!2d32.0800781!3d49.41626379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b1e8919455d%3A0xf574e11dd1d48531!2z0JLQsNC90YLQsNC20L3QtSBUSVIg0KHQotCeINGDINCl0J7QnNCY!5e0!3m2!1sen!2suk!4v1698938457296!5m2!1sen!2suk"
                        width="700"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Map;