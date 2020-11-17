# Users

**URL** : `/api/users/`

**Method** : `GET`

**URL Parameters** : `id=[integer]` where `id` is the ID of the user on the
server.

**Auth required** : YES

**Data constraints** : NO


## Success Response

**Code** : `200 OK`

**Users response example**

```json
{
    "data": [
        {
            "id": 1,
            "username": "user123"
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
    []
}
```

**Condition** : If auth does not exist.

**Code** : `502 Unauthorized`

**Content** :

```json
{
    []
}