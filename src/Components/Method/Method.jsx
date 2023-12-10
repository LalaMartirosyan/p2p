import React from "react";
import style from "./Method.module.css";
const Method = () => {
  return (
    <div className={style.method}>
      <div className={style.methodTitle}>
        <p className={style.typeTitle}>Humo · UZS</p>
      </div>
      <div className={style.methodDiv}>
        <input type="text" value="Humo" />
        <input type="text" value="+998678456234" />
      </div>
      <button className={style.btnAdd}>Добавить метод оплаты</button>
    </div>
  );
};

export default Method;
