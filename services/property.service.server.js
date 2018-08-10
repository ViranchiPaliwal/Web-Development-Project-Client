module.exports = function (app) {

    app.post('/api/owner/property', createProperty);
    app.get('/api/owner/property', findPropertiesForOwner);
    app.get('/api/property/:universityId', findPropertiesForUniversity);
    //
    // app.post('/api/course/:courseId/property', createProperty);
    // app.get('/api/course/:courseId/property', findPropertysForCourse);
    // app.post('/api/owner/property/:propertyId', enrollOwnerInProperty);
    // app.delete('/api/owner/property/:propertyId', unEnrollOwnerInProperty);
    // app.get("/api/property/:propertyId", getPropertyById)
    // app.delete("/api/property/:propertyId", removeProperty);
    // app.put("/api/property/:propertyId", updateProperty);
    // app.get("/api/property", getAllPropertys);


    const propertyModel = require('../models/property/property.model.server');

    function findPropertiesForOwner(req, res) {
        const currentUser = req.session.currentUser;
        const ownerId = currentUser._id;
        propertyModel
            .findPropertiesForOwner(ownerId)
            .then(function (enrollments) {
                res.json(enrollments);
            });
    }

    function findPropertiesForUniversity(req, res) {
        const universityId = req.params.universityId;
        propertyModel
            .findPropertiesForUniversity(universityId)
            .then(function (properties) {
                res.json(properties);
            });
    }
    //
    // function enrollOwnerInProperty(req, res) {
    //     const propertyId = req.params.propertyId;
    //     const currentUser = req.session.currentUser;
    //     const ownerId = currentUser._id;
    //     const enrollment = {
    //         owner: ownerId,
    //         property: propertyId
    //     };
    //
    //     propertyModel
    //         .decrementPropertySeats(propertyId)
    //         .then(function () {
    //             return enrollmentModel
    //                 .enrollOwnerInProperty(enrollment)
    //         })
    //         .then(function (enrollment) {
    //             res.json(enrollment);
    //         });
    // }
    //
    // function unEnrollOwnerInProperty(req, res) {
    //     const propertyId = req.params.propertyId;
    //     const currentUser = req.session.currentUser;
    //     const ownerId = currentUser._id;
    //
    //     propertyModel
    //         .incrementPropertySeats(propertyId)
    //         .then(function () {
    //             return enrollmentModel
    //                 .unEnrollOwnerInProperty(ownerId, propertyId)
    //         })
    //         .then(function (enrollment) {
    //             res.json(enrollment);
    //         });
    // }
    //
    // function getPropertyById(req, res) {
    //     var propertyId = req.params.propertyId;
    //     return propertyModel
    //         .findPropertyById(propertyId)
    //         .then(property => res.send(property)
    // )
    //     ;
    // }
    //
    // function removeProperty(req, res) {
    //     var propertyId = req.params.propertyId;
    //     propertyModel
    //         .deleteProperty(propertyId)
    //         .then(() => enrollmentModel.removeProperty(propertyId)
    // )
    // .
    //     then(response => res.send(response)
    // )
    //     ;
    // }
    //
    // function updateProperty(req, res) {
    //     var propertyId = req.params.propertyId;
    //     var property = req.body;
    //     propertyModel.updateProperty(propertyId, property)
    //         .then(response => res.send(response)
    // )
    // }
    //
    // function findPropertysForOwner(req, res) {
    //     const courseId = req.params['courseId'];
    //     propertyModel
    //         .findPropertysForCourse(courseId)
    //         .then(function (propertys) {
    //             res.json(propertys);
    //         })
    // }

    function createProperty(req, res) {
        const currentUser = req.session.currentUser;
        const ownerId = currentUser._id;
        const property = Object.assign({
            owner: ownerId
        }, req.body);
        propertyModel
            .createProperty(property)
            .then(function (property) {
                res.json(property);
            })
    }

    // function getAllPropertys(req, res) {
    //     propertyModel
    //         .findAllPropertys()
    //         .then(propertys => (
    //         res.send(propertys)
    //     )
    // );
    // }
};