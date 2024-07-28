# REMINDER SERVICE

## INSTALL DEPENDENCIES

    npm i

## SEQUELIZE SETUP

    npx sequelize init
    npx sequelize db:create
    npx sequelize model:generate --name NotificationTicket --attributes subject:string,content:string,recepientEmail:string,status:enum,notificationTime:date
    npx sequelize db:migrate
