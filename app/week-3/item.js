export default function Item(props) {
    return(
        <section>
            <h2>{props.name}</h2>
            <p>Quantity: {props.quantity}</p>
            <p>Category: {props.category}</p>
        </section>
    );
}