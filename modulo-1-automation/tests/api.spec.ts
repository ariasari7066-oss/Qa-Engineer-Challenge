// se incorpora un plus de testing automatizado API

import { test, expect } from "@playwright/test";

test('API - Crear usuario y consultarlo (JSONPlaceholder)', async ({ request }) => {

  // 1. POST - Crear usuario
  const postResponse = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Test User',
      job: 'Automation Engineer'
    }
  });

  //  Validaciones POST
  expect(postResponse.status()).toBe(201);

  const postBody = await postResponse.json();

  expect(postBody.name).toBe('Test User');
  expect(postBody.job).toBe('Automation Engineer');
  expect(postBody.id).toBeTruthy();

  const userId = postBody.id;

  console.log('User ID:', userId);

  // 2. GET - Consultar usuario
  const getResponse = await request.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

  //  Validaciones GET
  expect(getResponse.status()).toBe(404);  // Debido a que se trata de un mock puede ser 404 porque no existe realmente 

  const getBody = await getResponse.json();
  console.log('GET response:', getBody);1
  // expect(getBody.id).toBe(userId);  // Validación si impactara en base de datos

});


test('API - Crear usuario sin datos', async ({ request }) => {

  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {}
  });

  expect(response.status()).toBe(201); // API mock acepta todo

  const body = await response.json();

  expect(body.id).toBeTruthy();

});