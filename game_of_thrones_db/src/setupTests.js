import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
require("jest-extended");//Импорт в формате ES5

configure({ adapter: new Adapter() });

const config = {//Конфигурация для jest-extended
	"jest": {
		"setupFilesAfterEnv": ["jest-extended"]
	}
};

export default config;