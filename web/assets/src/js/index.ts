import './../css/app.scss'; // Импортируем стили
import {router} from "./router";
import {rendersRequire} from "./renders/renders";
import {init} from "./init";
import {rendersField} from "./renders/rendersField";
import {rendersCatalog} from "./renders/rendersCatalog";

init();

// Инициируем рендеры
rendersRequire();

// Рендеры связанные с полями
rendersField();

// Рендеры связанные с каталогом
rendersCatalog();

// Запускаем роутер
router();


