### Регистрация юзера
```http://localhost:5000/auth/registration```

POST
Принимает JSON 
```
{
   "login":"admin",
   "password":"admin"
}
```

Пароль должен быть от 4 до 10 символов. <br>

Возвращает сообщение
```
{
   "message": "Пользователь admin успешно зарегистрирован"
}
```

### Логинизация
```http://localhost:5000/auth/login```

POST
Принимает JSON 
```
{
   "login":"admin",
   "password":"admin"
}
```

Возвращает токен. Действителен 24 часа с момента выдачи.
```
{
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInJvbGVzIjoyLCJpYXQiOjE2ODQ4NTU0MzcsImV4cCI6MTY4NDk0MTgzN30.fNhBuIDTtbd6uz6vpUJuWFRWtjyJjplxPusk5n0fyeY"
}
```

### Все юзеры
```http://localhost:5000/api/users```

GET
В headers передать Key: Authorization, Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInJvbGVzIjoyLCJpYXQiOjE2ODQ4NTU0MzcsImV4cCI6MTY4NDk0MTgzN30.fNhBuIDTtbd6uz6vpUJuWFRWtjyJjplxPusk5n0fyeY
Возвращает массив
```
{
   "id": 11,
   "login": "admin",
   "password": "$2a$07$hET7sI2ElSNaIC3l4JnwHu35mUfENBAINbf5iP4wIkWa/2HN.GXRC",
   "registration_date": "2023-05-23T12:37:13.411Z",
   "auth_role_id": 2
}
```