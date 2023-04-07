import '../styles/css/section.css'

export default function Section(props) {
    return (
        <section className= { props.className } >
            <h2 className='title'> { props.title } </h2>
            <p className='text'> { props.text } </p>
            <img className='image' src = { props.image } alt = { props.alt } ></img>
        </section>
    )
}