const contentfulManagement = require("contentful-management")

module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        // accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
        accessToken: 'CFPAT-49fiDpuywGSYWgqvdtd3edPfKfRCr_gVVEqa_3GuNeo',
    })

    return contentfulClient
        .getSpace('d6ufi2x510z9')
        // .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
        .then(space => space.getEnvironment('master'))
}