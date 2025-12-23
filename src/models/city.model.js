// Mock database
let cities = [
    { id: 1, name: 'New York', country: 'USA' },
    { id: 2, name: 'Tokyo', country: 'Japan' }
];

class City {
    static getAll() {
        return cities;
    }

    static getById(id) {
        return cities.find(c => c.id === parseInt(id));
    }

    static create(data) {
        const newCity = { id: cities.length + 1, ...data };
        cities.push(newCity);
        return newCity;
    }

    static update(id, data) {
        const city = this.getById(id);
        if (city) {
            Object.assign(city, data);
        }
        return city;
    }

    static delete(id) {
        const index = cities.findIndex(c => c.id === parseInt(id));
        if (index === -1) return null;
        return cities.splice(index, 1)[0];
    }
}

module.exports = City;