let isDev = process.env.NODE_ENV !== 'production'

// const mongoDB = isDev ? 'mongodb://localhost/AcadatrendsDb' : 'mongodb://acadatrends:acadatrends1@ds161262.mlab.com:61262/acadatrend'

module.exports = {
    mongoURI: isDev ? 'mongodb://localhost/mern_shoppingDb' : 'mongodb://mern_shopping:mern_shopping1@ds251158.mlab.com:51158/mern_shopping'
}