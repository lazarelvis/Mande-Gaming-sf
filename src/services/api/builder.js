import range from 'lodash/range';
import api from './index';

/**
 * Api service builder that handles a specific resource specified by an endpoint
 *
 * @param apiEndpoint
 * @param paginated
 * @returns {{fetchAll: (function(*=, *=): Promise<unknown>), fetch: (function(*): Promise<unknown>), update: (function(*, *=): Promise<unknown>), create: (function(*=): Promise<unknown>), fetchById: (function(*=): Promise<unknown>), remove: (function(*): Promise<unknown>)}}
 */
// eslint-disable-next-line
export default (apiEndpoint, paginated = false) => {
    /**
     * Fetches the resources paginated or not
     *
     * @param paginated
     * @param params
     * @returns {Promise<unknown>}
     */
    const fetchResources = (paginated, params = {}) => {
        return new Promise((resolve, reject) => {
            api({
                method: 'GET',
                url: apiEndpoint,
                params
            })
                .then(({ data }) => {
                    const items = paginated ? (data.data ? data.data : []) : data;

                    resolve({
                        items,
                        lastPage: paginated ? data.last_page : null
                    });
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    /**
     * Fetches all resources, either paginated, or paginated and greedy
     *
     * @param paginated
     * @param params
     * @param greedy
     * @returns {Promise<unknown>}
     */
    const fetchAllResources = (paginated = true, params = {}, greedy = false) => {
        return new Promise((resolve, reject) => {
            fetchResources(paginated, params)
                .then(({ items, lastPage }) => {
                    if (paginated && greedy && lastPage) {
                        const currentPage = params.page ? params.page : 1;

                        if (currentPage === lastPage) {
                            resolve(items);
                        } else {
                            const pagesLoadPromises = range(
                                currentPage + 1,
                                lastPage + 1
                            ).map(pageNumber =>
                                fetchResources(paginated, { ...params, page: pageNumber })
                            );

                            Promise.all(pagesLoadPromises).then(pagesResults => {
                                resolve(
                                    pagesResults.reduce((resultItems, { items }) => {
                                        return [...resultItems, ...items];
                                    }, items)
                                );
                            });
                        }
                    } else {
                        resolve(items);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    /**
     * Fetches all resources for this service based on configuration for pagination and greedy loading
     *
     * @param page
     * @param limit
     * @returns {Promise<unknown>}
     */
    const fetchAll = (page = 1, limit = 10) => {
        const params = paginated ? { page, limit } : undefined;
        
        return fetchAllResources(paginated, params);
    };

    /**
     * Fetches the resource(s) for the specific endpoint related URI
     *
     * @param uri
     * @returns {Promise<unknown>}
     */
    const fetch = uri => {
        return new Promise((resolve, reject) => {
            api({
                method: 'GET',
                url: `${apiEndpoint}/show/${uri}`
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    /**
     * Fetches a resource by id
     *
     * @param id
     * @returns {Promise<unknown>}
     */
    const fetchById = id => {
        return fetch(id);
    };

    /**
     * Creates a new resource
     *
     * @param payload
     * @returns {Promise<unknown>}
     */
    const create = payload => {
        return new Promise((resolve, reject) => {
            api({
                method: 'POST',
                url: `${apiEndpoint}`,
                data: payload
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    /**
     * Updates an existing resource
     *
     * @param id
     * @param payload
     * @returns {Promise<unknown>}
     */
    const update = (id, payload) => {
        return new Promise((resolve, reject) => {
            api({
                method: 'PUT',
                url: `${apiEndpoint}/${id}`,
                data: payload
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    /**
     * Deletes/removes an existing resource
     *
     * @param id
     * @returns {Promise<unknown>}
     */
    const remove = id => {
        return new Promise((resolve, reject) => {
            api({
                method: 'DELETE',
                url: `${apiEndpoint}/${id}`
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    /**
     * Find resources
     *
     * @param params
     * @returns {Promise<unknown>}
     */
    const find = params => {
        return new Promise((resolve, reject) => {
            api({
                method: 'GET',
                url: `${apiEndpoint}?${params}`,
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    return {
        fetch,
        fetchAll,
        fetchById,
        update,
        create,
        remove,
        find
    };
};
