function InfoBlock(){
  return (
    <div className="info-block">
      <p>Название танка</p>
      <div className="info-wrapper">
        <div className="info-line">
          <span>Прочность</span>
          <span>1700 ед.</span>
        </div>
        <div className="info-line">
          <span>Средний урон</span>
          <span>330/330/430 ед.</span>
        </div>
        <div className="info-line">
          <span>Средняя бронепробиваемость</span>
          <span>215/253/53 мм</span>
        </div>
        <div className="info-line">
          <span>Время сведения</span>
          <span>3,1 c</span>
        </div>
        <div className="info-line">
          <span>Разброс на 100 м</span>
          <span>0,42 м</span>
        </div>
        <div className="info-line">
          <span>Время перезарядки</span>
          <span>9,3 c</span>
        </div>
        <div className="info-line">
          <span>Углы вертикального наведения</span>
          <span>–10/20 град</span>
        </div>
        <div className="info-line">
          <span>Мощность двигателя</span>
          <span>–10/20 град</span>
        </div>
        <div className="info-line">
          <span>Макс. скорость / задний ход</span>
          <span>25/10 км/ч</span>
        </div>
        <div className="info-line">
          <span>Бронирование корпуса</span>
          <span>200/105/150 мм</span>
        </div>
        <div className="info-line">
          <span>Бронирование башни</span>
          <span>200/200/200 мм</span>
        </div>
      </div>
    </div>
  )
}

export default InfoBlock;