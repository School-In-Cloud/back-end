# Authentication

**URL** : `/api/auth/login`

**Method** : `POST`

**BODY** : `{"username":"username","password":"password"`

**Auth required** : NO

**Data constraints** : YES


## Success Response

**Code** : `200 OK`

**Users response example**

```json
{
    "data": [
        {
            "id": 1,
            "username": "username",
            "token":"token"
        }
    ]
}
```

## Error Response

**Condition** : If users do not exist.

**Code** : `200 OK`

**Content** :

```json
{
    "data":'(user object)'
}
```

**Condition** : If auth does not exist.

**Code** : `502 Error`

**Content** :

```json
{
    []
}