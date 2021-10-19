const supertest = require("supertest");
const server = require('../index');

describe("Order details testing", () => {
    // Positive Assertions
    // This test case checking the creating order
    it('Should create a new order - Positive', async () => {
        const res = await supertest(server)
            .post('/order/createOrder')
            .send({
                orderId: "OR001",
                material: "Cement",
                quantity: "100 Packs",
                deadline: "01-10-2021",
                status: "Pending",
                userId: "100"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)

        expect(res.statusCode).toEqual(200)
    }, 30000)

    // This test case checking the getting all orders
    it('Should get all orders - Positive', async () => {
        const res = await supertest(server)
            .get('/order/')
        expect(res.statusCode).toEqual(200)

    }, 10000)

    // Negative Assertions
    // This test case checking the creating order without material
    it('Should not create a new order without material - Negative', async () => {
        const res = await supertest(server)
            .post('/order/createOrder')
            .send({
                orderId: "OR0001",
                // material: "Cement",
                quantity: "100 Packs",
                deadline: "01-10-2021",
                status: "Pending",
                userId: "100"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)

        expect(res.statusCode).toEqual(500)
    }, 30000)
})

describe("Invoice details testing", () => {
    // Positive Assertions
    // This test case checking the creating order
    it('Should create a new invoice - Positive', async () => {
        const res = await supertest(server)
            .post('/invoice/createInvoice')
            .send({
                orderId: "OR0001",
                material: "Cement",
                quantity: "100 Packs",
                unitCost: "01-10-2021",
                totalPrice: "100",
                status: false,
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)

        expect(res.statusCode).toEqual(200)
    }, 30000)

    // This test case checking the getting all orders
    it('Should get all invoices - Positive', async () => {
        const res = await supertest(server)
            .get('/invoice/')
        expect(res.statusCode).toEqual(200)

    }, 10000)

    // Negative Assertions
    // This test case checking the creating order without material
    it('Should not create a new invoice without orderId - Negative', async () => {
        const res = await supertest(server)
            .post('/invoice/createInvoice')
            .send({
                // orderId: "OR0001",
                material: "Cement",
                quantity: "100 Packs",
                unitCost: "01-10-2021",
                totalPrice: "100",
                status: "Pending",
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)

        expect(res.statusCode).toEqual(500)
    }, 30000)
})