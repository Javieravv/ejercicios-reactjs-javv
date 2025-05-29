import { FC, Suspense, useEffect, useState } from "react"
import { Country } from '../interfaces/icontries';

async function fetchCountries(): Promise<Country[]> {
    const response = await fetch('https://restcountries.com/v3.1/all')
    // const response = await fetch('https://restcountries.com/v3.1/region/oceania')
    if (!response.ok) {
        throw new Error('Error...')
    }
    return response.json()
}

const CountryData = ({ children }: { children: (data: Country[]) => React.ReactNode }) => {
    const [data, setData] = useState<Country[]>([])
    useEffect(() => {
        fetchCountries().then(setData)
    }, [])

    return (<>{children(data)}</>)
}

const CountryList = () => {
    return (
        <CountryData>
            {
                (countries1) => (
                    <section className="section-countries">
                        {countries1.map((country) => (
                            <div key={country.name.common}>
                                <h4>{country.name.common}</h4>
                                <img src={country.flags.png} alt={country.name.common} />
                            </div>
                        ))}
                    </section>
                )
            }
        </CountryData>
    )
}

const LoadingSpinner = () => {
    return (
        <div>
            {/* <Loader2 className="h-8 w-8 animate-spin text-primary" /> */}
            <span>Cargando países...</span>
        </div>
    )
}

const ListCountries: FC = () => {
    return (
        <>
            <Suspense fallback={ <LoadingSpinner /> }>
                <CountryList />
            </Suspense>
        </>
    )
}

export default ListCountries
