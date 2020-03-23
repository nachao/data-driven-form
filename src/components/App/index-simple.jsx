import React,{Component} from 'react';
import Item from '../Item/index.jsx';
import Event from '../../util/event';

export default class App extends Component {
	event = new Event();

	store = {
		a: 0,
		b: 1,
		c: 2
	}

	rules = {
		a: ({ a, b, c }) => {
			return !a ? b * c : a;
		},
		b: ({ a, c }) => {
			return (a / c)
		},
		c: ({ a, b }) => {
			return (a / b);
		},
	}

    constructor(props) {
        super(props);
	}

    render() {
        return (
            <div styleName="content">
				<Item event={this.event} store={this.store} rule={this.rules["a"]} name="a" depens={['b', 'c']} />
				<Item event={this.event} store={this.store} rule={this.rules["b"]} name="b" depens={['a', 'c']} />
				<Item event={this.event} store={this.store} rule={this.rules["c"]} name="c" depens={['a', 'b']} />
            </div>
        );
    }
}