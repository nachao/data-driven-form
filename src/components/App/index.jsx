import React,{Component} from 'react';
import Item from '../Item/index.jsx';
import Event from '../../util/event';
import Context from '../../util/context';

export default class App extends Component {
	event = new Event();
	rules = {};
	store = {};

    constructor(props) {
		super(props);

		this.request();
	}

	request() {
		// mock
		this.store = {
			a: 0,
			b: 1,
			c: 2
		};
		this.rules = {
			a: data => {
				return !data.a ? (data.b * data.c) : data.a;
			},
			b: data => {
				return !data.b ? (data.a / data.c) : data.b;
			},
			c: data => {
				return (data.a / data.b);
			},
		};
	}

    render() {
		const data = {
			event: this.event,
			store: this.store,
			rules: this.rules,
		}
		const items = Object.keys(this.store).map(key => (<Item name={key} key={key} />));

        return (
            <div styleName="content">
				<Context.Provider value={ data }>
					{ items }
				</Context.Provider>
            </div>
        );
    }
}