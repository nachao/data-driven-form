import React,{Component} from 'react';

export default class Item extends Component {
    constructor(props) {
		super(props);

		this.state = {
			value: props.store[props.name] || 0
		}

		this.props.event.register(props.name);
		this.props.event.ons(props.depens, () => {
			const fn = props.rules[props.name];
			fn && this.update(fn(props.store));
		});
	}

    render() {
        return (
            <div>
				<input
					value={this.state.value}
					onChange={e => {
						this.update(e.target.value);
						this.dispatch(e.target.value);
					}}
				/>
            </div>
        );
	}
	
	update(value) {
		this.setState({ value });
		this.props.store[this.props.name] = value;
	}

	dispatch(value) {
		this.props.event.dispatch(this.props.name, value);
	}
}