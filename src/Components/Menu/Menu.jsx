import React from "react";
import style from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={style.menu}>
      <div className={style.createNew}>
        <p className={style.newP1}>Создайте объявление</p>
        <p className={style.newP2}>1 / 4</p>
      </div>
      <div className={style.buttons}>
        <div className={style.btn}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Я хочу</p>
            <button className={style.btnBuySell}>
              <button className={style.btn1}>Купить</button>
              <button className={style.btn1}>Продать</button>
            </button>
          </div>
        </div>
        <div className={style.btn}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Продать криптовалюту</p>
            <div className={style.divSvg}>
              <p className={style.btnSell}>USDT</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.8571 14.5714L12.4286 18L9 14.5714M9 9.42857L12.4286 6L15.8571 9.42857"
                  stroke="#48B14A"
                  stroke-width="0.857143"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={style.btn}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Национальная валюта</p>
            <div className={style.divSvg}>
              <p className={style.btnSell}>RUB</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.8571 14.5714L12.4286 18L9 14.5714M9 9.42857L12.4286 6L15.8571 9.42857"
                  stroke="#48B14A"
                  stroke-width="0.857143"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={style.btn}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Тип цены</p>
            <div className={style.divSvg}>
              <p className={style.btnSell}>Плавающая</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.8571 14.5714L12.4286 18L9 14.5714M9 9.42857L12.4286 6L15.8571 9.42857"
                  stroke="#48B14A"
                  stroke-width="0.857143"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={style.precentDiv}>
        <p className={style.precent}> Процент от рыночной цены</p>
      </div>
      <div className={style.precentPrice}>
        <div className={style.precentBtn}>
          <div className={style.precentBtnDiv}>
            <p className={style.btnText}>150</p>
            <p className={style.btnText}>%</p>
          </div>
        </div>
        <div className={style.precentResult}>
          <p className={style.btn1}>
            Рыночная цена: <span className={style.price}>88,40₽ за 1 USDT</span>
          </p>
          <p className={style.price}>Ваша цена: 132,61₽ за 1 USDT</p>
        </div>
      </div>

      <div className={style.precentDiv}>
        <p className={style.precent}>Сумма</p>
      </div>
      <div className={style.precentBalanse}>
        <div className={style.precentBtn}>
          <div className={style.precentBtnDiv}>
            <p className={style.btnText}>39,334768</p>
            <p className={style.btnText}>USDT</p>
          </div>
        </div>
        <div className={style.balanse}>
          <p className={style.btn1}>
            Ваш баланс:
            <span className={style.price}>39,334768 USDT</span>
          </p>
          <p className={style.max}>Макс.</p>
        </div>
      </div>

      <div className={style.precentDiv}>
        <p className={style.precent}>Мин. сумма сделки</p>
      </div>
      <div className={style.sum}>
        <div className={style.precentBtn}>
          <div className={style.precentBtnDiv}>
            <p className={style.btnText}>400</p>
            <p className={style.btnText}>RUB </p>
          </div>
        </div>
        <div className={style.btnTime}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Время на оплату</p>
            <div className={style.divSvg}>
              <p className={style.btnSell}>15 мин.</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.8571 14.5714L12.4286 18L9 14.5714M9 9.42857L12.4286 6L15.8571 9.42857"
                  stroke="#48B14A"
                  stroke-width="0.857143"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> 
       <div className={style.next}>
          <button className={style.nextBtn}>Далее</button>
        </div>
    </div>
  );
};

export default Menu;
