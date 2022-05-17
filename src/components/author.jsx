import config from './config.json';

function Author() {
    const fetchAuthorURL = `https://books.googleapis.com/books/v1/volumes?q=""&printType=books&orderBy=newest&maxResults=40&key=${config.apiKey}`
    const [author, setAuthor] = useState("")

    function getAuthor() {
        const url = fetchAuthorURL;
        fetch(url)
        .then((res) =>  res.json())
        .then((res) =>  setBooks((res.items)))
    }

    useEffect(() => {
        getAuthor()
    }, [])

    return (
        <h1>author page</h1>   
    )
}

export default Author