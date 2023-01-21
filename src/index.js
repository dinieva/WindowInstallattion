import requestCall from './modules/requestCall'
import benefitsSlider from './modules/benefitsSlider'
import ourServices from './modules/ourServices'
import requireMaster from './modules/requireMaster'
import timer from './modules/timer'
import sendForm from './modules/sendForm'
import scroll from './modules/scroll'
import documents from './modules/documents'
import calc from './modules/calc'

requestCall()
benefitsSlider()
ourServices()
requireMaster()
timer('22 january 2023 21:00:00')
sendForm()
scroll()
documents()
try {
    calc(100)
} catch (err) {
    console.log();
}
