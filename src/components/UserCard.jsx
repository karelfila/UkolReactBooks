export function UserCard({name, age, numberOfBooks}) {

    return (
        <>
            <div style={{border: "solid", borderRadius: "10px", borderColor: "white"}}>
                <h1 style={{margin: "10px"}}>{name}</h1>

                <ul>
                    <li style={{listStyleType:"none"}}>Age: {age}</li>
                    <li style={{listStyleType:"none"}}>Number of books: {numberOfBooks}</li>
                </ul>
            </div>
        </>
    )
}