import { Application, Container } from 'pixi.js'
import { applicationOptions } from 'config'
import { WhiteText } from 'styles'
import { TextAtom } from 'atoms'

const app = new Application(applicationOptions)
document.body.appendChild(app.view as HTMLCanvasElement)

const message = new Container()
message.x = window.innerWidth / 2
message.y = window.innerHeight / 2

const text = TextAtom('Rendered using WebGL!', WhiteText)
text.anchor.set(0.5)

message.addChild(text)
app.stage.addChild(message)
