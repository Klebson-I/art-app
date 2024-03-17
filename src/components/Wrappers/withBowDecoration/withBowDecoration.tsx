import { WITH_BOW_1, WITH_BOW_2, WITH_BOW_3, WITH_BOW_4 } from '../../testAccessors';
import './style.css'

export const withBowDecoration = (WrappedComponent: React.FC<any>) => {
    const WithBowDecoration = ({ ...props }) => {
        return <div className='withDecorationBox'>
            <div className='topLeft' data-testid={WITH_BOW_1}/>
            <div className='topRight' data-testid={WITH_BOW_2}/>
                <WrappedComponent {...props} />
            <div className='downLeft' data-testid={WITH_BOW_3}/>
            <div className='downRight' data-testid={WITH_BOW_4}/>
        </div>
    }
    return WithBowDecoration;
}