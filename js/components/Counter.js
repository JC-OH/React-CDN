import './js/components/Counter.css';

const Counter = ({number, color, onIncrement, onDecrement}) => {
    return (
        <div 
            className="Counter" 
            onClick={onIncrement} 
            onContextMenu={
                (e) => { 
                    e.preventDefault(); 
                    onDecrement();
                }
            } 
            style={{backgroundColor: color}}>
               {number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
	color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined')
};

export default Counter;