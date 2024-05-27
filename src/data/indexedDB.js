let dbPromise

const STORES = [
    'loadouts',
    'stratOverrides',
    'primaryOverrides',
    'secondaryOverrides',
    'grenadeOverrides'
];

function openDB() {
    if (!dbPromise) {
        dbPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open('loadoutsDB', 3)

            request.onupgradeneeded = function(event) {
                const db = event.target.result
                STORES.forEach(storeName => {
                    if (!db.objectStoreNames.contains(storeName)) {
                        db.createObjectStore(storeName, { keyPath: 'id' });
                    }
                })
            }

            request.onsuccess = function(event) {
                console.log('Database opened successfully')
                resolve(event.target.result)
            }

            request.onerror = function(event) {
                console.error('Database failed to open', event.target.error)
                reject(event.target.error)
            }
        })
    }
    return dbPromise
}

export function addObject(storeName, object) {
    return openDB().then(db => {
        const transaction = db.transaction([storeName], 'readwrite')
        const store = transaction.objectStore(storeName)
        store.add(object)

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                console.log('added to the database')
                resolve(object)
            }

            transaction.onerror = () => {
                console.error('Error adding to the database')
                reject(transaction.error)
            }
        })
    })
}

export function getAll(storeName) {
    return openDB().then(db => {
        const transaction = db.transaction([storeName], 'readonly')
        const store = transaction.objectStore(storeName)
        const request = store.getAll()

        return new Promise((resolve, reject) => {
            request.onsuccess = () => {
                console.log('retrieved:', request.result)
                resolve(request.result)
            }

            request.onerror = () => {
                console.error('Error fetching items from database')
                reject(request.error)
            }
        })
    })
}

export function updateObject(storeName, object) {
    return openDB().then(db => {
        const transaction = db.transaction([storeName], 'readwrite')
        const store = transaction.objectStore(storeName)
        console.log(object)
        store.put(object) // Automatically replaces the object with matching 'id'

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                console.log('object updated')
                resolve(object)
            }

            transaction.onerror = () => {
                console.error('Error retrieving object in the database')
                reject(transaction.error)
            }
        })
    })
}

export function getObject(storeName, id) {
    return openDB().then(db => {
        const transaction = db.transaction([storeName], 'readonly')
        const store = transaction.objectStore(storeName)
        store.get(id) // Automatically replaces the object with matching 'id'

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                console.log('object retrieved')
                resolve(object)
            }

            transaction.onerror = () => {
                console.error('Error updating object in the database')
                reject(transaction.error)
            }
        })
    })
}

export function deleteObject(storeName, id) {
    return openDB().then(db => {
        const transaction = db.transaction([storeName], 'readwrite')
        const store = transaction.objectStore(storeName)
        store.delete(id)

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                console.log('Loadout deleted')
                resolve()
            }

            transaction.onerror = () => {
                console.error('Error deleting loadout from the database')
                reject(transaction.error)
            }
        })
    })
}
