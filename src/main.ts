import { Key } from './api/key';
import { StatelessWidget } from './api/stateless_widget';
import { Ivy } from './ivy';
import './style.css'

const app = document.getElementById('app')!;

class Text extends StatelessWidget{
    constructor(public text: string){
        super(Key.uniqueKey());
    }

    build(){
        const element = document.createElement('div');
        element.innerText = this.text;
        return element;
    }
}

Ivy.wrapWidget(app, new Text('Sample Text from text widget'));