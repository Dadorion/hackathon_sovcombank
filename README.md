# Sovcombank Team Challenge 2023

Платформа для автоматизации рекрутинга

## Запуск приложения

1) Скопируйте или переименуйте ```.env_example``` в ```.env``` и добавьте или измените настройки переменных окружения
2) Запустите приложения в контейнерах с помощью команды ```make up``` или ```docker-compose up```

Доступ к базе данных (по умолчанию): ```0.0.0.0:5432```

Доступ к API (по умолчанию): ```0.0.0.0:5000```

Доступ к веб-интерфейсу (по умолчанию): ```0.0.0.0:3000```

Данные для входа в админ-панель:

- логин: **admin**
- пароль: **admin**

***

## Run for development

Create ```.env file``` or rename ```.env_example``` and add variables for connect to database.

To start server for dev use command :
```bash
make up
```

For run only database use:
```bash
make run-db
```
