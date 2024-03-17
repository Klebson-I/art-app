import './style.css'

export const withBowDecoration = (WrappedComponent: React.FC<any>) => {
    const WithBowDecoration = ({ ...props }) => {
        return <div className='withDecorationBox'>
            <div className='topLeft'/>
            <div className='topRight'/>
                <WrappedComponent {...props} />
            <div className='downLeft'/>
            <div className='downRight'/>
        </div>
    }
    return WithBowDecoration;
}