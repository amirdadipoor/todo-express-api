
# basic Installation of prisma orm
 
```
npm install prisma --save-dev
npx prisma
npx prisma init --datasource-provider sqlite --output ../generated/prisma

npx prisma migrate dev --name init
npm install @prisma/client
npx prisma generate
```

# after clone app run this codes 

```
npx prisma migrate dev --name init
npx prisma generate
```