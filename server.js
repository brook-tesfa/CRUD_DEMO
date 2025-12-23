const express = require('express');
const cityRoutes = require('./src/routes/city.routes');
const app = require('./src/app');

// Mount the routes
app.use('/api/cities', cityRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Senior Dev API running on port ${PORT}`));