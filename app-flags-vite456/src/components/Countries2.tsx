import { countries, findFlagUrlByCountryName } from "country-flags-svg";

export const Countries2 = () => {
    const country = countries[151]
    console.log( country)
    const country1 = findFlagUrlByCountryName('Netherlands Antilles')
    console.log('Colombia',country1)
    return (
        <>
            <div className='countries'>
                <article className='flag-countries1'>
                {
                    countries.map((country, index) => (
                        <div className="cardCountry" key={country.iso2}>
                            <img
                                alt={country.name}
                                src={country.flag}
                            />
                            <h3>{ `${index}.- ${country.name}` }</h3>
                        </div>
                        
                    ))
                }
                </article>
            </div>
        </>
    )
}
