import {UserCard} from "./components/UserCard.jsx";
// import {Books} from "./components/Books";
import {BookCard} from "./components/BookCard";

function App() {

    return (
        <>
            <div>

                <UserCard name={"Karel Fíla"} age={24} numberOfBooks={4}/>

                <BookCard name={"1st Book"}/>
            </div>
        </>
    )
}

export default App
