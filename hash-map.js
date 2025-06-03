class HashMap {
    constructor(initialCapacaity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacaity
        this.loadFactor = loadFactor
        this.bucket = new Array(this.capacity).fill(null).map(() => [])
        this.size = 0
    }

    // Taken from the odin project
    hash(key) {
        const primeNumber = 31
        let hashCode = 0
        for (let i = 0; i < key.length; i++) {
            hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity
        }
        return hashCode
    }
}

