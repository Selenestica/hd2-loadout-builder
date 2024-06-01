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
            const request = indexedDB.open('loadoutsDB', 4)

            request.onupgradeneeded = function (event) {
                const db = event.target.result
                STORES.forEach(storeName => {
                    if (!db.objectStoreNames.contains(storeName)) {
                        db.createObjectStore(storeName, { keyPath: 'id' });
                    }
                })
            }

            request.onsuccess = function (event) {
                console.log('Database opened successfully')
                resolve(event.target.result)
            }

            request.onerror = function (event) {
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

export function clearStore(storeName) {
    return openDB().then(db => {
        const transaction = db.transaction([storeName], 'readwrite')
        const store = transaction.objectStore(storeName)
        store.clear()

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                console.log(`All objects in ${storeName} cleared`)
                resolve()
            }

            transaction.onerror = () => {
                console.error(`Error clearing objects in ${storeName}`)
                reject(transaction.error)
            }
        })
    })
}

export function exportAllData() {
    return openDB().then(async db => {
        const data = {};

        for (const storeName of STORES) {
            const transaction = db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();

            data[storeName] = await new Promise((resolve, reject) => {
                request.onsuccess = () => {
                    resolve(request.result);
                };
                request.onerror = () => {
                    reject(request.error);
                };
            });
        }

        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const now = new Date().getTime()
        a.download = `divers-lab-export-${now}.txt`;
        a.click();
        URL.revokeObjectURL(url);

        console.log('Data exported to data.txt');
    }).catch(error => {
        console.error('Error exporting data:', error);
    });
}

async function importData(file, storesArray) {
    const reader = new FileReader();

    reader.onload = async function (event) {
        try {
            const jsonData = JSON.parse(event.target.result);
            const db = await openDB();

            for (const storeName of STORES) {
                if (!storesArray || storesArray.includes(storeName)) {
                    if (jsonData[storeName]) {
                        const transaction = db.transaction([storeName], 'readwrite');
                        const store = transaction.objectStore(storeName);

                        // Clear existing data
                        console.log('clearing store ' + storeName)
                        store.clear();

                        // Add new data
                        jsonData[storeName].forEach(item => store.add(item));

                        await new Promise((resolve, reject) => {
                            transaction.oncomplete = resolve;
                            transaction.onerror = () => {
                                console.error(`Error adding data to ${storeName}`);
                                reject(transaction.error);
                            };
                        });
                    }
                }
            }

            console.log('Data imported successfully');

        } catch (error) {
            console.error('Error importing data:', error);
        }
    };

    reader.onerror = function () {
        console.error('Error reading file:', reader.error);
    };

    reader.readAsText(file);
}

export async function importAllDataFromFile(storesArray) {
    try {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [{
                description: 'Text Files',
                accept: {
                    'text/plain': ['.txt'],
                },
            }],
            multiple: false,
        });

        const file = await fileHandle.getFile();
        await importData(file, storesArray);
        window.location.reload()
    } catch (error) {
        console.error('Error opening file:', error);
    }
}