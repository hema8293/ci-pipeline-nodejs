
const request = require("supertest");
const app = require("../server"); // Import only the Express app (NOT app.listen)

describe("API Tests", () => {
    test("Test Case 1 - Should return 200 status", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
    });

    test("Test Case 2 - Should return correct response text", async () => {
        const response = await request(app).get("/");
        expect(response.text).toBe("Hello, CI Pipeline!");
    });

    test("Test Case 3 - Should return JSON response", async () => {
        const response = await request(app).get("/api/data");
        expect(response.body).toEqual({ message: "Success" });
    });

    test("Test Case 4 - Should return 404 for invalid route", async () => {
        const response = await request(app).get("/invalid-route");
        expect(response.status).toBe(404);
    });
});
