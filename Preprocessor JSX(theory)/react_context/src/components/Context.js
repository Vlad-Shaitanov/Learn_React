import React from "react";

const MyContext = React.createContext();//Создание контекста

/*По факту MyContext это объект, который содержит в себе 2 сущности:
это Provider и Consumer, которые мы можем использовать на разных уровнях*/

export default MyContext;