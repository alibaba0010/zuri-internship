# Stage Two Backend

A simple CRUD operation interfacing with MongoDB

## Installation

Git clone the folder

```bash
Run npm install at the root directory
```

### Run the nodejs application using

```bash
npm run dev
```

# Usage

## Create a user

## Route

### http://localhost:3001/api

```bash
{
    "name" : "Edwin",
    "password": "password"
}
## Response
{
    "user": {
        "name": "Edwin",
        "id": "6500218c9fb59cc2c2ece8ca"
    }
}
```

## Get a user

## Route

### http://localhost:3001/api/{{user_id}}

## Update a user

## Route

### http://localhost:3001/api/{{user_id}}

```bash
{
    "name" : "Paul",
}
## Response
{
    "user": "Paul"
}
```

## Delete a user

## Route

### http://localhost:3001/api/{{user_id}}

```bash
## Response
{
    "user": "Paul"
}
```

```



## License

[MIT](https://choosealicense.com/licenses/mit/)
```
