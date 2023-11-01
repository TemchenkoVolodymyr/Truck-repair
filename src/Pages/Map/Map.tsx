import style from './Map.module.scss'
function Map() {
    return (
        <div>
            <div className={style.block}>
                <div className={style.titleBlock}>
                    <h2 className={style.title}>Where are we?</h2>
                </div>
                <div className={style.mapBlock}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.3906093361893!2d32.06571447599743!3d49.43933395964928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b7991ecb92f%3A0x164e446d02b45aa8!2sShevchenka%20Blvd%2C%20Cherkasy%2C%20Cherkas&#39;ka%20oblast%2C%20Ukraine%2C%2018000!5e0!3m2!1sen!2suk!4v1698864265547!5m2!1sen!2suk"
                        width="600" height="450" style={{border: 0}} allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Map