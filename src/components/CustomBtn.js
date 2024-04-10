const Btn = ({btnStyle, children}) => {
    
    const customBtn = {
    backgroundColor: "gray",
    border: 'none',
    color: '#fffa',
    fontSize: '19px',
    padding: '15px 30px',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '7px',
    display: 'block',
    margin: '5px auto' 
    }

    return (
        <button style={{...customBtn, ...btnStyle}}>{children}</button>
    )
}

export default Btn;

