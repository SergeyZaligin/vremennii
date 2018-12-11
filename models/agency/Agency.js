const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    visible: {
        type: Boolean,
        default: 1
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    text: {
        type: String

    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const AgencySchema = new Schema({
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
    site: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    metro: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        default: ''
    },
    imageThubnailLogo: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    sort: {
        type: Number,
        default: 1
    },
    city: {
        ref: 'citys',
        type: String,
        required: true
    },
    district: {
        ref: 'citys.districts',
        type: String,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    reviews: {
        type: [ReviewSchema]
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('Agency', AgencySchema)