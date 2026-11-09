
# CampusConnect API Specification

## Overview

The CampusConnect API handles user authentication and provides access to protected user information.

**Base URL:** `http://localhost:3000`

**API Version:** v1

**Authentication:** JSON Web Token (JWT)

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/health` | Checks if the API is running |
| POST | `/api/v1/sessions` | Logs in a user |
| GET | `/api/v1/users/me` | Retrieves the currently authenticated user's information |

## 1. Health Check

**Endpoint:** `GET /api/v1/health`

**Description:** Checks whether the API server is running.

**Success Response (200 OK):**

```json
{
  "status": "ok"
}
```

## 2. User Login

**Endpoint:** `POST /api/v1/sessions`

**Description:** Authenticates a user using their email and password. If the credentials are correct, the API returns a JWT and user information.

**Request Body:**

```json
{
  "email": "student@campusconnect.test",
  "password": "Campus26"
}
```

**Success Response (200 OK):**

```json
{
  "token": "<JWT token>",
  "user": {
    "id": 1,
    "name": "Demo Student",
    "email": "student@campusconnect.test"
  }
}
```

**Error Responses:**

| Status | Description | Response |
|---|---|---|
| 400 | Missing email or password | `{"error": "Email and password are required."}` |
| 400 | Invalid email format | `{"error": "Please provide a valid email address."}` |
| 401 | Incorrect email or password | `{"error": "Invalid email or password."}` |

## 3. Get Current User

**Endpoint:** `GET /api/v1/users/me`

**Description:** Retrieves the information of the currently authenticated user. This endpoint requires a valid JWT.

**Request Header:**

```http
Authorization: Bearer <JWT token>
```

**Success Response (200 OK):**

```json
{
  "id": 1,
  "name": "Demo Student",
  "email": "student@campusconnect.test"
}
```

**Error Response (401 Unauthorized):**

```json
{
  "error": "Not logged in."
}
```

## 4. Global Error Responses

### 404 Not Found

**Description:** Returned when a client requests an endpoint that does not exist.

**Response (404 Not Found):**

```json
{
  "error": "Not found."
}
```

### 500 Internal Server Error

**Description:** Returned when an unexpected error occurs on the server.

**Response (500 Internal Server Error):**

```json
{
  "error": "Something went wrong."
}
```

## 5. Events API Design

The following endpoints are proposed for the future CampusConnect Events feature. These are design specifications only and are not currently implemented.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/events` | Retrieves all events |
| GET | `/api/v1/events/:id` | Retrieves a specific event |
| POST | `/api/v1/events` | Creates a new event |
| PATCH | `/api/v1/events/:id` | Updates selected information of an event |
| DELETE | `/api/v1/events/:id` | Deletes an event |

### 5.1 List All Events

**Endpoint:** `GET /api/v1/events`

**Description:** Retrieves all available school events.

**Optional Query Parameter:**

- `month` – Filters events by month number (1–12).

**Example Request:**

```http
GET /api/v1/events?month=11
```

### 5.2 Get a Specific Event

**Endpoint:** `GET /api/v1/events/:id`

**Description:** Retrieves the details of one event using its ID.

**Example Request:**

```http
GET /api/v1/events/1
```

### 5.3 Create an Event

**Endpoint:** `POST /api/v1/events`

**Description:** Adds a new school event.

**Example Request Body:**

```json
{
  "title": "Campus Sports Fest",
  "date": "2026-11-20",
  "location": "University Gymnasium",
  "description": "Annual campus sports festival."
}
```

**Expected Success Status:** 201 Created

### 5.4 Update an Event

**Endpoint:** `PATCH /api/v1/events/:id`

**Description:** Updates selected information of an existing event without replacing the entire event.

**Example Request Body:**

```json
{
  "location": "University Covered Court"
}
```

**Expected Success Status:** 200 OK

### 5.5 Delete an Event

**Endpoint:** `DELETE /api/v1/events/:id`

**Description:** Deletes an event using its ID.

**Expected Success Status:** 204 No Content

---

**Note:** The Events API endpoints are proposed for documentation and design purposes only. They are not part of the currently implemented backend.
