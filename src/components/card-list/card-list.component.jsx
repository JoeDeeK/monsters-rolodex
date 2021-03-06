
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map((mon, idx) => (
                <Card key={idx} monster={mon}/>
            ))}
        </div>
    );
}
