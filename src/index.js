import requestCall from './modules/requestCall'
import { benefitsSliderFunc } from './modules/swiperSliders'
import { ourServicesFunc } from './modules/swiperSliders'
import requireMaster from './modules/requireMaster'
import timer from './modules/timer'
import sendForm from './modules/sendForm'
import scroll from './modules/scroll'
import documents from './modules/documents'
import calc from './modules/calc'
import activeMenu from './modules/menuBurger'


requestCall()
benefitsSliderFunc()
ourServicesFunc()
requireMaster()
timer('29 january 2023 00:00:00')
sendForm()
scroll()
documents()
activeMenu()
try {
    calc(100)
} catch (err) {
    console.log();
}
