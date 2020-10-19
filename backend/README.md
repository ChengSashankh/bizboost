## Application Backend

This application backend is a REST API that is written in node.js using express.js.

### Project structure

The code is placed beginning in this directory. Each endpoint router is placed as a sub-directory under routes. 

```
- routes
  --- card
   ----- stop
   ----- resume
  --- ATM
   ----- search
  --- merchant
   ----- search
  --- travel
   ----- add itinerary
   ----- remove itinerary
```

The end points then call the appropriate handler methods placed under the `handlers` directory to execute the functionality.


### Sequence diagram

The following diagram represents the flow of control inside the REST API.

[ TODO ]

### API Documentation

#### `/card`

1. `/stop`

Request format:
```
```

Response format:
```
```

2. `/resume`


Request format:
```
```

Response format:
```
```

#### `/merchant`

1. `/search`


Request format:
```
```

Response format:
```
```

#### `/ATM`

1. `/search`


Request format:
```
```

Response format:
```
```

#### `/travel`

1. `add`


Request format:
```
```

Response format:
```
```

2. `remove`


Request format:
```
```

Response format:
```
```