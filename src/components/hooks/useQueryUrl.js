import { useSearchParams, useLocation } from 'react-router-dom'

export const useQueryUrl = (queryDefault = {}) => {
    const { search } = useLocation()
    const [searchParam, setQueryUrl] = useSearchParams(queryDefault)
    const value = search.split('?')
    let query = {}
    Object.keys(queryDefault).forEach((keys) => {
        query[keys] = queryDefault[keys].toString()
    })
    if (value[1]) {
        query = JSON.parse(
            '{"' +
            decodeURI(value[1]).replace(/"/g, '//"').replace(/=/g, '":"').replace(/&/g, '","') +
            '"}'
        )
    }
    return [query, setQueryUrl]
}
