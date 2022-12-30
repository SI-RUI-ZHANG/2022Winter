import {EventEmitter} from "events";
import {v4 as uuid} from "uuid";


class Sticker extends EventEmitter {
    constructor() {
        super();
        this.on('onCreate', () => this.generate_library())
        this.on('onUpdate', () => {
            console.log('trigger onUpdate event:');
            console.log(this.library);
        })
        this.on('exit', () => {
            console.log('trigger onDestroy event:');
            const num = this.library.reduce((acc, cur) => acc + cur['content'], '').length
            console.log(`The total number of characters in stickers is: ${num}`);
        })
        this.emit('onCreate')
    }

    generate_library () {
        console.log('trigger onCreate event, initialize library');
        this.library = []
    }

    generate_id () {
        return [...uuid()].filter(e => e !== '-').join('').slice(16)
    }

    add(content, color) {
        this.library.push({
            id: this.generate_id(),
            content: content || '',
            color: color || 'default',
            create: new Date()
        })

        this.emit('onUpdate')
    }
}

const sticker = new Sticker()
sticker.add('test content', 'blue')
sticker.add('test content 2')
sticker.add()
process.on('exit', () => {
    sticker.emit('exit')
})
