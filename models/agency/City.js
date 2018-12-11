const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DistrictSchema = new Schema({
    visible: {
        type: Boolean,
        default: 1
    },
    description: {
        type: String,
        default: ''
    },
    keywords: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    sort: {
        type: Number,
        default: 1
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const CitySchema = new Schema({
    visible: {
        type: Boolean,
        default: 1
    },
    description: {
        type: String,
        default: ''
    },
    keywords: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    sort: {
        type: Number,
        default: 1
    },
    districts: {
        type: [DistrictSchema]
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('City', CitySchema);