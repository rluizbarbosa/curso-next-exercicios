export default function NumeroDisplay(props){
    return(
        <div style={{
            height: '80px',
            width: '80px',
            borderRadius: '50%',
            backgroundColor: '#222',
            color: '#fff',
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '15px'
        }}>
            {props.numero}
        </div>
    )
}