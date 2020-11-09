module.exports = function (storage, tableName) {

    const generateId = () => Math.floor(Math.random() * 10000000000)
    this.tableName = tableName
    this.table = []

    this.init = async () => {
        this.table = await storage.getItem(tableName);
        if (!this.table) {
            this.table = []
        }

    }
    this.create = function (obj) {
        this.table.push({ id: generateId(), ...obj })
        storage.setItem(this.tableName, this.table)
    }

    this.update = function (id, obj) {
        const index = this.table.findIndex(x => x.id == id)
        this.table.splice(index, 1)

        this.table.push({ id, ...obj })
        storage.setItem(this.tableName, this.table)
    }

    this.delete = function (id) {
        const index = this.table.findIndex(x => x.id == id)
        this.table.splice(index, 1)
        storage.setItem(this.tableName, this.table)
    }

    this.getOne = function (id) {
        return this.table.find(x => x.id == id)
    }

    this.getAll = function () {
        return this.table
    }
}