import { countries } from 'country-flag-icons'

export const Countries1 = () => {
    return (
        <div className='countries'>
            <article className='flag-countries'>
                {
                    countries.map(country => (
                        <img
                            alt="Nombre país"
                            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
                        />

                    ))
                }
            </article>
        </div>
    )
}
