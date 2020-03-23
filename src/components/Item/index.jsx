import React,{Component} from 'react';
import Context from '../../util/context';

export default class Item extends Component {
	context = null;
	state = { value: '' };

    constructor(props) {
		super(props);
	}

    render() {
        return (
            <div>
				<Context.Consumer>
					{(context) => {
						this.init(context);

						const defaultValue = context.store[this.props.name]
						return (<input
							value={this.state.value || defaultValue}
							onChange={e => {
								this.update(e.target.value);
								this.dispatch(e.target.value);
							}}
						/>)
					}}
				</Context.Consumer>
            </div>
        );
	}

	init(context) {
		this.context = context;
		this.context.event.register(this.props.name);
		this.context.event.ons(this.context.store, (by) => {
			const fn = this.context.rules[this.props.name];
			fn && by !== this.props.name && this.update(fn(this.context.store));
		});
	}
	
	update(value) {
		this.setState({ value });
		this.context.store[this.props.name] = value;
	}

	dispatch(value) {
		this.context.event.dispatch(this.props.name, value);
	}
}