import React from 'react';
import './PriceList.css';
import PriceListIMG1 from '../../assets/Price1.jpg';
import PriceListIMG2 from '../../assets/Price2.jpg';
import PriceListIMG3 from '../../assets/Price3.jpg';
import PriceListIMG4 from '../../assets/Price4.jpg';
import PriceListIMG5 from '../../assets/Price5.jpg';
import PriceListIMG6 from '../../assets/Price6.jpg';
import PriceListIMG7 from '../../assets/Price1.1.webp';
import PriceListIMG8 from '../../assets/Price1.2.jpg';
import PriceListIMG9 from '../../assets/Price1.3.jpg';
import PriceListIMG10 from '../../assets/Price1.4.jpg';
import PriceListIMG11 from '../../assets/Price1.5.jpg';

const procedures = [
    { name: "Шрам до 5см", price: "600-1000 грн" },
    { name: "Шрам від 5см", price: "1000-2500 грн" },
    { name: "Рубці пост-акне", price: "800-1500 грн" },
    { name: "Шрам після кесаревого", price: "1200-1500 грн" },
    { name: "Шрам після мамопластики", price: "1200-1500 грн" },
    { name: "Шрам після абдомінопластики", price: "1500-2500 грн" }
];

const PriceList = () => {
    return (
        <div className='cotainer_priceList'>
            <hr className='hr' />
            <h2 id='roztyazhki' className='container-tite'>РОЗТЯЖКИ</h2>

            <div className="card-container" >
                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG1})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Розтяжки</p>
                        <p className="text-body">Груди</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">900-1500 грн</span>
                    </div>
                </div>

                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG2})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Розтяжки</p>
                        <p className="text-body">Живіт</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">900-2000 грн</span>
                    </div>
                </div>

                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG3})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Розтяжки</p>
                        <p className="text-body">Бока</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">900-1500 грн</span>
                    </div>
                </div>

                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG4})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Розтяжки</p>
                        <p className="text-body">Стегна</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">900-2000 грн</span>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG5})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Розтяжки</p>
                        <p className="text-body">Сідниці</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">900-1300 грн</span>
                    </div>
                </div>

                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG6})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Розтяжки</p>
                        <p className="text-body">Гомілки</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">900-1300 грн</span>
                    </div>
                </div>
            </div>
            <h2 id='shram' className='container-tite'>ШРАМИ/РУБЦІ</h2>
            {/* Ось правильне додавання процедур */}
            <div className="price-list">
                {procedures.map((proc, index) => (
                    <div className="price-item" key={index}>
                        <div className="procedure">{proc.name}</div>
                        <div className="price">{proc.price}</div>
                    </div>
                ))}
            </div>

            <h2 id='holova' className='container-tite'>ГОЛОВА/ОБЛИЧЧЯ</h2>

            <div className="card-container">
                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG7})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Шкіра голови</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">1200 грн</span>
                    </div>
                </div>

                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG8})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Обличчя</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">1200 грн</span>
                    </div>
                </div>

                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG9})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Губи</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">500 грн</span>
                    </div>
                </div>

            </div>

            <div className="card-container">
                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG10})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Мезотерапія брів</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">700 грн</span>
                    </div>
                </div>

                <div className="cardList">
                    <div className="cardList-img" style={{ backgroundImage: `url(${PriceListIMG11})` }}></div>
                    <div className="cardList-info">
                        <p className="text-title">Кільця Венери</p>
                    </div>
                    <div className="cardList-footer">
                        <span className="text-title">1300 грн</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PriceList;
