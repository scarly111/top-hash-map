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
}

