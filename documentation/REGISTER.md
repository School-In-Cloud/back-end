# Authentication

**URL** : `/api/auth/register`

**Method** : `POST`

**BODY** : `{"username":"username","password":"password","user_type":0, "country":"USA"}`

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
            "user_type": "admin",
            "country": "USA"
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