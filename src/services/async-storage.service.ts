// interface Keyable {
//     [key: string]: any  
// }

export const storageService = {
    query,
    get,
    post,
    postMany,
    put,
    remove,
}

function query(entityType: string): Promise<any[]> {
    const data: any = localStorage.getItem(entityType)
    let entities: any[] = data ? JSON.parse(data) : []
    return Promise.resolve(entities)
}

function get(entityType: string, entityId: string): any {
    return query(entityType)
        .then((entities: any[]) => entities.find((entity: any) => entity._id === entityId))
}

function post(entityType: string, newEntity: any): Promise<any> {
    newEntity._id = _makeId()
    newEntity.createdAt = (new Date()).toISOString()
    return query(entityType)
        .then((entities: any[]) => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function postMany(entityType: string, newEntities: any[]): Promise<any[]> {
    return query(entityType)
        .then((entities: any[]) => {
            newEntities = newEntities.map((entity: any) => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return newEntities
        })
}

function put(entityType: string, updatedEntity: any): Promise<any> {
    return query(entityType)
        .then((entities: any[]) => {
            const idx = entities.findIndex((entity: any) => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType: string, entityId: string): Promise<void> {
    return query(entityType)
        .then((entities: any[]) => {
            const idx = entities.findIndex((entity: any) => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType: string, entities: any[]): void {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    let text = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}