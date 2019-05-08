## Notices for using the ORM Sequelize

[Sequelize Documentation](http://docs.sequelizejs.com/)

### 1. Create entity
```
sequelize model:generate --name Entity --attributes name:string
```

### 2. Generate seed for entity
```
sequelize seed:generate --name products 
```

### 3. Insert seeds into DB
```
sequelize db:seed:all
```

### 4. List all sequalize options
```
sequelize
```
