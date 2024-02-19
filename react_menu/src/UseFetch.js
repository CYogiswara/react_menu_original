import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [dataLoaded, setDataLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch data! :(")
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                    setDataLoaded(true)
                    setTimeout(() => {
                        setDataLoaded(false)
                    }, 1000)
                })
                .catch((err) => {
                    setIsPending(false)
                    setError(err.message)
                })
        }, 1000)
    }, [])
    return {data, isPending, dataLoaded, error}
}

export default useFetch;