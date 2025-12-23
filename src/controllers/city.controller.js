const City = require('../models/city.model');

exports.getAllCities = (req, res) => {
    const cities = City.getAll();
    res.status(200).json(cities);
};

exports.getCityById = (req, res) => {
    const city = City.getById(req.params.id);
    if (!city) return res.status(404).json({ message: 'City not found' });
    res.status(200).json(city);
};

exports.createCity = (req, res) => {
    const { name, country } = req.body;
    if (!name || !country) return res.status(400).json({ message: 'Missing fields' });
    
    const newCity = City.create({ name, country });
    res.status(201).json(newCity);
};

exports.updateCity = (req, res) => {
    const updatedCity = City.update(req.params.id, req.body);
    if (!updatedCity) return res.status(404).json({ message: 'City not found' });
    res.status(200).json(updatedCity);
};

exports.deleteCity = (req, res) => {
    const deleted = City.delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'City not found' });
    res.status(200).json(deleted);
};