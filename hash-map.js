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

    set(key, value) {
        const index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds")
        }

        const bucket = this.buckets[index]
        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value
                return
            }
        }

        bucket.push([key, value])
        this.size++
    }

    get(key) {
        const index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds")
        }

        const bucket = this.buckets[index]
        for (const [k, v] of bucket) {
            if (k === key) {
                return v
            }
        }

        return null
    }

    has(key) {
        return this.get(key) !== null
    }

    remove(key) {
        const index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds")
        }

        const bucket = this.buckets[index]
        const indexInBucket = bucket.findIndex(([k]) => k === key)
        if (indexInBucket !== -1) {
            bucket.splice(indexInBucket, 1)
            this.size--
            return true
        }
        return false
    }

    length() {
        return this.size
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => [])
        this.size = 0
    }

    keys() {
        const keys = []
        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                keys.push(key)
            }
        }
        return keys;
    }

    values() {
        const values = []
        for (const bucket of this.buckets) {
            for (const [, value] of bucket) {
                values.push(value)
            }
        }
        return values
    }

    entries() {
        const entries = []
        for (const bucket of this.buckets) {
            for (const [key, value] of bucket) {
                entries.push([key, value])
            }
        }
        return entries
    }
}

module.exports = HashMap
