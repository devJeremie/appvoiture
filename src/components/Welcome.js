const Welcome = () => {

    const bonjour = () => console.log('Bonjour');
    const bonsoir = arg => console.log(arg);
    return (
        <div>
            {/*Invoquer une fonction Bonjour qui affichera console.log Bonjour */}
            <button onClick={bonjour}>Invoquer une fonction</button>

            {/*Invoquer une fonction bonsoir avec un argument bonsoir et l'afficher */}
            <button onClick={() => bonsoir('Bonsoir')}>Invoquer une fonction avec argument bonsoir</button>

            {/*lancer le console log bonne nuit apres le click sanas invoquer de fonction */}
            <button onClick={() =>console.log("Bonne nuit")}>Console log sur le bouton</button>
        </div>
    )
}


export default Welcome
