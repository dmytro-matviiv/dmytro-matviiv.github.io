import './Content.css';
import React from 'react';
import image1 from '../../assets/Whywe1.jpg';
import image2 from '../../assets/Whywe2.jpg';
import image3 from '../../assets/micronid_photo.jpg';


const Content = () => {
  return (
    <div id='whywe'>
      <h2 className="container-tite">ЧОМУ САМЕ МИ?</h2>
      <div className="card-container">
        <div className="card">
          <div className="image" style={{ backgroundImage: `url(${image1})` }}></div> {/* Вставляємо картинку як фон */}
          <div className="content">
            <a href="#">
              <span className="title">
                Підтвердження професіоналізму та якості
              </span>
            </a>
            <p className="desc">
              Ми постійно вдосконалюємо свої навички та знання у сфері мікронідлінгу, ламінування брів та вій. Ваше задоволення та безпека — наш головний пріоритет.
            </p>

            <a className="action" href="https://www.instagram.com/royalskin_rivne/">
             Переглянути
              <span aria-hidden="true"> → </span>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="image" style={{ backgroundImage: `url(${image2})` }}></div>
          <div className="content">
            <a href="#">
              <span className="title">
              Найсучасніше обладнання для вашої краси
              </span>
            </a>
            <p className="desc">
            Відкрийте для себе можливості професійного мікронідлінгу на новітньому обладнанні 
            та ламінування брів для бездоганного вигляду кожного дня.
            </p>
            <a className="action" href="https://www.instagram.com/royalskin_rivne/">
              Ознайомитись
              <span aria-hidden="true"> → </span>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="image" style={{ backgroundImage: `url(${image3})` }}></div>
          <div className="content">
            <a href="#">
              <span className="title">
              Видимий результат після першої процедури
              </span>
            </a>
            <p className="desc">
            Шкіра стає гладкою, сяючою та зволоженою, а брови набувають ідеальної форми й природного блиску. Видимий ефект вже після першого сеансу.
            </p>
            <a className="action" href="https://www.instagram.com/royalskin_rivne/">
              Результати
              <span aria-hidden="true"> → </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

