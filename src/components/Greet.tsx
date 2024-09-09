interface probs {
    name: string,
}

function Greet({ name }: probs) {
    return (
        <p>Hello {name}!</p>
    );
}

export default Greet;