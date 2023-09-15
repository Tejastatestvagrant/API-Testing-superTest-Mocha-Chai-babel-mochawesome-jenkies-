const superTest = require("supertest");
require("dotenv").config();
const expect = require("chai");

const request = superTest("https://gorest.co.in/public/v2/");

describe("Users Api testing ", () => {
  it("get the users ", async () => {
    await request
      .get(`users?access-token=${process.env.ACCESS_KEY}`)
      .then(async (err, res) => {
       console.log(err);
        await expect(await res.body).toEqual(200);
      });
  });
});
