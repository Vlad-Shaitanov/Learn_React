"use strict";

import React, { Component } from "react";//Пример импорта из зависимостей
//Комбинация импорта по умолчанию и деструктурированного компонента
import Slider, { btn } from "./script";//Пример импорта из другого файла проекта
/*Конструкцией import * as total from "./script"; 
можно импортировать в переменную(total) объект, содержащий все классы и методы
из другого файла*/

const slider = new Slider(400, 300, 5);
slider.whoAmI();