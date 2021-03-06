import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './price-component.css';
const PriceComponent = () => {
    return (
        <>


<div className = "tab">

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Оплата">
    <div>
            <p className="text">Ми працюємо за повною та частковою передоплатою послуг.
Ви можете сплатити за послуги готівковим або безготівковим способом при оформленні та отриманні замовлення. 
Просто скажіть про це майстру під час оформлення замовлення.
Як тільки передоплата надійшла на рахунок, ми ставимо замовлення в чергу до майстра, 
і повідомляєм приблизну дату коли замовлення буде готово.</p>
        </div>
  </Tab>
  <Tab eventKey="profile" title="Повернення">
    <div>
            <p className="text">Заперечення щодо наданих послуг та повернення коштів можна обговорити з директором.
Контактний номер керуючого є у всіх ательє, просто запитайте про це майстра.</p>
        </div>
  </Tab>
  <Tab eventKey="contact" title="Доставка" >
    <div>
            
            <p className="text"> Ми приймаємо та доставляємо замовлення кур'єрською службою Нова Пошта.
Доставка замовлень в ательє відбувається за рахунок відправника.
Доставку готових замовлень здійснює кур'єр чи служба таксі за рахунок отримувача.</p>
        </div>
  </Tab>
    <Tab eventKey="dostavka" title="Виїзд" >
    <div>
            
            <p className="text">Ми дбаємо про безпеку співробітників, тому послуга виїзного обслуговування з ремонту одягу доступна клієнтам, які раніше вже здійснювали замовлення в ательє з ремонту одягу Білошвейка або є постійними клієнтами мережі ательє Білошвейка.

Для замовлення виїзду кравця додому або в офіс просто зателефонуйте на центральний номер ательє +380999274339

Послуга виїзду швачки в межах району коштує 580 грн. (Вартість виїзду включає транспортні витрати). Послуга виїзду кравця за межі списку районів оплачується додатково згідно з тарифом служби таксі.</p>
        </div>
  </Tab>
</Tabs>
</div>
<div>

  <table border="1" width="90%" cellpadding="0">
  <h1>Пошиття</h1>
   <tr>
    <th>Топ</th>
    <th>350-400грн.</th>
   </tr>
   <tr>
    <td>Блузка</td>
    <td>450-600грн.</td>
  </tr>
     <tr>
    <td>Спідниця</td>
    <td>400-550грн.</td>
  </tr>
       <tr>
    <td>Халат</td>
    <td>300-450грн.</td>
  </tr>
  <tr>
    <td>Плащ</td>
    <td>1200-1600грн.</td>
  </tr>

  <h1>Ремонт</h1>
   <tr>
    <th>Класичний підгин</th>
    <th>70-100-150грн.</th>
   </tr>
   <tr>
    <td>Заміна замка</td>
    <td>65грн.</td>
  </tr>
     <tr>
    <td>Вшивання рукава в пройму</td>
    <td>150-250грн.</td>
  </tr>
       <tr>
    <td>Розширення виробу</td>
    <td>150-300грн.</td>
  </tr>

  <h1>Заміна підкладки</h1>
   <tr>
    <th>Класичний підгин</th>
    <th>70-100-150грн.</th>
   </tr>
   <tr>
    <td>Заміна замка</td>
    <td>65грн.</td>
  </tr>
     <tr>
    <td>Вшивання рукава в пройму</td>
    <td>150-250грн.</td>
  </tr>
       <tr>
    <td>Розширення виробу</td>
    <td>150-300грн.</td>
  </tr>

<h1>Додаткові послуги</h1>
   <tr>
    <th>Виготовлення петель</th>
    <th>5грн.</th>
   </tr>
   <tr>
    <td>Пришивання гудзиків</td>
    <td>10грн.</td>
  </tr>
     <tr>
    <td>Пришивання кліпсів (хутро) 1 пара</td>
    <td>15грн.</td>
  </tr>
       <tr>
    <td>Пришивання латки</td>
    <td>40-100грн.</td>
  </tr>

         <tr>
    <td>Пришивання шторної тасьми(1 метр)</td>
    <td>20грн.</td>
  </tr>
         <tr>
    <td>Набивання люверса(1шт.)</td>
    <td>5грн.</td>
  </tr>
         <tr>
    <td>Обробка краю тюлі і штори(1 метр)</td>
    <td>15грн.</td>
  </tr>
 </table>
<br/>
<br/>
</div>
        </>
    );
};

export default PriceComponent;