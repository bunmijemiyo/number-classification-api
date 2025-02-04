# Number Classification API

This API classifies a number with mathematical properties and fetches a fun fact.

## API Endpoint

- **GET /api/classify-number?number=371**

### Example Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## How to Run Locally

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/number-classifier-api.git
   cd number-classifier-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the API:

   ```sh
   node index.js
   ```

4. Test in browser/Postman:
   ```
   http://localhost:3000/api/classify-number?number=371
   ```

## Deployment

Deployed on **Render/Vercel/Railway** at:

```
<your-deployment-url>
```

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
