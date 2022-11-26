Установка :

Первым делом инициализируем проект:

### npm i

Установите Docker ([https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)):

- Windows — Docker Desktop for Windows.
- MacOS — Docker Desktop for Mac.
- Linux — в зависимости от версии: CentOS, Debian, Fedora, Raspbian, Ubuntu.

Запустите Docker Desktop.

Откройте терминал (macOS и Linux) или Git Bash (Windows) и введите команду:

### docker run -d -p 127.0.0.1:27017:27017 --name your-project-name mongo


Создать файл, содержащий переменные окружения,  `.env`и заполнить по примеру в  `.env.example`

Для запуска сервера используйте команду:

### npm run start

Для запуска в development режиме выполните команду:

### npm run dev

Сервер будет доступен по адресу http://127.0.0.1:<PORT> .