

const Searchbar = ({ searching }) => {
    return (
        <form onSubmit={searching}>
            <input name="searchBar"></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default Searchbar
