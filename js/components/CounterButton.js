
class CounterButton extends React.Component {
    static propTypes = {
        onIncrement: PropTypes.func,
        onDecrement: PropTypes.func
    }

    static defaultProps = {
        onIncrement: () => console.warn('onIncrement not defined'),
        onDecrement: () => console.warn('onDecrement not defined')
    }

    render() {
        return (

            <div>
            <button type="button"
                onClick={ this.props.onIncrement }>
            +
            </button>
            <button type="button"
                onClick={ this.props.onDecrement }>
            -
            </button>
            </div>
        )
    }
}

export default CounterButton;