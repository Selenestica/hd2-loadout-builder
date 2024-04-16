let dbPromise

function openDB() {
    if (!dbPromise) {
        dbPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open('loadoutsDB', 2)

            request.onupgradeneeded = function(event) {
                const db = event.target.result
                if (!db.objectStoreNames.contains('loadouts')) {
                    db.createObjectStore('loadouts', { keyPath: 'id' })
                }
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

export function addLoadout(loadout) {
    return openDB().then(db => {
        const transaction = db.transaction(['loadouts'], 'readwrite')
        const store = transaction.objectStore('loadouts')
        store.add(loadout)

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                console.log('Loadout added to the database')
                resolve(loadout)
            }

            transaction.onerror = () => {
                console.error('Error adding loadout to the database')
                reject(transaction.error)
            }
        })
    })
}

export function loadLoadouts() {
    return openDB().then(db => {
        const transaction = db.transaction(['loadouts'], 'readonly')
        const store = transaction.objectStore('loadouts')
        const request = store.getAll()

        return new Promise((resolve, reject) => {
            request.onsuccess = () => {
                console.log('Loadouts retrieved:', request.result)
                resolve(request.result)
            }

            request.onerror = () => {
                console.error('Error fetching items from database')
                reject(request.error)
            }
        })
    })
}

export function updateLoadout(loadout) {
    return openDB().then(db => {
        const transaction = db.transaction(['loadouts'], 'readwrite')
        const store = transaction.objectStore('loadouts')
        store.put(loadout) // Automatically replaces the loadout with matching 'id'

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                console.log('Loadout updated')
                resolve(loadout)
            }

            transaction.onerror = () => {
                console.error('Error updating loadout in the database')
                reject(transaction.error)
            }
        })
    })
}

export function deleteLoadout(loadoutId) {
    return openDB().then(db => {
        const transaction = db.transaction(['loadouts'], 'readwrite')
        const store = transaction.objectStore('loadouts')
        store.delete(loadoutId)

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
