# Qa Engineer Challenge - Smoke Test / Functional Testing / Testing Api´s

##  Descripción

Este proyecto contiene la resolución de una prueba técnica para QA Integral, incluyendo:

* Automatización de pruebas (Smoke Test) sobre el flujo de login
* Diseño de pruebas funcionales para un producto ficticio (MakersPay)
* Validación de una API REST

El objetivo es demostrar buenas prácticas de testing, automatización y organización del código.

---

##  Tecnologías utilizadas

*  Playwright
*  TypeScript
*  Testing E2E (UI Testing)
*  API Testing

---

##  Estructura del proyecto

```
QA-ENGINEER-CHALLENGE/
│
├── .github/
├── .vscode/
│
├── modulo- 1automation/        # Testing Smoke Automatizado
│   ├── tests/                  # Casos automatizados
│   ├── pages/                  # Page Object Model
│   ├── data/                   # Test data (users)
│   ├── playwright.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── modulo-2 functional-testing/ # Testing funcional/documentación
│   ├── requirements.md
│   ├── test-strategy.md
│   ├── test-scenarios.md
│   ├── test-cases.md
│   └── bug-reports.md
│
├── modulo-3 api-testing/         # API testing 
│   ├── Modulo_API                #Evidencia Postman
│   ├── collections.json
│   └── test_cases
│
├── README.md
```

---

##  Módulo 1 - Automatización (Smoke Test)

Aplicación bajo prueba: https://www.saucedemo.com/

###  Escenarios cubiertos

* Login exitoso con credenciales válidas
* Login con credenciales inválidas
* Validación de campos obligatorios:

  * Usuario vacío
  * Password vacío
  * Ambos campos vacíos

###  Buenas prácticas aplicadas

* Page Object Model (POM)
* Separación de datos de prueba
* Validaciones robustas (UI + mensajes de error)
* Uso de `baseURL` en configuración
* Ejecución multi-browser (Chromium, Firefox, WebKit)

---

## ▶️ Cómo ejecutar los tests

### Instalar dependencias

```
npm install
```

### Ejecutar tests

```
npx playwright test
```

### Ejecutar en un browser específico

```
npx playwright test --project=chromium
```

### Ver reporte HTML

```
npx playwright show-report
```

---

##  Módulo 2 - Testing Funcional (MakersPay)

Se realizó la elaboración de los testware de QA para un producto ficticio: billetera digital MakersPay

Testwares:

* Estrategia de testing
* Escenarios de prueba
* Casos de prueba
* Reportes de bugs


###  Cobertura

* Validación de reglas de negocio
* Casos positivos y negativos
* Pruebas de límites (mínimos y máximos)
* Validaciones de errores

---

##  Módulo 3 - API Testing

API utilizada: https://jsonplaceholder.typicode.com/

###  Pruebas realizadas

* Creación de usuario (POST)
* Validación de respuesta (201)
* Consulta de usuario (GET)
* Validación de datos

---

##  Enfoque QA

Este proyecto fue desarrollado aplicando principios de calidad como:

* Diseño de pruebas basado en riesgos
* Cobertura de escenarios críticos
* Separación de responsabilidades
* Código mantenible y escalable

---

## 👩‍💻 Autor

Ariadna Arias
QA Tester 

---

